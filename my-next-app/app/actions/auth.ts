"use server";

import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

interface formdata {
  email: string,
  password: string,
  username: string,
}

export async function signup(formData: formdata) {
  const email = formData.email;
  const password = formData.password;
  const username = formData.username;
  if (!email || !password || !username) {
    return { error: "some fields are missing" };
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return { error: "User already exists." };
  }

  const hashedPassword = await hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      username: username,
    },
  });

  return { success: "User created successfully!" };
}
