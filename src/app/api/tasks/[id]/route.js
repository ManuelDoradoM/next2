import { NextResponse } from "next/server";
import { prisma } from "@/src/libs/prisma";

export async function GET(request, {params}) {

    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(task)
}

export async function PUT(request, {params}) {

    const data = await request.json()

    try {
        const taskUpdated = await prisma.task.update({
            where: {
                id: Number(params.id)
            },

            data: data
        })
        
    }
    catch(error) {
        return NextResponse.json(error.message);
    }

    return NextResponse.json(taskUpdated)
}

export async function DELETE(request, {params}) {

    try {
        const taskRemove = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json(taskRemove);
    }
    catch(error) {
        return NextResponse.json(error.message);
    }

    
}