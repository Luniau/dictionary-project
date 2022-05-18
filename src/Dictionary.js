import React, {useState} from "react";
import "./Dictionary.css";
export default function Dictionary(){
let [keyword, SetKeyword] = useState("");

function search(event){
    event.preventDefault();
    alert("Searching");

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