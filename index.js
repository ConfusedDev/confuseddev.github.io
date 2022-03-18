const year = new Date().getFullYear();
document.getElementById("footerDate").innerHTML = "&copy; "+ year;

function contactSubmit(){
  const submitButton = document.getElementById("contactSubmitButton");
  submitButton.classList.add("disabled");
  submitButton.innerText = "Sending";
}

function enhance(event){
  if(document.querySelectorAll(".card")[0].parentElement.classList.value !== "col"){
    const cards = document.querySelectorAll(".card");
    cards.forEach((card)=>{
      card.parentElement.classList.value = "col";
      card.classList.value = "card";
    });
  } else {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card)=>{
      card.parentElement.classList.value = "col-lg-4 col-6";
      card.classList.value = "card can-hover"
    });
  }
  event.target.scrollIntoView({block:"center"});
}
