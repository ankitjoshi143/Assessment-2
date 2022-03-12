import React from 'react';
import {AppBar} from '../../components/appbar';
import {SideBar} from '../../components/sidebar';
import {Panels} from '../../components/panels';

import {Container} from "react-bootstrap";

function DashBoardPage  (props){

    return(
        <>
      
        <AppBar/>
        <Container className='d-flex'>
            <SideBar />
            <Panels />
        </Container>
        </> 
    )
}

export default DashBoardPage; 