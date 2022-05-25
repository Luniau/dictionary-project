import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
          <img src={logo} className="App-logo img fluid" alt="logo" />
    </header>
    <main> <Dictionary defaultKeyword="Beach" />
    </main>
        <footer className='App-footer'>
        <small> This project was coded by <a href="https://precious-otter-6afb15.netlify.app/" target="_blank" rel="noreferrer">Luciana Carvalho</a>  and is
            <a href="https://github.com/Luniau/dictionary-project" target="_blank" rel="noreferrer"> open-sourced on github </a></small> 
        </footer>
       
      </div>
  
    </div>
  );
}


