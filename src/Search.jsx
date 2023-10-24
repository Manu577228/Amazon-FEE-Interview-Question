import './search.css';
import { useState } from 'react';
// import nature from './assets/nature.avif'

function Search() {

const [count, setCount] = useState(0);


const handleEvent = () => {
   console.log("Fetching...");
   setCount(count + 1)
}



  return (
    <div className="container">
        <div className='wrapper'>
        {/* <img className='nature-image' src={nature} alt="background" /> */}
        <h1>WELCOME TO OUR WEBSITE</h1>
        <p>Lorem ipsum dolor sit amet</p>
        <div className='search'>
        <input onKeyDown={handleEvent} type='text' placeholder='SEARCH HERE....' />
        <button>SEARCH</button>
        <h2>{count}</h2>
        </div>
        </div>
    </div>
  )
}

export default Search
