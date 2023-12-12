import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi= async(url,params)=>{
  console.log("BASE_URL + url",BASE_URL + url)
  console.log("params",params)
  console.log("url",url)
  console.log("header",headers)
    try{
       const {data}= await axios.get(BASE_URL + url,{headers,params})
       return data;
    } catch(err) {
      console.log(err);
      return err;
    }
}