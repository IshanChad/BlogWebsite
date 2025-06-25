import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import { writeFile } from 'fs/promises';
import { Buffer } from "buffer";

const loadDB = async () => {
    try {
        await ConnectDB();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

export async function GET(req) {
    await loadDB();  // Load the database inside each handler if needed
    console.log('Blog GET hit');
    return NextResponse.json({ msg: 'API Working' });
}

export async function POST(req) {
    await loadDB();  // Load the database inside each handler if needed

    try {
        const formData = await req.formData();
        const timeStamp = Date.now();

        const image = formData.get('image');
        if (!image) {
            return NextResponse.json({ error: 'No image provided' }, { status: 400 });
        }

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/${timeStamp}_${image.name}`;
        await writeFile(path, buffer);
        const imgUrl = `/${timeStamp}_${image.name}`;

        return NextResponse.json({ imgUrl });
    } catch (error) {
        console.error('Error processing POST request:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
