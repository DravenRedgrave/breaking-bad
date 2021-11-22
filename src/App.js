import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css'
import Header from './components/ui/Header';
import CharactersGrid from './components/characters/CharactersGrid';
import Search from './components/ui/Search';

const App = () => {

  const [items,setItems] = useState([])
  const [isLoading,setisLoading] = useState(true)
  const [query,setQuery] = useState('')

  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setisLoading(false)
    }
    fetchItems()
  },[query])

  return (
    <div>
      <Header/>
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharactersGrid isLoading={isLoading} items={items}/>
    </div>
  )
}

export default App
