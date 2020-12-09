import { useEffect, useState } from "react";

export const useFetch = (url, initialValue, refresh) => {
    const [content, setContent] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!url) return;
        
        async function fetchData() {
            console.log(`[useFetch] Calling url ${url}`);

            await fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(`[useFetch] Response data: ${JSON.stringify(json)}`);
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

        let interval = null;
        if (!!refresh) {
            console.log(`[useFetch] should refresh after ${refresh} seconds`);
            interval = setInterval(() => fetchData(), refresh);
        }
        
        return () => {
            clearInterval(interval);
        }
    }, [url, refresh]);

    return { content, error, isLoading };
};

export default useFetch;
