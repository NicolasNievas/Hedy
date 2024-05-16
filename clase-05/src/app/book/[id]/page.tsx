"use client"
import React, { useEffect, useState } from 'react';
import Loading from '@/components/loading';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { books } from '@/data/data';

interface ParamProps {
    params: { id: string };
}

const BookDetail = ({ params }: ParamProps) => {
    const [book, setBook] = useState<any>(null);

    useEffect(() => {
        const book = books.find(book => book.id === Number(params.id));
        if (book) {
            setBook(book);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Book not found',
                showConfirmButton: false,
                timer: 1500, 
            });
            
        }
    }, [params.id]);

    if (!book) {
        return <Loading />;
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl text-center">{book.title}</h2>
                    <p className="mt-4 text-lg text-gray-600">{book.description}</p>
                    <div className="flex items-center mt-4">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                            <Image src={book.authorImage} alt={book.authorName} width={32} height={32} />
                        </div>
                        <div>
                            <p className="text-gray-500">{book.authorName}</p>
                            <p className="text-gray-500">{book.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
