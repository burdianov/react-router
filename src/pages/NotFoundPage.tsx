import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-2">
      <div>404 Not Found</div>
      <span className="inline px-4 py-2 bg-teal-600 w-40 rounded">
        <Link to="/">Home from Link</Link>
      </span>
    </div>
  );
}
