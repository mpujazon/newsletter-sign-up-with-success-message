let form = document.getElementById("form");
let input = document.getElementById("email-input");
let errorMessage = document.getElementById("error-message");
let successContainer = document.getElementById("success-container");
let successBtn = document.getElementById("success-btn");

function handleSubmit(e) {
    e.preventDefault();
    if (!validator.isEmail(input.value)) {
        errorMessage.textContent = "Validation email required";
        input.classList.add("error");
    }else{
        successContainer.classList.remove("hidden");
        errorMessage.textContent = "";
        input.classList.remove("error");
        form.reset();
    }
};

function closeSuccessModal(e) {
    successContainer.classList.add("hidden");
}

form.addEventListener("submit", handleSubmit);
successBtn.addEventListener("click", closeSuccessModal);