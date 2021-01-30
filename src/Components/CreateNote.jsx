import React from "react";
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './Dashboard.css'

const CreateNote = () => {
    return(
        <>
            <div className="mainnote">
                <form>
                    <input type="text" placeholder="Title"/>
                    <textarea rows="" column="" placeholder="Take a Note..." />
                    
                    <Button>
                        <AddIcon/>
                    </Button>
                </form>
            </div>
        </>
    );
};

export default withRouter(CreateNote);