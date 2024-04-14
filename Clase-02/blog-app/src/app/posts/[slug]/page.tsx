import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/lib/RestServices";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { BlogBody } from "@/app/_components/blog-body";
import { BlogHeader } from "@/app/_components/blog-header";

export default async function Post({ params }: Params) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const content = await markdownToHtml(blog.content || "");

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <BlogHeader
            title={blog.title}
            coverImage={blog.coverImage}
            date={blog.date}
            author={blog.author}
          />
          <BlogBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} `; 

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((post) => ({
    slug: post.slug,
  }));
}
