import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getUserCollection } from "@/lib/database/db_collections";

// Define the types for the request body
interface RequestBody {
  userId: string;
  email: string;
  password: string;
  role?: string;
  photoUrl?: string | null;
  name: string;
}

export const POST = async (req: Request) => {
  try {
    const usersCollection = await getUserCollection();
    const body: RequestBody = await req.json();

    const { userId, email, password, role, photoUrl, name } = body;

    if (!email || !password || !userId) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if email or userId already exists
    const existingUser = await usersCollection.findOne({
      $or: [{ email }, { userId }],
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email or User ID already exists. Please check your email and try again" },
        { status: 409 }
      );
    }

    // Hash the password before storing it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user with hashed password
    const result = await usersCollection.insertOne({
      userId,
      email,
      name,
      password: hashedPassword,
      role,
      photoUrl,
    });

    return NextResponse.json(
      {
        message: "User registered successfully",
        userId: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        message: "Internal server error",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
};

export default POST;
