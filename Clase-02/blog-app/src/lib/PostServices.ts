import { Post } from "@/models/post";

export async function addBlog(postData: Post): Promise<void> {
  try {
    const response = await fetch('http://localhost:3001/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      console.log('Blog added successfully');
    } else {
      throw new Error('Failed to add blog');
    }
  } catch (error) {
    console.error('Error adding blog:', error);
  }
}