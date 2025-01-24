import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navber = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex justify-between items-center bg-gray-100 gap-3 py-5 px-2 md:px-8">
      <h2 className="text-blue-500 text-3xl font-semibold ">Blogio</h2>
      <div className="flex gap-2 md:gap-5 items-center list-none">
        <li>
          <Link href="/">Home</Link>
        </li>
        {user ? (
          <li>
            <button className="bg-black text-white py-1 px-4 rounded-full">
              <LogoutLink>Logout</LogoutLink>
            </button>
          </li>
        ) : (
          <>
            <li>
              <button className="bg-black text-white py-1 px-4 rounded-full">
                <LoginLink>Login</LoginLink>
              </button>
            </li>

            <li>
              <button className="bg-black text-white py-1 px-4 rounded-full">
                <RegisterLink>Register</RegisterLink>
              </button>
            </li>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
