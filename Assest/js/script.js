const email = document.querySelector(".email");
const getMail = document.getElementById("getMail");
const notification = document.querySelector(".con-success");
const mailUpdate = document.querySelector(".mailupdate");
const notifyClose = document.querySelector(".close");


getMail.addEventListener('click', ()=> {
    console.log(email.value);
    if (email.value != ''){
        notification.classList.add("active");
        console.log(mailUpdate.textContent);
        mailUpdate.textContent = email.value;   
    }
    else {
        alert("Please Enter Your Email")
    }
});

notifyClose.addEventListener('click', ()=> {
    notification.classList.remove("active");
    location.reload();
})