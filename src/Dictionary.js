import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary(){
let [keyword, SetKeyword] = useState("");

function handleResponse(response) {
    console.log(response.data[0]);
}

function search(event){
    event.preventDefault();
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

}
function handleKeywordChange(event) {
  SetKeyword(event.target.value);  
}
    return (
    <div className="Dictionary">
     <form onSubmit={search}>
  <input type="search" onChange={handleKeywordChange}/>
         </form>   
    </div>
    );

}