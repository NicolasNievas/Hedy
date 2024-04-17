"use client";
import { useEffect, useState, useRef } from 'react';
import { getBookData, getChapterDataForCharacters } from '@/services/RestServices';

export default function Home() {
  const [books, setBooks] = useState<any[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const bookData = await getBookData();
      const chapterData = await getChapterDataForCharacters(bookData);
      setBooks(chapterData);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-8 mb-4 text-3xl font-bold">Libros</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index} className="mb-8">
            <div className="border border-gray-300 p-4">
              <div className="flex justify-between mb-2">
                <div>
                  <strong>{book.name}</strong>
                </div>
                <div>
                  {book.authors} - {book.country}
                </div>
              </div>
              <details>
                <summary>Personajes</summary>
                <ul>
                  {book.characters.map((character: any, characterIndex: number) => (
                    <li key={characterIndex}>
                      <div className="border-t border-gray-300 pt-2 mt-2">
                        <strong>{character.name}</strong>
                        <div>
                          Género: {character.gender}, Título: {character.titles && character.titles.length > 0 ? character.titles[0] : 'Sin título'}, Alias: {character.aliases && character.aliases.length > 0 ? character.aliases[0] : 'Sin alias'}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </li>
        ))}
      </ul>
      <div ref={footerRef}></div> 
    </div>
  );
}