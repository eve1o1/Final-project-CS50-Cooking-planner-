
function submitAllIngredients() {
  startTimer(1); // Start timer for the first ingredient
}

function startTimer(ingredientNum) {
  var ingredientId = document.getElementById('i' + ingredientNum).value.trim();
  var minutesInput = document.getElementById('t' + ingredientNum + '_minutes').value.trim();
  var secondsInput = document.getElementById('t' + ingredientNum + '_seconds').value.trim();

  var minutes = (minutesInput === '' || isNaN(minutesInput)) ? 0 : parseInt(minutesInput);
  var seconds = (secondsInput === '' || isNaN(secondsInput)) ? 0 : parseInt(secondsInput);

  if (ingredientId !== '' && (minutes >= 0 || seconds >= 0)) {
    var totalSeconds = minutes * 60 + seconds;
    var timer = totalSeconds;
    var interval = setInterval(function() {
      timer--;

      if (timer < 0) {
        clearInterval(interval);
        displayCustomAlert(`Time set for ${ingredientId} has ended. Add the next ingredient.`);

        var nextIngredientNum = ingredientNum + 1;
        if (document.getElementById('i' + nextIngredientNum)) {
          startTimer(nextIngredientNum);
        }
      }
    }, 1000); // Updates every second (1000 milliseconds)
  }
}

function displayCustomAlert(message) {
  var alertElement = document.getElementById('alert-message');
  alertElement.innerText = message;
  var customAlert = document.getElementById('customAlert');
  customAlert.style.display = 'block';
}

function closeAlert() {
  var customAlert = document.getElementById('customAlert');
  customAlert.style.display = 'none';
}