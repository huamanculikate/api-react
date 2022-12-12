import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';


function App() {

  const [characters, setCharacters ] = useState([]);
  const [info, setInfo] = useState({});

  const initialurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) =>{
    fetch(url)
      .then((response) => response.json())
      .then((data)=> {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () =>{
    fetchCharacters(info.prev);
  }


  const onNext = () =>{
    fetchCharacters(info.next);
  }

  const onAdd = () =>{}

    useEffect(() => {
      fetchCharacters(initialurl);
    }, [])

  return (
    <>
      <Navbar brand= "Fotos del usuario" />
      
          <div className='container mt-5'>
            <Pagination 
              prev={info.prev} 
              next={info.next} 
              onPrevious={onPrevious} 
              onNext={onNext} 
              onAdd={onAdd} />
            <Characters characters = {characters} />
            <Pagination 
              prev={info.prev} 
              next={info.next} 
              onPrevious={onPrevious} 
              onNext={onNext} 
              onAdd={onAdd} />
          </div>

    </>
    
  );
}

export default App;
