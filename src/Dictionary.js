import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";


export default function Dictionary(props){
let [keyword, SetKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, SetLoaded] = useState (false);

function handleResponse(response) {
    setResults(response.data[0]);
}
function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
   if (loaded) { 
       return (
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
    </div>
    );

} else {
    load();
    return "Loading";
}
}