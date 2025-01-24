const page = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blog = await res.json();
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">Blog Details</h1>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
          <p className="mb-2">
            <strong>User ID:</strong> {blog.userId}
          </p>
          <p className="mb-2">
            <strong>Post ID:</strong> {blog.id}
          </p>
          <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
          <p className="text-gray-700 leading-relaxed">{blog.body}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
