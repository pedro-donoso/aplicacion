import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: "...¡Obteniendo datos!"
    })
}

export function POST() {
    return NextResponse.json({
        message: "...¡Creando datos!"
    })
}

export function PUT() {
    return NextResponse.json({
        message: "...¡Actualizando datos!"
    })
}

export function DELETE() {
    return NextResponse.json({
        message: "...¡Eliminando datos!"
    })
}