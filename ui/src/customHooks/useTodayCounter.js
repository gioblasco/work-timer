import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export const useTodayCounter = () => {
    const {content} = useFetch('http://localhost:3000/history', []);

    useEffect(() => {
        console.log(content);
    }, [content]);

    return { content };
};

export default useFetch;
