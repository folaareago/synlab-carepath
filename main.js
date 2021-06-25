const uploadInput = document.querySelector("#btnEdit");
const genLink = document.querySelector("#btnGen");
const genLinkUrl = document.querySelector("#genLinkUrl");

const formEvent = uploadInput.addEventListener("click", async (event) => {
  event.preventDefault();
  upload(); 
});

const formLink = genLink.addEventListener("click", async (event) => {
  event.preventDefault();
  linkGen(); 
});

const headers = {
  'Content-Type': 'application/json',
  'withCredentials': true,
}

const linkGen = async () => {
  pdfName = localStorage.getItem('name');
  genLinkUrl.value = `https://rv.synlab-pathcare.com/verify/${pdfName}`;
  localStorage.removeItem('name')
}

const upload = async () => {
  axios
    .post("http://localhost:8080/upload", new FormData(formElem), { headers: headers})
    .then((response) => { 
      if (response.status == "200") {
        localStorage.setItem('name', response.data.name);
        alert('Uploaded Succesfully')
      } else {
        console.log("Unable to upload file.");
      }
    })

  .catch((error) => console.error(error.message));
};