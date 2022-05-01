/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url) => {
    const [state, setState] = useState({data: null, loading: true})
    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }
    
    useEffect(() => {
        setState(state => ({data: state.data, loading: true}))
        const getData = async () => {
            await axios.get(url, headers)
            .then(res => {
                console.log("res working")
                setState({data: res.data, loading: false})
            })
        }
        getData()
    }, [url, setState])

    return state
}

export default useAxios