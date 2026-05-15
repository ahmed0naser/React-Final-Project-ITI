import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center from-base-300 to-base-100 px-4">
      <div className="text-center bg-base-200 shadow-2xl rounded-3xl p-10 max-w-lg w-full">
        <div className="flex justify-center mb-4"></div>

        <h1 className="text-7xl font-extrabold text-error">404</h1>

        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>

        <p className="text-base-content/70 mt-3 mb-8">
          Looks like this page isn't born yet.
        </p>

        <Link to="/" className="btn btn-primary gap-2 rounded-xl px-6">
          Back Home
        </Link>
      </div>
    </div>
  );
}
