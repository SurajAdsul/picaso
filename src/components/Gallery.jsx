import { useContext, useEffect } from "react";
import Loader from "./Loader.jsx";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageContext } from "../context/ImageContext.jsx";
import Image from "./Image.jsx";

const Gallery = () => {
  const { results, isLoading, handleClick, searchTerm } =
    useContext(ImageContext);
  useEffect(() => {
    if (searchTerm) {
      handleClick();
    }
  }, [searchTerm]);

  return (
    <div>
      {isLoading && <Loader />}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {results.map((image, index) => {
            return <Image key={index} url={image.urls.small} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
