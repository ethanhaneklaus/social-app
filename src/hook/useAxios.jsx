import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://api.giphy.com/v1/gifs/search?api_key=1bJjt9qRYEB5BkbTrYdSxyxqZ4NctPC8&limit=50&offset=0&lang=en&rating="

function useAxios(url) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (!url) {
            return
        }
        async function init() {
            setLoading(true);
            setData(null);
            setError(null);


            try {
                const response = await axios.get(baseUrl + url);
                setData(response.data.data.map((gif) => ({
                    title: gif.title,
                    url: gif.images.original.url,
                    gif_id: gif.id
                })));
                { console.log(data.url) }
            } catch (e) {
                setError("Something went wrong, please try again!");
            } finally {
                setLoading(false);
            }
        }
        init();

    }, [url]
    );
    return { data, error, loading };
}
// 1bJjt9qRYEB5BkbTrYdSxyxqZ4NctPC8
export default useAxios;
