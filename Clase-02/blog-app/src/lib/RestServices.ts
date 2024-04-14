  import { Post } from "@/models/post";
  import fs from "fs";
  import { join } from "path";

  const postsDirectory = join(process.cwd(), "data");

  export function getBlogBySlug(slug: string): Post | null {
    const fileContents = fs.readFileSync(postsDirectory + "/db.json", "utf8");
    const jsonData = JSON.parse(fileContents);

    const post = jsonData.teams.find((team: any) => team.id.toString() === slug);

    if (!post) {
      return null;
    }

    const postObj: Post = {
      slug: post.id.toString(),
      title: post.title,
      date: post.date,
      coverImage: post.coverImage, 
      author: post.author,
      excerpt: post.content.substring(0, 250), 
      ogImage: { url: post.coverImage },
      content: post.content,
    };
    return postObj;
  }

  export function getAllBlogs(): Post[] {
    const fileContents = fs.readFileSync(postsDirectory + "/db.json", "utf8");
    const jsonData = JSON.parse(fileContents);

    const posts = jsonData.teams.map((team: any) => {
      return {
        slug: team.id.toString(), 
        title: team.title,
        date: team.date,
        coverImage: team.coverImage, 
        author: team.author,
        excerpt: team.content.substring(0, 250), 
        ogImage: { url: team.coverImage }, 
        content: team.content,
      };
    });

    posts.sort((post1: { date: number; }, post2: { date: number; }) => (post1.date > post2.date ? -1 : 1));
    return posts;
  }


  