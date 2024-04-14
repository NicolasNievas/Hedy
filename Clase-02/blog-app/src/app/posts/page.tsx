"use client";
import { useState } from 'react';
import { addBlog } from '../../lib/PostServices';
import Link from 'next/link';
import Swal from 'sweetalert2';


const AddBlog = ({ redirect }) => {
  const [formData, setFormData] = useState({
    title: '',
    coverImage: '',
    content: '',
    authorName: 'Anonymous',
  });

  const defaultAuthorPicture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZAV6OLHHc8z7I4OaVD0ljzGdeFP0tGreDi3yMFwLBZRXWt7Nh93hC8uRt-UnawErZBw&usqp=CAU';

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();
    try {
      await addBlog({ 
        title: formData.title,
        coverImage: formData.coverImage,
        content: formData.content,
        author: {
          name: formData.authorName,
          picture: defaultAuthorPicture,
        },
        date: currentDate,
      });
      console.log('Blog added successfully');

      Swal.fire({
        icon: 'success',
        title: 'Blog added successfully',
        showConfirmButton: false,
        timer: 1500, 
      });

      setFormData({
        title: '',
        coverImage: '',
        content: '',
        authorName: '',
      });

      setTimeout(() => {
        redirect('/');
      }, 1500);
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Link href="/" className="hover:underline">
      <h1 className="text-3xl font-semibold mb-4">Add Blog</h1>
    </Link>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-semibold">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter title"
            required
          />
        </div>
        <div>
          <label htmlFor="coverImage" className="block font-semibold">Cover Image URL</label>
          <input
            type="text"
            id="coverImage"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter cover image URL"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block font-semibold">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"
            placeholder="Enter content"
            required
          />
        </div>
        <div>
          <label htmlFor="authorName" className="block font-semibold">Author Name</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter author name"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add</button>
      </form>
    </div>
  );
};

export default AddBlog;
