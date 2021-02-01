import React,{ useState } from 'react';
import AppBar from './SimpleDrawer';
import CreateNote from './CreateNote';
import Note from './Note';
import { withRouter } from 'react-router-dom';


const Dashboard = () => {
    const [ addItem, setAddItem ] = useState([]);
    const addNote = (note) => {
      setAddItem((prevData) =>{
        return [...prevData, note];
      });
      console.log(note);
    };
    return(
        <>
            <AppBar />
            <CreateNote passNote={addNote}/>
            <Note />
            
        </>
    );
};

export default withRouter(Dashboard);