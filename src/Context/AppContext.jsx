import { createContext,useEffect, useState } from "react"
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = (props) => { 

    const [article,setArticle] = useState([]);

    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
    
    const fetchNews = async () => {
        try {
            const res = await axios.get(url);
            setArticle(res.data.articles);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchNews();
    },[])

    const value = {
        article
    }

    return(
        <AppContext.Provider value = {value}>
            {props.children}
        </AppContext.Provider>
    )

}

