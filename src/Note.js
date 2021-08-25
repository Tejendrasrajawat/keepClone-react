import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

const onDeleteNote = () => {
    props.deleteItem(props.id);
}

    return (
     <>
    <div className='note'>
        <h1>{props.title}</h1>
        <br/>
        <p>{props.content}</p>
        <button className='btn' onClick={onDeleteNote}>
        <DeleteIcon className='deleteIcon'/>
        </button>
    </div>
     </>
    );
  }
  
  export default Note;