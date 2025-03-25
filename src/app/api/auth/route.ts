import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Check if email already exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "Email already exists" },
        { status: 400 }
      );
    }

    // Check if name already exists
    const existingUserByName = await prisma.user.findUnique({
      where: { name },
    });

    if (existingUserByName) {
      return NextResponse.json(
        { user: null, message: "Name already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { user: newUser, message: "New user is created" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        user: null,
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
