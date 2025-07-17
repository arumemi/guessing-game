let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attemptDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

submitBtn.addEventListener("click" ,() =>{
   const guess = parseInt(guessInput.value);
   attempts++;

   if ( isNaN(guess) || guess < 1 || guess >100 ){
      message.textContent = 'Digite um numero valido entre 1 e 100'; return
   }
   if(guess === randomNumber){
      message.textContent = `correto ! o numero era ${randomNumber}`;
      submitBtn.disable = true;
      restartBtn.style.display ="inline-block";
   }else if(guess < randomNumber){
      message.textContent = "Muito lento ! Tente Novamente";
   }else{
      message.textContent = "Muito Alto! Tente Novamente";
  } 

  attemptDisplay.textContent = `Tentativos: ${attempts}`;
  guessInput.value;

});
restartBtn.addEventListener('click', () =>{
   randomNumber = Math.floor(Math.random() * 100) + 1
   attempts = 0;
   message.textContent = "";
   attemptDisplay.textContent = "Tentativos: 0";
   guessInput.value += "";
   restartBtn.style.display ="Nunhem";
})
  guessInput.addEventListener("keydown", (e) =>{
   if(e.key === "Enter")
      submitBtn.click();
  });