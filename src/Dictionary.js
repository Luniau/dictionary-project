import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(props){
let [keyword, SetKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, SetLoaded] = useState (false);
let [photos, setPhotos] = useState (null);

function handleDictionaryResponse(response) {
    setResults(response.data[0]);
}

function handlePexelResponse (response) {
   setPhotos(response.data.photos)
}
function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);


    let pexelApiKey = "563492ad6f9170000100000150a13f22f845425c8c5152a40af84ff1";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {Authorization: `Bearer ${pexelApiKey}`}
    axios.get(pexelApiUrl, {headers:headers}).then (handlePexelResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
    }

function handleKeywordChange(event) {
  SetKeyword(event.target.value);  
}

function load(){
    SetLoaded(true);
    search();
}
   if (loaded) { return (
        <div className="Dictionary">   
           <section>
     <h1 className="title">Dictionary</h1>
     <h2>What word do you want to look up?</h2>
          
     <form onSubmit={handleSubmit}>
  <input type="search" onChange={handleKeywordChange}
  defaultValue={props.defaultKeyword}/>
         </form>  
         <div className="hint">
             Suggested words: book, sunset, plant, sea... 
             </div> 
            </section>
         <Results results={results}/>
         <Photos photos={photos} />
    </div>
    );

} else {
    load();
    return "Loading";
}
}