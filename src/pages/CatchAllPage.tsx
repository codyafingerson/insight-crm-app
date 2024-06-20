import { useNavigate } from "react-router-dom";

export default function CatchAllPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  }

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-500 dark:text-blue-600">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-100">
            The page you are looking for does not seem to exist.
          </p>
          <button
            className="bg-blue-500 inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleClick}
          >
            Back
          </button>
        </div>
      </div>
    </section>
  )
}