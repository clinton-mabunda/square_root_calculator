function calculateSquareRoot(number) {
  try {
    if (number < 0) {
      throw new Error("Cannot calculate square root of a negative number");
    }
    const result = Math.sqrt(number);
    console.log(`The square root of ${number} is: ${result}`);
    return result;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
