const totalIntegers = function (data) {
  if (typeof data !== "object" || data === null) return undefined;

  let counter = 0;

  for (const value of Object.values(data)) {
    if (Number.isInteger(value)) {
      counter++;
    } else if (typeof value === "object" && value !== null) {
      counter += totalIntegers(value);
    }
  }

  return counter;
};

// Do not edit below this line
module.exports = totalIntegers;
