import { useEffect, useState } from "react";

export const useFetch = (url, initialValue) => {
    const [content, setContent] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!url) return;
        async function fetchData() {
            await fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                setContent(json);
            })
            .catch((err) => {
                console.log(err.data);
                setError('Error fetching data');
            })
            .finally(() => {
                setIsLoading(false);
            })
        }
        
        fetchData();
    }, [url]);

    return { content, error, isLoading };
};

export default useFetch;
