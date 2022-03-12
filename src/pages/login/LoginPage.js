import React from 'react';
import {AppBar} from '../../components/appbar';
import {Link, useNavigate} from "react-router-dom";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import logo from '../../../src/logo.png';

function LoginPage  (props){
let navigation = useNavigate();

function onHandleSubmit(evt) {
    evt.preventDefault();
    navigation('dashboard');
}

return( 
    <>
    <AppBar/>
    <Container>        
        <Row className='mt-5' style={ {backgroundColor: "#ededed"} }>
            <Col className='m-auto'>
                <img src={logo} className='img-fluid' alt='car logo' />
            </Col>
            <Col className='p-5 border' >
                <Row className='justify-content-md-center'>
                    <Col md="auto"><h1 className='my-4'>SIGN INTO THE DASHBOARD</h1></Col>
                    
                </Row>
                {/* https://react-bootstrap.github.io/forms/overview/ */}
                <Form>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>EMAIL ADDRESS</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={onHandleSubmit}>
                        LOGIN
                    </Button>
                </Form>
                <Row className='my-5'>
                    <Col><Link className='link-danger' to="/#">FORGOT PASSWORD</Link></Col>
                    <Col>NEW MEMBER ( <Link className='link-info' to="/#"> SIGN UP</Link> )</Col>
                </Row>
                
            </Col>
            
        </Row>
        
        
    </Container>

    </>
    

)

}

export default LoginPage; 