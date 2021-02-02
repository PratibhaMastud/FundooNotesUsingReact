import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { withRouter } from 'react-router-dom';
import './Dashboard.css';

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    
    return(
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br></br>
                <p>{props.content}</p>
                <button className="btn" onClick={deleteNote}>
                <DeleteOutlineIcon className="deleteIcon"/>
                </button>

            </div>
        </>
    );
};

export default withRouter(Note);