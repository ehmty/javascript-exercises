const permutations = function(array) {
  if (array.length === 0 || array.length === 1) return [array];

  const result = [];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const rest = [
      ...array.slice(0, i),
      ...array.slice(i + 1),
    ];
    const smallerPermutations = permutations(rest);
    
    for (const permutation of smallerPermutations) {
      result.push([current, ...permutation]);
    }
  }
  return result;
};
  
// Do not edit below this line
module.exports = permutations;
