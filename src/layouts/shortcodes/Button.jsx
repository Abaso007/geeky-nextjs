import Link from "next/link";

const Button = ({ href, type, rel, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`btn me-4 mb-4 relative z-10 ${
        type === "outline"
          ? "btn-outline-primary"
          : "btn-primary text-white"
      } border-primary hover:no-underline`}
    >
      {children}
    </Link>
  );
};

export default Button;
