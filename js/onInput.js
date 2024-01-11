import { calculate } from "./calculate.js";
import { updateResult } from "./update.js";

export function onInput(event) {
  const form = event.target.form;
  const value = Number(form.value.value);
  const total = Number(form.total.value);
  const grade = calculate(value, total);
  updateResult(grade);
}
