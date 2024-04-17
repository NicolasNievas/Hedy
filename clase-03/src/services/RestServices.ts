import axios from 'axios';
import _ from 'lodash';

export async function getBookData() {
  try {
    const response = await axios.get('https://www.anapioficeandfire.com/api/books');
    const booksData = response.data;
    return booksData;
  } catch (error) {
    console.error('Error fetching book data:', error);
    return [];
  }
}

export async function getCharacterData(characterUrl: string) {
  try {
    const response = await axios.get(characterUrl);
    const characterData = response.data;
    return characterData;
  } catch (error) {
    console.error(`Error fetching character data for ${characterUrl}:`, error);
    return {}; 
  }
}

export async function getChapterDataForCharacters(books: any[]) {
  try {
    const characterPromises = books.map(async (book) => {
      const characterData = await Promise.all(book.povCharacters.map(async (characterUrl: string) => {
        const response = await axios.get(characterUrl);
        const { name, gender, culture, titles, aliases } = response.data;
        return { name, gender, culture, titles, aliases };
      }));
      return { ...book, characters: characterData };
    });

    const characterData = await Promise.all(characterPromises);
    return characterData;
  } catch (error) {
    console.error('Error fetching character data for characters:', error);
    return [];
  }
}

export async function editCharacterData(characterId: string, newData: any) {
  try {
    // Fetch the character data from the API
    const response = await axios.get(characterId);
    const characterData = response.data;

    // Merge the new data with the existing character data
    const updatedCharacterData = _.merge(characterData, newData);

    // Update the character data on the API
    await axios.put(characterId, updatedCharacterData);

    // Return the updated character data
    return updatedCharacterData;
  } catch (error) {
    console.error(`Error editing character data for ${characterId}:`, error);
    return null;
  }
}

export async function deleteCharacterData(characterId: string) {
  try {
    await axios.delete(characterId);

    return 'Character data deleted successfully';
  } catch (error) {
    console.error(`Error deleting character data for ${characterId}:`, error);
    return null;
  }
}