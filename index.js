function newsletter(){
  window.location.href = "https://quiet-shore-88177.herokuapp.com/";
}

function codeSample(){
  window.location.href = "https://github.com/ConfusedDev/code-sample";
}

const year = new Date().getFullYear();
document.getElementById("footerDate").innerHTML = "&copy; "+ year;

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
