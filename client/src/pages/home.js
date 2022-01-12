import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { addSecret } from "../api/useSecret";

export const Home = () => {
  const [body, setBody] = useState("");
  const [password, setPassword] = useState("");
  const [expiresIn, setExpiresIn] = useState("");

  const navigate = useNavigate();

  const { mutate } = useMutation(addSecret, {
    onSuccess: (data) => {
      console.log(data);
      navigate(`/secrets/${data}`);
    },
  });

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const content = { body, password, expiresIn };
      mutate(content);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              One Time Secret
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSubmitForm}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="Message" className="sr-only">
                  Your Secret
                </label>
                <textarea
                  id="Message"
                  type="text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder=" Your Secret messge here.."
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="ExpiresIn" className="sr-only">
                  expiresIn
                </label>
                <input
                  id="ExpiresIn"
                  value={expiresIn}
                  onChange={(e) => setExpiresIn(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="ExpiresIn"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Secret Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
