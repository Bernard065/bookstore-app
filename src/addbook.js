import Header from './Header'
import { useState } from 'react'

function Addproduct() {
    const [id,setid]=useState("");
    const [title,settitle]=useState("");
    const [url,seturl]=useState("");
    const [author,setauthor]=useState("");
    const [price,setprice]=useState("");
    const [publisher,setpublisher]=useState("");
    const [publish_date,setpublish_date]=useState("");
    const [description,setdescription]=useState("");
    const [isbn,setisbn]=useState("");

    function addbook()
     {
     console.warn(id,title,url,author,price,publisher,publish_date,description,isbn)
     
    }

    return (
        <div>
            <header>
                <div classname ="col-sm-6 offset-sm-3">
                    <br />
                    <input type="text" classname="form-control"  
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="id" /> <br />

                    <input type="text" classname="form-control"  
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="title" /> <br />

                    <input type="text" classname="form-control"
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="url" /> <br />

                    <input type="text" classname="form-control"
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="author" /> <br />

                    <input type="text" classname="form-control" 
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="price" /> <br />

                    <input type="text" classname="form-control"
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="publisher" /> <br />
                    
                    <input type="text" classname="form-control"
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="publish_date" /> <br />

                    <input type="text" classname="form-control" 
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="description" /> <br />

                    <input type="text" classname="form-control"
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="isbn" /> <br />

                    <button onClick={addbook} className='btn btn-primary'> Add book</button>
                </div>

            </header>
        </div>
    )
}