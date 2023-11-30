"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import styles from "./styles.module.css";
import MyCarousel from "../../components/carousel";


async function getPost() {
  const response = await fetch(`http://localhost:1337/api/posts`);
  return response.json();
}

export default function Home() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    getPost().then((data) => {
      setPosts(data.data);
    });
  }, []);

  return (
    <main className={styles.mainn}>
      <MyCarousel />
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </main>
  );
}
