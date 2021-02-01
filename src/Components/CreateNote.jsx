import React , { useState } from "react";
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './Dashboard.css'

const CreateNote = (props) => {

    const [ note, setNote ] = useState({
        title: "",
        content: "",
    })
    //object distructuring
    const InputEvent = (event) =>{
        // const value =   event.target.value;
        // const name =   event.target.name;

        const {name, value} = event.target;

        setNote((prevData) =>{
            return{ //spread operator
                ...prevData,
                [name]: value,
            };
        });
        console.log(note);
    };

    const addEvent = () => {
        props.passNote(note);
    };

    return(
        <>
            <div className="mainnote">
                <form>
                    <input type="text"
                     name="title"
                     value={note.title} 
                     onChange={InputEvent}
                      placeholder="Title"/>
                    <textarea rows=""
                     name="content"
                     value={note.content} 
                     onChange={InputEvent} 
                     column="" 
                     placeholder="Take a Note..." />
                    <Button onClick={addEvent}>
                        <AddIcon className="plus"/>
                    </Button>
                </form>
            </div>
        </>
    );
};

export default withRouter(CreateNote);