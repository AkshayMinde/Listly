import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import List from "./List";

const App = () => {

    const [list, setList] = useState(
        localStorage.list? JSON.parse(localStorage.list):[]
    );

    useEffect(() => {
        localStorage.list = JSON.stringify(list); /* to store list in local storage as local storage only takes string inputs */
    }, [list]) /* in use effect always a callback function is passed and an array is passed */

    const addNoteToList = (note) => {
        setList([...list, note])
    }

    const deleteNoteFromList = (index) => {
        const newArr = list.filter((item, idx) => 
            (index !== idx)
        )
        setList(newArr);
    }

    return(
        <>
            
            <Header/>
            <Form addNoteToList={addNoteToList}/>
            <List list={list} deleteNoteFromList={deleteNoteFromList}/>
            <Footer/>
            
        </>
    )
}

export default App;