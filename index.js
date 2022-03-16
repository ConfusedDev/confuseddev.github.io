function newsletter(){
  window.location.href = "https://quiet-shore-88177.herokuapp.com/";
}

function codeSample(){
  window.location.href = "https://github.com/ConfusedDev/code-sample";
}

const year = new Date().getFullYear();
document.getElementById("footerDate").innerHTML = "&copy; "+ year;
