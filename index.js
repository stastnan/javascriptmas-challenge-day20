const dangerArray = [
  ["🎅", "👺"],
  [
    ["🎅", "🦁"],
    ["👹", "🎅"],
  ],
  [
    [
      ["🎅", "🐻"],
      ["🧌", "🎅"],
    ],
    [
      ["🐯", "🎅"],
      ["🎅", "😈"],
    ],
  ],
];

// from multidimensional array to one-multidimensional
function simpleArray(arr) {
  return arr.reduce((accumulator, current) => {
    return accumulator.concat(
      Array.isArray(current) ? simpleArray(current) : current
    );
  }, []);
}

// checking all elements of the array
function saveSanta(arr) {
  const easyDangerArray = simpleArray(arr);
  const goodArray = [];

  for (const creature of easyDangerArray) {
    if (creature === "🎅") {
      goodArray.push("🎅");
    }
  }
  // to remember: return statement can't be directly in the loop - it would immediately terminate the code. It has to be return statement of the function itself
  return goodArray;
}

console.log(saveSanta(dangerArray));
