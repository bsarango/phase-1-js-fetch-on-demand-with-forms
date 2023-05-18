const init = () => {
  const inputForm = document.querySelector("form")      //select the 'form' element by tag from the document
  inputForm.addEventListener('submit',(e)=>{            //add an event listener for the form - submit w/ callback function
    e.preventDefault();                                  //add preventDefault() INSIDE the form event listener to prevent the automatic response
    const input = document.querySelector("input#searchByID")

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res => res.json())
    .then(data=>{
        const title = document.querySelector("section#movieDetails h4")     //Selects the empty (for now) 'Title' section of the DOM that we want to fill based on our input
        const summary = document.querySelector("section#movieDetails p")    //Selects the empty (for now) 'Summary' section of the DOM that we want to fill based on input

        title.innerText = data.title        //replace placeholder text with text from fetched data
        summary.innerText = data.summary    //replace placehold text with text from fetched data
    })
  })
}

document.addEventListener('DOMContentLoaded', init);