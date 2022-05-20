import React, {useState} from "react";
import './App.css';
import PokeCard from './components/PokeCard';

function App() {
  const [pokeList, setPokeList] = useState([
    "bidoof","klefki","magikarp","vanillish","trubbish"
  ]);
  const [input, setInput] = useState("");

  const submitHandler =(event) =>{
    event.preventDefault();
    setPokeList([...pokeList,input]);
    setInput("");
  }

  return (
    <div className="App">
      <h1> make the strongest pokemon team</h1>
      <form className="w-25 d-block mx-auto my-3" onSubmit={submitHandler}>
          <input type="text" placeholder="add to your team"  onChange={(event)=>{
            setInput(event.target.value) }}></input>
          <input type="submit" className="btn btn-info d-block mx-auto my-1" />
      </form>
      {/* <PokeCard name="pikachu"/> */}
      <div className="list">
      {
        pokeList.map((item,i)=>{
          return <PokeCard key={i} name={item}/>
        })
      }
      </div>
      
    </div>
  );
}

export default App;
