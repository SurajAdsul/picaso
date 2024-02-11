import { useContext, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ImageContext } from "../context/ImageContext.jsx";

const Home = () => {
  const { slug } = useParams();
  const { setSearchTerm } = useContext(ImageContext);
  setSearchTerm(slug);
  let navigate = useNavigate();
  useEffect(() => {
    if (slug && slug !== "mountains") {
      setSearchTerm(slug);
    } else {
      navigate("/mountains");
    }
  }, [slug]);

  return <Outlet />;
};

export default Home;
