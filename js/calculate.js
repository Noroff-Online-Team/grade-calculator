export function calculate(value = 0, total = 0) {
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
