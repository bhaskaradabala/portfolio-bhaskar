
const scriptURL = 'https://script.google.com/macros/s/AKfycbz9f5d-ZMBlLrgULlkdbYlzQMOIyS8YTV-TT1T7bz0v_CJqAwujyV9kmOgXFFt7OdBoRA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => { 
            msg.innerHTML = "Message sent successfully"
            setTimeout(function() {
                msg.innerHTML = " "
            }, 5000)
            form.reset() // Reset the form 
        })
        .catch(error => console.error('Error!', error.message))
})

    function submitForm(event) {
       
        event.preventDefault();

        
        // document.forms["submit-to-google-sheet"].reset();

        document.getElementById("confirmation-message").style.display = "block";

        setTimeout(function() {
            document.getElementById("confirmation-message").style.display = "none";
        }, 5000); 
    }
    