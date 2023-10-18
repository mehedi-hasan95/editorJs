import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const postData = await prisma.content.create({
            data: reqBody,
        });
        return NextResponse.json({ msg: "success", postData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET(req, res) {
    try {
        const result = await prisma.content.findMany();
        return NextResponse.json({ msg: "success", result });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
