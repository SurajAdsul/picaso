import React, {useEffect, useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Loader from "../components/Loader.jsx";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('mountain');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    useEffect(() => {
        handleClick();
    }, [searchTerm])

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleClick = async () => {
        setIsLoading(true);
        await sleep(5000);
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}&query=${searchTerm}&page=1&per_page=30`, {
                method: 'GET', headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            setResults(result.results);
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (<div className="mx-40">
        <form>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input onChange={e => setSearchTerm(e.target.value || 'mountains')} type="search"
                       id="default-search"
                       className="block items-center w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                       placeholder="Search pictures..." required/>
            </div>
        </form>
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <button onClick={() => setSearchTerm('food')} type="button"
                    className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">All
                Food
            </button>
            <button onClick={() => setSearchTerm('ice-cream')} type="button"
                    className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">ice-cream
            </button>
            <button onClick={() => setSearchTerm('Holi')} type="button"
                    className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Holi
            </button>
            <button onClick={() => setSearchTerm('Forest')} type="button"
                    className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Forest
            </button>
            <button onClick={() => setSearchTerm('Portrait')} type="button"
                    className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Portrait
            </button>
        </div>
        {isLoading && <Loader/>}
        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
            <Masonry gutter="10px">
                {results.map((image, index) => {
                    return (<div
                        className="z-10 overflow-hidden rounded-xl">
                        <img
                            key={index}
                            className="h-auto max-w-full transition duration-300 ease-in-out hover:scale-110"
                            src={image.urls.small}
                            alt="No Image"
                        />
                    </div>);
                })}
            </Masonry>
        </ResponsiveMasonry>
    </div>);
}

export default Home;