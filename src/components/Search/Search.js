import React, {useState} from 'react'

function Search (){
  const [search, setSearch] = useState('');
  function handleSearch(e){
    e.preventDefault();
    fetch("http://localhost:3000/books",{
      method:"GET",
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then( data => data.filter((value) => {
      const searchBar = value.description.toLowerCase().includes(search)
      if(searchBar== true){
          let searchBar = document.getElementById("search")
         let li = document.createElement("li");
         li.innerHTML=`
         ${value.title} ${value.price}`
         searchBar.append(li);
      }
      else if(searchBar == null ){
          return null
      }
  }))    
  }
  return (
    <>
    <form onSubmit={handleSearch}>
      <div>
      <input type="text" placeholder="search by author or title" value={search} onChange={(e) => setSearch(e.target.value)}>
    </input>
    <button>Search</button>
      </div>
    </form>
    </>
  )
}
export default Search