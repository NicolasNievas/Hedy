import { books } from "@/data/data";
const defaultAuthorImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZAV6OLHHc8z7I4OaVD0ljzGdeFP0tGreDi3yMFwLBZRXWt7Nh93hC8uRt-UnawErZBw&usqp=CAU";

export async function GET() {
  return Response.json(books);
}


export async function POST(request: any) {
    try {
        const book = await request.json();
        const newBook = {
            id: books.length + 1,
            title: book.title,
            description: book.description,
            date: book.date,
            authorName: book.authorName,
            authorImage: defaultAuthorImage,
        };
        books.push(newBook);
        
        return new Response("Book added correctly", {
            headers: {
                "Content-Type": "text/plain",
            },
            status: 201,
        });
    } catch (error) {
        console.error('Error adding the book:', error);
        return new Response("Error adding the book", {
            headers: {
                "Content-Type": "text/plain",
            },
            status: 500,
        });
    }
}
