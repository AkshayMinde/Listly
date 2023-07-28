import React from "react";
import { Fab } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Note from "./Note";

const List = (props) => {
    const deleteNoteFromList = (idx) => {
        props.deleteNoteFromList(idx);
    };

    return(
        <>
            {props.list.map((item, idx) => {
                return(
                    <div key={idx} className="note">
                        <Note title={item.title} content={item.content} />
                        <Fab onClick={()=>{
                            deleteNoteFromList(idx)
                            }}
                        >
                        <DeleteForeverIcon/>
                        </Fab>
                    </div>
                )
            })}
        </>
    )
}

export default List;