import { calculate } from "./calculate.js";
import { updateResult } from "./update.js";
import { onInput } from "./onInput.js";

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
