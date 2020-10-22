import React, { Component , useState } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'
import axios from 'axios';

function DropzoneAreaExample(props) {

    const [Images, setImages] = useState([])
 

    const imagesUploadHandler = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        // console.log(files[0])
        formData.append("file", files[0])

        
        axios.post('/api/product/uploadImage', formData, config)

            .then(response => {
                // console.log(response)

                if (response.data.success) {

                    // console.log(response.data)
                    setImages([...Images, response.data.image])
                    props.refreshFunction([...Images, response.data.image]) //passed down the state

                    // props.refreshFunction([...Images, response.data.image])
                } else {
                    alert('failed to save the Image')
                }
            })
    }

                    console.log('this is the log for Images:' ,Images)

  

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