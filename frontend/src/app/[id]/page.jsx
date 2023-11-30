import { notFound } from "next/navigation";
import styles from "./styles.module.css";
import Image from "next/image";
import {marked} from "marked";

async function getPost(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:1337/api/posts/${id}?populate=*`
    );
    if (!response.ok) {
      throw new Error("Post not found");
    }
    return response.json();
  } catch (error) {
    return null;
  }
}

const BlogPage = async ({ params }) => {
  const data = await getPost(params.id);
  if (!data) {
    notFound();
  }

  const content = marked(data.data.attributes.description ?? "");

  return (
    <main className={styles.mainn}>
      <div className={styles.imgContainer}>
        <div className={styles.gradientOverlay} />
        <Image
          src={`http://127.0.0.1:1337${data.data.attributes.photo.data.attributes.formats.large.url}`}
          alt={data.data.attributes.title}
          layout="fill"
          objectFit="cover"
          className={styles.imgg}
        />
        <h1 className={styles.h11}>{data.data.attributes.title}</h1>
      </div>
      <article className={styles.pp} dangerouslySetInnerHTML={{__html: content}}/>
    </main>
  );
};

export default BlogPage;
