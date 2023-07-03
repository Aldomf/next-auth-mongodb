"use client";

import { useSession, signOut } from "next-auth/react";

function ProfilePage() {
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mt-4 mb-4">Profile</h1>
        <pre className="bg-gray-100 p-4 rounded-md">
          {JSON.stringify(
            {
              session,
              status,
              email: session?.user?.email,
            },
            null,
            2
          )}
        </pre>
        <button
          className="max-w-7xl bg-red-500 text-white p-4 rounded-md mt-4"
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

