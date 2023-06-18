import { useState, useEffect } from "react";

// const url = '';
const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log('all data',data)
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/assets/vocabularies.json`);
            const data = await res.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    // refetch data FIXME

    return { data, loading, error };
}


export default useFetch;