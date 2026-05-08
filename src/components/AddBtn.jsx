import { NavLink } from "react-router";

export default function AddBtn() {
  return (
    <NavLink
      to="/newPost"
      className="fixed bottom-6 right-6 btn btn-lg btn-circle btn-secondary shadow-lg z-50"
    >
      <svg
        aria-label="New"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </NavLink>
  );
}
