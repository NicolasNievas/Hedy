"use client"
import React, { createContext, useContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { books as initialBooks } from '@/data/data';

interface IDataContext{
    books: any[];
    addBook: (book: any) => void;
    getBook: (id: number) => any;
    setBooks: Dispatch<SetStateAction<any | null>>;
}

interface IDataProvideProps {
    children: JSX.Element[] | JSX.Element | React.ReactNode;
  }

const BookContext = createContext<IDataContext>({
  books: initialBooks,
  addBook: (book) => {},
  getBook: (id) => {},
  setBooks: () => {},
});

export const BookProvider = ({ children } : IDataProvideProps) => {
    const [books, setBooks] = useState<any[]>(initialBooks);

    useEffect(() => {
        setBooks(initialBooks);
    }, []);
  
    const addBook = (book : any) => {
      const newBook = { ...book, id: Date.now() };
      setBooks((prevBooks) => [...prevBooks, newBook]);
    };

  
    const getBook = (id : number) => {
      return books.find((book) => book.id === id);
    };
  
    return (
      <BookContext.Provider value={{ books, addBook, getBook, setBooks }}>
        {children}
      </BookContext.Provider>
    );
  };

export function useBooks() {
    return useContext(BookContext);
}