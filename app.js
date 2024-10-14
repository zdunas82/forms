const formElement = document.querySelector("form");

function handleSubmit(event) {
  event.preventDefault();

  console.log(event.target.password.value);


  const data = new FormData(formElement);

  const formValues = Object.fromEntries(data);

  console.log(formValues);

  formElement.reset();
}