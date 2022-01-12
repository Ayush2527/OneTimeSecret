import { fetchSecrets } from "../api/useSecret";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const NewLink = () => {
  // const {secrettesting} = useStore((state)=>state.secret)
  // console.log(secrettesting)

  const { id } = useParams();
  const { isLoading, data, isError } = useQuery(
    ["secret",  id ], () =>
    fetchSecrets(id)
    );
  console.log(data);

  if (isLoading) {
    return <p>loading..</p>;
  }

  if (isError) {
    return <p>Error..</p>;
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <label
            htmlFor="disabled-input"
            className="block mb-2 text-sm font-medium text-red-900 dark:text-red-500"
          >
            Your Secret Link
          </label>
          <h2 className="mb-6 bg-gray-100 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            
            localhost:3000/private/{id}
          </h2>
          <label
            htmlFor="disabled-input-2"
            className="block mb-2 text-sm font-medium text-red-900 dark:text-red-500"
          >
            Your Secret
          </label>
          <input
            type="text"
            id="disabled-input-2"
            className="bg-gray-100 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white-500 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={data.body}
            readOnly
          />
          {/* <h1><p>{data.body}</p></h1>
            <h3>localhost:3000/private/{id}</h3> */}
        </div>
      </div>
    </>
  );
};
