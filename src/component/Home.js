import React, {useState} from 'react';
import './home.css';
import axios from 'axios';

function Home() {
    const [inputValue, setInputValue] = useState('') 
    const [inputForm, setInputForm] = useState('') 
    
    const linkGen = async () => {
        let pdfName = localStorage.getItem('synlab-name');
        setInputValue(`https://rv.synlab-pathcare.com/verify/synlab/${pdfName}`)
        localStorage.removeItem('synlab-name')
    }
    const upload = async (e) => {
        e.preventDefault();
        let formData = new FormData();    //formdata object
        formData.append('pdf', inputForm);   //append the values with key, value pair
        const headers = { 'content-type': 'multipart/form-data', 'withCredentials': true, }
        console.log(formData);
        axios
          .post("https://synlab-carepath.herokuapp.com/upload", formData, { headers: headers})
          .then((response) => { 
            if (response.status === "200") {
              localStorage.setItem('synlab-name', response.data.name);
              alert('Uploaded Succesfully')
            } else {
              console.log("Unable to upload file.");
            }
          })
          .catch((error) => console.error(error.message));
      };
    return (
         <div>
             <div className="container">
             <div className="text-center pt-5 pb-5"> 
                        <h1> UPLOAD SECTION</h1>
                    </div>
                    <form onSubmit={(e)=>{upload(e)}} id="formElem">   
                        <input type="file" id="myFile" value={inputForm} onChange={e=>{setInputForm(e.target.value)}} className="uploadform" name="pdf" /> 
                        <div className="pad-top">  
                            <input type="submit" className="btn-edit" id="btnEdit" />
                            <button type= "button" onClick={linkGen} className="btn-edit" id="btnGen"> Generate Link </button>
                        </div>
                        
                        <input type="text" value={inputValue} className="form-edii" disabled id="genLinkUrl" />
                    </form>
             </div>
         </div> 
        
    )
}

export default Home
