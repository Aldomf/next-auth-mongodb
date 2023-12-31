"use client";

import { useSession, signOut } from "next-auth/react";

function ProfilePage() {
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center bg-white rounded-md p-8 shadow-md mt-5">
        <h1 className="text-5xl mt-4 mb-4">Profile</h1>
        <div className="text-center">
          <p className="text-gray-500">{session?.user?.email}</p>
          <p className="text-green-500">{status}</p>
        </div>
        <button
          className="bg-red-500 text-white p-4 rounded-md mt-4"
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;



