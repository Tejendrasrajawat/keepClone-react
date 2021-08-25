import Button from "@material-ui/core/Button";
import AddBoxIcon from '@material-ui/icons/Add';
import React, {useState} from "react";

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const InputEvent = (event) => {
        
        const {name, value} = event.target;

        setNote((oldNote) => {
            return {
                ...oldNote,
                [name]: value
            }
        })
    }

  const addEvent = () => {
      props.passNote(note);
      setNote({
        title: '',
        content: ''
    });
  }

 return (
     <>
     <div className="main_note">
         <form>
             <input type="text" name='title' value={note.title} onChange={InputEvent} placeholder="title" />
             <textarea rows='' column='' name='content' value={note.content} onChange={InputEvent} placeholder="Write a note" />
             <Button onClick={addEvent}>
                 <AddBoxIcon className="plus_sign" />
             </Button>
         </form>
     </div>
     </>
 )
}

export default CreateNote;