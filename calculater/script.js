let display = document.getElementById("display");

function append(value) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === "") display.innerText = "0";
}

function calculate() {
  try {
    let expression = display.innerText.replace(/÷/g, "/").replace(/×/g, "*");
    display.innerText = eval(expression);
  } catch {
    display.innerText = "Error";
  }
}
