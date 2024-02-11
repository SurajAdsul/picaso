import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h1 className="flex justify-center text-7xl italic font-bold my-10 font-lobster tracking-wider mb-16 text-indigo-700">
      <Link to="/mountains">Picaso</Link>
    </h1>
  );
};

export default Logo;
