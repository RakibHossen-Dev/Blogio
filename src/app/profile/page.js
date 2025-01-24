import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to your profile!</h1>
        <h1 className="text-2xl font-semibold">
          Name : {user?.given_name} {user?.family_name}
        </h1>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default page;
