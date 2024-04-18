export interface Character {
    name: string;
    gender: string;
    culture: string;
    titles: Title[]; 
    aliases: Alias[];
    books: string[]; 
  }
  

  export interface Title {
    name: string;
  }
  
  export interface Alias {
    name: string;
  }
