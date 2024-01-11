function updateResult(grade) {
  const resultElement = document.querySelector(".grade");
  resultElement.textContent = grade;
}

function onInput(event) {
  const form = event.target.form;
  const value = Number(form.value.value);
  const total = Number(form.total.value);
  const grade = calculate(value, total);
  updateResult(grade);
}

function calculate(value = 0, total = 0) {
  if (total <= 0) {
    throw new Error("Total must be greater than zero.");
  }

  if (value < 0 || value > total) {
    throw new Error("Value must be between 0 and the total.");
  }

  // Calculate the percentage
  const percentage = value / total;

  // Define the grade boundaries
  const boundaries = [
    {
      letter: "A",
      min: 0.9,
    },
    {
      letter: "B",
      min: 0.8,
    },
    {
      letter: "C",
      min: 0.6,
    },
    {
      letter: "D",
      min: 0.5,
    },
    {
      letter: "E",
      min: 0.4,
    },
    {
      letter: "F",
      min: 0,
    },
  ];

  // Determine the letter grade
  for (let i = 0; i < boundaries.length; i++) {
    if (percentage >= boundaries[i].min) {
      return boundaries[i].letter;
    }
  }

  // In case no boundary is met, return 'F' as default
  return "F";
}

function setup() {
  const form = document.calculator;

  if (!form) throw new Error("Form not found");

  form.value.value = 80;
  form.total.value = 100;
  form.value.focus();
  form.value.select();

  updateResult(calculate(80, 100));

  form.addEventListener("input", onInput);
}

setup();

console.log("Intentional Error");
