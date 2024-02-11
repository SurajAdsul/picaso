import {createContext, useState} from "react";

export const ImageContext = createContext();

const ImageContextProvider = props => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [searchTerm, setSearchTerm] = useState("mountains");
    const handleClick = async () => {
        setIsLoading(true);
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
    return (<ImageContext.Provider value={{results, isLoading, handleClick, searchTerm, setSearchTerm}}>
            {props.children}
        </ImageContext.Provider>);
};

export default ImageContextProvider;