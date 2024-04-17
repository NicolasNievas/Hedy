"use client";
import React, { useState, useEffect } from "react";
import { getBookData, getChapterDataForCharacters} from "@/services/RestServices";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookData = await getBookData();
        const chapterData = await getChapterDataForCharacters(bookData);
        const allCharacters = chapterData.reduce((acc, book) => {
          return [
            ...acc,
            ...book.characters.map((character: any) => ({
              ...character,
              book: book.name,
            })),
          ];
        }, []);

        setCharacters(allCharacters);
      } catch (error) {
        console.error("Error fetching characters data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-4 px-6 mt-16">
      <h2 className="text-center mb-8 text-3xl font-bold">Personajes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {characters.map((character, index) => (
          <div key={index} className="mb-8">
            <div className="border border-gray-300 p-4">
              <strong>{character.name}</strong>
              <div className="mt-2">
                {character.gender && <div>Género: {character.gender}</div>}
                {character.titles && character.titles.length > 0 && (
                  <div>Título: {character.titles[0]}</div>
                )}
                {character.aliases && character.aliases.length > 0 && (
                  <div>Alias: {character.aliases[0]}</div>
                )}
                {character.book && <div>Libro: {character.book}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}