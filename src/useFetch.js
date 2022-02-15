import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setdata] = useState(null)
    const [pending, setpending] = useState(true)
    const [error, seterror] = useState(false)

    useEffect(()=>{
        // using settimeout here just to demonstrate the time server takes to fetch

        const abortcont = new AbortController();

        fetch(url , {signal : abortcont.signal })
            .then((res) => {
                if (!res.ok){
                    throw Error("Couldn't get data for this resource.")
                }
                return res.json()
            }).then(data => {
                setdata(data)
                setpending(false)
            }).catch(err => {
                if (err.name === 'AbortError'){
                    console.log("fetch aborted")
                } else {
                    setpending(false)
                    seterror(err.message)
                    console.log(err.message)
                }    
            })

        return () => abortcont.abort();
    }, [url]);

    return {data,pending,error}
}

export default useFetch;