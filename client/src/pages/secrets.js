import { useParams } from "react-router-dom";
import { validSecret } from "../api/useSecret";
import { useState } from "react";

export const Secret = () => {
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState("");
  const { id } = useParams();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const secret = await validSecret(id, password);
    setValid(secret);
    console.log(secret);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" onSubmit={onSubmitForm}>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-red-900 dark:text-red-500"
          >
            Your Secret Link
          </label>
          <input
            className="appearance-none rounded-none relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Valid
          </button>
          <h2 className="">{valid}</h2>
        </form>
      </div>
    </div>
  );
};
