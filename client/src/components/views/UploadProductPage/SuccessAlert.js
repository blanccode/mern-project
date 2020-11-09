import React, { useState } from 'react';
import './Alert.css'
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';



function SuccessAlert(props) {
    // console.log(props.success)
    const [open, setOpen] = useState(true)

    const handleClick = () => {

    }
    if (props.pass && props.pass.message === "success") {
        return (
            <div style={{ margin: "2em auto " , maxWidth: "400px"}}>
                <Collapse in={open}>

                    <Alert action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    } severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Product was uploaded — <strong>successfully!</strong>
                    </Alert>
                </Collapse>


            </div>
        )
    } else if (props.pass && props.pass.message === "error") {
        return (
            <div style={{ margin: "2em auto ", maxWidth: "400px"}}>
                <Collapse in={open}>

                    <Alert action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    } severity="error">
                        <AlertTitle>Error</AlertTitle>
                        failed to upload product.
                </Alert>
                </Collapse>
            </div>
        )
    } else {
        return null
    }

}

export default SuccessAlert
