// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Your initialization code here
  });
  
  document.getElementById("quizForm").addEventListener("submit", function (event) {
    var name = document.getElementById("question1").value;
    var purpose = document.getElementById("question2").value;
  
    if (name === "") {
      alert("Please answer the question: What does HTML stand for?");
      event.preventDefault();
    }
  
    if (purpose === "") {
      alert("Please answer the question: What is the purpose of CSS?");
      event.preventDefault();
    }
  });
  