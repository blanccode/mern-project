import React, {useState, useEffect}  from 'react'
import { FaCode } from "react-icons/fa";
import SuccessAlert from '../UploadProductPage/SuccessAlert'
import ProductCard from './ProductCard'






function LandingPage(props) {
    
    const [Alert, setAlert] = useState(props.location.state)


    return (
       <div style= {{padding: "2em" }}>
            <SuccessAlert pass={Alert}/>

            <ProductCard/>

        </div>
    )
}

export default LandingPage
