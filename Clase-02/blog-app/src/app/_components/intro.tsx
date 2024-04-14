import Link from 'next/link';

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <Link href="/posts">
        <button className="btn btn-success rounded-full px-6 py-3 text-lg font-semibold transition-colors duration-300 bg-green-500 hover:bg-green-600 hover:text-white">
          Add Blog
        </button>
      </Link>
    </section>
  );
}
