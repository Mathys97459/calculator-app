const result = document.getElementById("result");
var lastElement;

function calculate(value) {
  const calculatedValue = eval(value || null);
    result.value = calculatedValue;
}

function deleteLastElement(){
    result.value = result.value.slice(0, -1);
  }

// Displays entered value on screen.
function addElement(element) {
  result.value += element;
  lastElement = element;
}