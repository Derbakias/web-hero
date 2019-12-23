// variables & selectors
// you can edit the questions/answers and add as many you wish
const questList = [{question: 'The capital city of Greece is:', ans1: 'Argos', ans2: 'Korinth', correctAns: 'Athens'},
                   {question: 'The capital city of the UK is:', ans1: 'Bristol', ans2: 'Leeds', correctAns: 'London'},
                   {question: 'The capital city of Germany is:', ans1: 'Hamburg', ans2: 'Munich', correctAns: 'Berlin'}];

const form = document.querySelector('form');
const popupWrapper = document.querySelector('.popup-wrapper');
const popupContent = document.querySelector('.popup-wrapper .content');
let ul = document.querySelector('ul');

// Loop through questList & create each list item
questList.forEach((quest, index) => {
  let next;
  // create the submit button
  if(index === questList.length - 1) {
    link = `<button type="submit">Submit</button>`;
  } else {
    // create an internal link for the next question
    next = questList[index + 1].question;
    link = `<a href="#${next}" class="next-btn">Next</a>`;
  };
  // li html template 
  let liTemplate = `
  <li>
    <div id="${quest.question}" class="question anchor">
      <p>${quest.question}</p>
    </div>
    <div class="answer">
      <input type="radio" name="${quest.correctAns}" value="${quest.ans1}" checked>
      <p>${quest.ans1}</p>
    </div>
    <div class="answer">
      <input type="radio" name="${quest.correctAns}" value="${quest.ans2}">
      <p>${quest.ans2}</p>
    </div>
    <div class="answer">
      <input type="radio" name="${quest.correctAns}" value="${quest.correctAns}">
      <p>${quest.correctAns}</p>
    </div>
    ${link}
  </li>`
  ul.innerHTML += liTemplate;
});


let score = 0;
let playerChoice = [];
const inputs = document.querySelectorAll('input');
// add an event listener to the form
form.addEventListener('submit', e => {
  e.preventDefault();
  // loop through all the user inputs and add it to an array
  inputs.forEach(item => {
    if(item.checked){
      playerChoice.push(item.value);
    }
  })
  // check if the user's answer is correct & add one unit to the score
  playerChoice.forEach((choice,index) => {
    if(choice === questList[index].correctAns){
      score++;
    }
  })
  // create the html template for the popup message
  popupContent.innerHTML = `<p>You got ${score} out of ${questList.length}`;
  // remove the ul elements
  ul.style.display = 'none';
  // display the popup
  popupWrapper.style.display = 'flex';
})
// remove the popup when you click on the space or the close btn
popupWrapper.addEventListener('click', e => {
  if(e.target.className === 'popup-wrapper' || e.target.className === 'close'){
    popupWrapper.remove();
    // rediarect to the home page
    window.location = 'index.html';
  }
})