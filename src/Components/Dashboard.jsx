import React from 'react';
import AppBar from './SimpleDrawer';
import CreateNote from './CreateNote';
import { withRouter } from 'react-router-dom';


const Dashboard = () => {
    return(
        <>
            <AppBar />
            <CreateNote/>
            
        </>
    );
};

export default withRouter(Dashboard);