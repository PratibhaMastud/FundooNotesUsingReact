import React,{ useState } from 'react';
import AppBar from '../DrawerFiles/SimpleDrawer';
import CreateNote from '../NoteFiles/CreateNote';
import Note from '../NoteFiles/Note';
import { withRouter } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const [ addItem, setAddItem ] = useState([]);

    const addNote = (note) => {
      setAddItem((prevData) =>{
        return [...prevData, note];
      });
      console.log(note);
    };

    const onDelete = (id) => {
        setAddItem((oldData) =>
        oldData.filter((currentData, Indx) => {
            return Indx!== id;
        }) 
        );
    };


    return(
        <>
            <AppBar />
            <CreateNote passNote={addNote}/>

            {addItem.map((value,index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={value.title}
                        content={value.content}
                        deleteItem={onDelete}
                    />  
                );
            })
        }
        </>
    );
};

export default withRouter(Dashboard);