"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { deleteCharacterData } from "@/services/RestServices";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/characters"
      );
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.error("Error fetching characters data:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const confirmation = await Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (confirmation.isConfirmed) {
        await deleteCharacterData(id);
        setCharacters(
          characters.filter((character: { url: string }) => character.url !== id)
        );
        Swal.fire({
          icon: "success",
          title: "Personaje eliminado",
          text: "El personaje ha sido eliminado exitosamente",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      console.error("Error deleting character:", error);
    }
  };

  return (
    <div className="container mx-auto py-4 px-6 mt-16">
      <h2 className="text-center mb-8 text-3xl font-bold">Personajes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {characters.map((character, index) => (
          <div key={index} className="mb-8">
            <div className="border border-gray-300 p-4">
              <strong>{(character as { name: string }).name}</strong>
              <div className="mt-2">
                {(character as { gender: string }).gender && (
                  <div>Género: {(character as { gender: string }).gender}</div>
                )}
                {(character as any).titles &&
                  (character as any).titles.length > 0 && (
                    <div>Título: {(character as any).titles[0]}</div>
                  )}
                {(character as { aliases: string[] }).aliases &&
                  (character as { aliases: string[] }).aliases.length > 0 && (
                    <div>
                      Alias: {(character as { aliases: string[] }).aliases[0]}
                    </div>
                  )}
                {(character as { book: string }).book && (
                  <div>Libro: {(character as { book: string }).book}</div>
                )}
                {(character as { culture: string }).culture && (
                  <div>
                    Cultura: {(character as { culture: string }).culture}
                  </div>
                )}
                <div className="mt-4 flex justify-end">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() =>handleDelete((character as { url: string }).url)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}