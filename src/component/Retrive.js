import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Retrive() {
    const {id} = useParams()
    axios(`https://synlab-carepath.herokuapp.com/verify/synlab/${id}`, {
        method: "GET",
        responseType: "blob"
        //Force to receive data in a Blob Format
        })
        .then(response => {
            //Create a Blob from the PDF Stream
            const file = new Blob([response.data], {
            type: "application/pdf"
            });
            //Build a URL from the file
            const fileURL = URL.createObjectURL(file);
            //Open the URL on new Window
            window.open(fileURL);
        })
        .catch(error => {
            console.log(error);
        });

    return (
    <div>
        <h1 style={{margin:'20px'}}>Accept to open the popup to the file.</h1>
    </div>
    )
}

export default Retrive
