import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToasterScreen = () => {

    const defaultToaster = () => {
        toast('Default Toaster Showing...', {
            position: 'top-right',
            autoClose: false, // time in milli secondes
            draggable: true
        });
    }
    const successToaster = () => {
        toast.success('Success Toaster Showing....', {
            position: 'top-left',
            autoClose: false,
            draggable: false
        });
    }
    const errorToaster = () => {
        toast.error('Error Toaster Showing....', {
            position: 'top-center',
            autoClose: false,
            draggable: true
        })
    }
    const warningToaster = () => {
        toast.warn('Warning Toaster Showing....', {
            position: 'bottom-left',
            autoClose: false,
            draggable: false
        })
    }
    const infoToaster = () => {
        toast.info('Info Toaster Showing.......', {
            position: 'bottom-center',
            autoClose: false,
            draggable: true
        });
    } 
    const darkToaster = () => {
        toast.dark('Dark Toaster Showing.......', {
            position: 'bottom-right',
            autoClose: false,
            draggable: false
        });
    }
    return (
        <div className="container mt-3">
            <ToastContainer/>
            <Card className="shadow p-3">
                <Card.Title className="text-danger font-weight-bolder">All Toasters</Card.Title>
                <Card.Body>
                    <div className="row">
                        <div className="col-3">
                            <Button className="btn btn-default" onClick={() => defaultToaster()}>Default Toaster</Button>
                        </div>
                        <div className="col-3">
                            <Button className="btn btn-success" onClick={() => successToaster()}>Success Toaster</Button>
                        </div>
                        <div className="col-3">
                            <Button className="btn btn-danger" onClick={() => errorToaster()}>Error Toaster</Button>
                        </div>
                        <div className="col-3">
                            <Button className="btn btn-warning" onClick={() => warningToaster()}>Warning Toaster</Button>
                        </div>
                        <div className="col-3 mt-4">
                            <Button className="btn btn-info" onClick={() => infoToaster()}>Info Toaster</Button>
                        </div>
                        <div className="col-3 mt-4">
                            <Button className="btn btn-dark" onClick={() => darkToaster()}>Dark Toaster</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ToasterScreen;