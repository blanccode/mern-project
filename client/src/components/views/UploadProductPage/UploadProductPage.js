import React, { useState, Component } from 'react'
import "./UploadProductPage.css"
import TextField from '@material-ui/core/TextField';
import { FormControl, Input, InputLabel, OutlinedInput, FilledInput, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DropzoneDialogExample from './Dropzone'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));



function UploadProductPage() {

    const [TitleValue, setTitelValue] = useState("")
    const [DescriptonValue, setDescriptonValue] = useState("")
    const [PriceValue, setPriceValue] = useState("")
    const [Countity, setCountity] = useState(1)
    const [Images, setImages] = useState([])

    const onTitleChange = (e) => {
        setTitelValue(e.currentTarget.value)
    }
    const onDescriptionChange = (e) => {
        setDescriptonValue(e.currentTarget.value)
    }
    const onPriceChange = (e) => {
        setPriceValue(e.currentTarget.value)
        if (e.currentTarget.value < 0) {
            setPriceValue(0)
        }
    }
    const onCountityChange = (e) => {
        setCountity(e.currentTarget.value)
        if (e.currentTarget.value < 1) {
            setCountity(1)
        }
    }
    const updateImages = (newImages) => {
        console.log('newImage:',newImages)
        setImages(newImages)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const inputValues = {
            titel: TitleValue,
            description: DescriptonValue,
            price: PriceValue,
            countity: Countity,
            images: Images
        }

        axios.post('/api/product/uploadProduct', inputValues)
        .then(response => {
            if (response.data.success) {
                console.log(response.data)
                alert('product was uploaded successfully')
            } else {
                alert('failed to upload product with axios')
            }
        })

    }

    const classes = useStyles();



    return (
        <div className="form-container">
            <h2>Lade Produkt hoch</h2>




            <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">

                <div className="dropzone-wrapper">
                    <DropzoneDialogExample refreshFunction={updateImages} />

                </div>

                <TextField
                    className="inputs"
                    onChange={onTitleChange}
                    value={TitleValue} id="outlined-input"
                    label="Titel"
                    variant="outlined" />

                <TextField
                    className="inputs"
                    onChange={onDescriptionChange}
                    value={DescriptonValue}
                    id="outlined-multiline-static"
                    label="Beschreibung"
                    multiline
                    rows={4}
                    variant="outlined"
                />


                <TextField
                    className="inputs"
                    onChange={onPriceChange} value={PriceValue}
                    id="outlined-number"
                    label="Preis"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    placeholder="€"
                    variant="outlined"
                />

                <TextField
                    className="inputs"
                    onChange={onCountityChange} value={Countity}
                    id="outlined-number"
                    label="Stückzahl"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />


                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                    label="Submit" 
                    type="submit"
                >
                    Upload
                </Button>
            </form>
        </div>
    )
}

export default UploadProductPage
