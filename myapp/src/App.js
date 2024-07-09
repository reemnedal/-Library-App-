import { useState } from "react";
import './App.css'

function App() {

   const [book,SeTbook]=useState([
   {

    id:1,
    Title: "مقدمة ابن خلدون",
    author:"ابن خلدون",
    isbn:"1289499030"
   },
   {
    id:2,
    Title: "الحاوي في الطب",
    author:"أبو بكر الرازي ",
    isbn:"1289478930"



   },
   {

    id:3,
    Title: "مقدمة ابن خلدون",
    author:"ابن خلدون",
    isbn:"1289499030"
   },
   {
    id:4,
    Title: "الحاوي في الطب",
    author:"أبو بكر الرازي ",
    isbn:"1289478930"



   },
   {

    id:5,
    Title: "مقدمة ابن خلدون",
    author:"ابن خلدون",
    isbn:"1289499030"
   },
   {
    id:6,
    Title: "الحاوي في الطب",
    author:"أبو بكر الرازي ",
    isbn:"1289478930"



   }

  ])
  return (
   

    

  <div  className="space"> 

{book.map((b)=>(
  <div className="card">
 <h1>Title:{b.Title}</h1>
 <h2>Author:{b.author}</h2>
 <h3>BookID:{b.id}</h3>
 <h4>isbn:{b.isbn}</h4>
</div>
))} 
  </div>

);
}

export default App;
