var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var currentHour = moment().format('LT');

let plan = "saved";
document.getElementById("textarea").innerHTML = plan;

let btn = "save-button";
document.getElementById("saveBtn").innerHTML = btn;

const textarea = document.querySelector(textarea)
function save() {
  localStorage.setItem("text", textarea.value);
}



