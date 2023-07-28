import React, {useState} from "react";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Form = (props) => {
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
    const[isExpanded, setExpanded] = useState(false)
    const [noteDetails, setNoteDetails] = useState({
        title:"",
        content: ''
    })
    
    const changeNoteDetails = (event) => {
        const{className, value} = event.target;
        if (className === 'title') {
            setNoteDetails({
                content: noteDetails.content,
                title: value
            })
        } else if(className === 'content'){
            setNoteDetails({
                content: value,
                title: noteDetails.title
            })
        }
    }


    const addNote = (event) => {

        event.preventDefault();
        if (noteDetails.title.length && noteDetails.content.length !== 0) {
            props.addNoteToList(noteDetails);    
            setNoteDetails({
                title:'',
                content:'',
            });
            setExpanded(false)
        }
    }

    const expandArea = () => {
        setExpanded(true);
    }

    const shrinkArea = () => {
        if (noteDetails.title.length === 0) { 
            setExpanded(false);
        }
    }

    return(
        <>
            <form className="create-note">
                <input onBlur={shrinkArea} onFocus={expandArea} value={noteDetails.title} className="title" onChange={changeNoteDetails} type="text" placeholder="title" />
                {isExpanded?
                <textarea value={noteDetails.content} className="content" onChange={changeNoteDetails} type="text" placeholder="content"/>
                :null}
                <Fab onClick={addNote}><AddIcon/></Fab>
            </form>
        </>
    )
}

export default Form;