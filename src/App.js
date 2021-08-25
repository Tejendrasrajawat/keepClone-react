import './App.css';
import Header from './Header';
// import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import React, {useState} from "react";

function App() {
  const [addItem, setAddItem] = useState([]);
// 
  const AddNote = (note) => { 
    setAddItem((oldData)=> {
      return [...oldData, note]
    })
  }
// 
  const onDelete = (id) => {
    setAddItem((olddata) => 
      olddata.filter((currdata, index) => {
        return index != id;
      
    })
    )
  }

  return (
   <>
   <Header/>
   <CreateNote passNote={AddNote}/>
   
    {
    addItem.map((val, index)=> {
      return ( 
      <Note 
      key={index}
      id = {index}
      title = {val.title}
      content = {val.content}
      deleteItem = {onDelete}
      />
    );
    }) }

   {/* <Footer/> */}
   </>
  );
}

export default App;
