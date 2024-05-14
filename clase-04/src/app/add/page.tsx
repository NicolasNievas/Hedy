"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useBooks } from '@/context/BookContext';
import Swal from 'sweetalert2';
import { navigate } from '@/components/navigate';

const AddBookForm = () => {
    const { addBook, setBooks } = useBooks();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        authorName: '',
    });
    const [formErrors, setFormErrors] = useState({
        title: '',
        description: '',
        date: '',
        authorName: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const errors = validateForm(formData);
        setFormErrors(errors as { title: string; description: string; date: string; authorName: string; });

        // Verifica validacion
        if (Object.values(errors).some((error) => error !== '')) {
            return; 
        }

        try {
            const response = await axios.post('/api', formData);
            addBook(response.data);
            setBooks((prevBooks: any) => [...prevBooks, response.data]);
            Swal.fire({
                icon: 'success',
                title: 'Book added correctly',
                showConfirmButton: false,
                timer: 1500,
            });
            setFormData({
                title: '',
                description: '',
                date: '',
                authorName: '',
            });
            navigate();
        } catch (error) {
            console.error('Error adding the book:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error adding the book',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const validateForm = (data: { title: any; description: any; date: any; authorName: any; }) => {
        let errors: { title?: string; description?: string; date?: string; authorName?: string; } = {};
        if (!data.title) {
            errors.title = 'Title is required';
        }
        if (!data.description) {
            errors.description = 'Description is required';
        }
        if (!data.date) {
            errors.date = 'Date is required';
        }
        if (!data.authorName) {
            errors.authorName = "Author's name is required";
        }
        return errors;
    };

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    {formErrors.title && <p className="text-red-500">{formErrors.title}</p>}
                </div>
                <div>
                    <label className="block mb-1">Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border rounded px-3 py-2"></textarea>
                    {formErrors.description && <p className="text-red-500">{formErrors.description}</p>}
                </div>
                <div>
                    <label className="block mb-1">Date:</label>
                    <input type="text" name="date" value={formData.date} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    {formErrors.date && <p className="text-red-500">{formErrors.date}</p>}
                </div>
                <div>
                    <label className="block mb-1">Author's name:</label>
                    <input type="text" name="authorName" value={formData.authorName} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    {formErrors.authorName && <p className="text-red-500">{formErrors.authorName}</p>}
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Book</button>
            </form>
        </div>
    );
};

export default AddBookForm;
