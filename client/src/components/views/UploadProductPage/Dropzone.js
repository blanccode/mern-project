import React, { Component, useState } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'
import axios from 'axios';

function DropzoneAreaExample(props) {

    const [Images, setImages] = useState([])


    const imagesUploadHandler = (images) => {

        // console.log(response.data)
        setImages(...Images, images)
        props.refreshFunction(...Images, images) //passed down the state
        console.log("dropzone log :",images)

        // props.refreshFunction([...Images, response.data.image])
    }

    return (
        <DropzoneArea
            // onDrop={onDrop}
            onDrop={imagesUploadHandler}
            showPreviews={true}
            showFileNamesInPreview={true}
            showPreviewsInDropzone={false}
            filesLimit={10}
        />
    )
}

export default DropzoneAreaExample;