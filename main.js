const submitHandler = (num, wrong, output) => {

  const numOfQuestions = document.getElementById(num).value;

  const numWrong = document.getElementById(wrong).value;

  let gradeText = document.getElementById(output);

  gradeText.textContent = '';

  const quotiant = 100 / numOfQuestions;
  
  const deducted = quotiant * numWrong;

  const percentage = Math.round(100 - deducted);

  let letterGrade = '';

  if (percentage >= 93) {
    letterGrade = 'A';
  } else if (percentage >= 85 && percentage <= 92) {
    letterGrade = 'B';
  } else if (percentage >= 77 && percentage <= 84) {
    letterGrade = 'C';
  } else if (percentage >= 70 && percentage <= 76) {
    letterGrade = 'D';
  } else if (percentage <= 67) {
    letterGrade = 'F';
  }

  let text = `Grade: ${percentage}%  ${letterGrade}`;

  if (!numOfQuestions || !numWrong) {
    text = 'Please, enter the number of questions on the test and the number of questions answered incorrectly.'
  }

  gradeText.textContent += text;
  
}

const yesButton = () => {
  var x = document.getElementById("input-table");
  var y = document.getElementById("preliminary-question");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none"
  } else {
    x.style.display = "none";
  }
}

const noButton = () => {
  alert('This feature is currently under contruction.') 
}

const goBackButton = () => {
  var x = document.getElementById("input-table");
  var y = document.getElementById("preliminary-question");
    y.style.display = "block";
    x.style.display = "none"
  } 


document.getElementById('yes').addEventListener('click', function (){
  yesButton();
});

document.getElementById('no').addEventListener('click', function (){
  noButton();
});

document.getElementById('submit').addEventListener('click', function (){
  submitHandler("numOfQuestions", "numWrong", "grade-text");
});

document.getElementById('go-back').addEventListener('click', function (){
  goBackButton();
});

document.getElementById("numOfQuestions").addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    submitHandler("numOfQuestions", "numWrong", "grade-text");
  }
});

document.getElementById('numWrong').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    submitHandler("numOfQuestions", "numWrong", "grade-text");
  }
});


