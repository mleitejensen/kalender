let form = document.querySelector(".form")
const body = document.querySelector("body")
let currentDate = new Date()
let currentUrl = window.location.pathname.split('/')

html = `<form>
<label for="email">Skriv navnet ditt her</label><br>
<input type="email" id="email" for="email"><br><br>
<label for="answer">Skriv svaret ditt her</label><br>
<input type="text" for="answer" id="answer"><br><br>
<input type="submit" value="Send inn">
<p id = "form-status"> </p>
</form>`

form.innerHTML = html

body.innerHTML += `
<div class="clickLeft"></div>
<div class="clickRight"></div>
`

const left = document.querySelector(".clickLeft")
const right = document.querySelector(".clickRight")
const formInput = document.querySelector("form")
const formStatus = document.getElementById("form-status")

console.log(formInput)
formInput.addEventListener('submit', async (e) => {
    e.preventDefault();

    let email = formInput.email.value;
    let answer = formInput.answer.value;
    const date = Number(currentUrl[2]);

    // Change text after 1 second
    setTimeout(() => {
        formStatus.innerText = "Submitted data";

        // Make the text go blank and clear input fields after another second
        setTimeout(() => {
            formStatus.innerText = "";
            formInput.email.value = "";
            formInput.answer.value = "";
        }, 500);

    }, 0);
});



if(currentUrl[2] == 1){
    console.log("start")
    left.addEventListener("click", () => {
        window.location = `/`
    })
    right.addEventListener("click", () => {
        let date = Number(currentUrl[2]) 
        window.location = `/december/${date + 1}`
    })

} else if (currentUrl[2] == currentDate.getDate()){
    left.addEventListener("click", () => {
        let date = Number(currentUrl[2])
        window.location = `/december/${date - 1}`
    })
    right.addEventListener("click", () => {
        window.alert("Det er ikke den datoen ennå")
    })

}else if(currentUrl[2] == 24){
    left.addEventListener("click", () => {
        let date = Number(currentUrl[2])
        window.location = `/december/${date - 1}`
    })
    right.addEventListener("click", () => {
        window.location = `/`
    })

} else{
    left.addEventListener("click", () => {
        let date = Number(currentUrl[2])
        window.location = `/december/${date - 1}`
        localStorage.setItem('box' + `${date - 1}`, 'opened');
    })
    right.addEventListener("click", () => {
        let date = Number(currentUrl[2]) 
        window.location = `/december/${date + 1}`
        localStorage.setItem('box' + `${date + 1}`, 'opened');
    })
}
