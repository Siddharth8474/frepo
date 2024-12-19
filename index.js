let username = document.getElementById("username");
let password = document.getElementById("password");
let submitBtn  = document.getElementById("submit");
let message  =  document.getElementById("message-ref");

let isUsernameValid = () => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return usernameRegex.test(username.value);
};

let isPasswordValid = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return passwordRegex.test(password.value);
};

username.addEventListener("input", () => {
    if (!isUsernameValid()) {
        message.style.visibility = "hidden";
        username.style.cssText = "border-color:#c0392b; background-color:#e67e22";
    } else {
        username.style.cssText = "border-color:#f39c12; background-color:#95a5a6";
    }
});

password.addEventListener("input", () => {
    if (!isPasswordValid()) {
        message.style.visibility = "hidden";
        password.style.cssText = "border-color:#c0392b; background-color:#e67e22";
    } else {
        password.style.cssText = "border-color:#f39c12; background-color:#95a5a6";
    }
});

submitBtn.addEventListener("mouseover", () => {
    if (!isUsernameValid() || !isPasswordValid()) {
        let containerRect = document.querySelector(".container").getBoundingClientRect();
        let submitRect = submitBtn.getBoundingClientRect();
        let offset = submitRect.left - containerRect.left;
        console.log(offset);
        if (offset <= 100) {
            submitBtn.style.transform = "translateX(5em)";
        } else {
            submitBtn.style.transform = "translateX(0)";
        }
    }
});

submitBtn.addEventListener("click", () => {
    message.style.visibility = "visible";
});
