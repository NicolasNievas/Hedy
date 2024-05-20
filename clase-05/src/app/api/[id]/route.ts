import { books } from "@/data/data";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const description = books.find((description) => description.id === parseInt(params.id));
    if (description) {
        return Response.json(description);
    } else {
        return new Response(JSON.stringify({ message: 'Book not found' }), { status: 404 });
    }
}