import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-blue-500 text-3xl font-semibold text-center my-5">
        All Blog
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between min-h-screen  pb-20 gap-5  font-[family-name:var(--font-geist-sans)]">
        {data.map((blog) => (
          <Link href={`/${blog.id}`} key={blog.id}>
            <div className="border p-5 rounded-md shadow-md h-28">
              <h3 key={blog.id}>{blog.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
