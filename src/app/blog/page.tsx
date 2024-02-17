// "use client";

import React from "react";

import Blog from "@/modules/Blog";
import { BlogType } from "./model";

async function getBlog() {
  try {
    const res = await fetch("https://api.b-e.az/news-for-view");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function BlogPage() {
  const blog: BlogType | null = await getBlog();

  return <Blog blog={blog} />;
}
