import {useContext, useEffect} from 'react';
import Loader from "./Loader.jsx";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {ImageContext} from "../context/ImageContext.jsx";

const Gallery = () => {
    const {results, isLoading, handleClick, searchTerm} = useContext(ImageContext);
    useEffect(() => {
        if (searchTerm) {
            handleClick();
        }
    }, [searchTerm])

    return (<div>
        {isLoading && <Loader/>}
        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
            <Masonry gutter="10px">
                {results.map((image, index) => {
                    return (<div
                        className="z-10 overflow-hidden rounded-xl" key={index}>
                        <img
                            className="h-auto max-w-full transition duration-300 ease-in-out hover:scale-110"
                            src={image.urls.small}
                            alt="No Image"
                        />
                    </div>);
                })}
            </Masonry>
        </ResponsiveMasonry>
    </div>);
};

export default Gallery;
