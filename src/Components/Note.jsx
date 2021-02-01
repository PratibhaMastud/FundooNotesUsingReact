import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { withRouter } from 'react-router-dom';

const Note = () => {
    return(
        <>
            <div className="note">
                <h1>title</h1>
                <br></br>
                <p>this is content</p>
                <button className="btn">
                <DeleteOutlineIcon className="deleteIcon"/>
                </button>

            </div>
        </>
    );
};

export default withRouter(Note);