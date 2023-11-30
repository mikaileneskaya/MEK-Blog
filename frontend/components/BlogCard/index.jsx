"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

const BlogCard = ({ attributes, id, url, photo, description }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(`http://127.0.0.1:1337/api/posts/${id}?populate=*`);
      const data = await response.json();
      setImageUrl(data.data.attributes.photo.data.attributes.formats.large.url);
    };
  
    fetchImage();
  }, [id]);

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Link href={`/${id}`}>
          <Image
            src={`http://127.0.0.1:1337${imageUrl}`}
            alt={attributes.title}
            width={320}
            height={180}
            className={styles.imgr}
          />
        </Link>
      </div>

      <div className={styles.content}>
        <h3>
          <Link href={`/${id}`} className={styles.h33}>
            {attributes.title}
          </Link>
        </h3>
        <Link href={`/${id}`} className={styles.pp}>
          <p>{attributes.description}</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
