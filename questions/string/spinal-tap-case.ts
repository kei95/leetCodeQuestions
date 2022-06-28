// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str: string) {
  // skipping the first letter, check uppercase
  const capitalCheckRegex = /(?!^)([A-Z])/g;
  // include all spaces between character to character
  const specialCharCheckRegex = /[_\s]+(?=[a-zA-Z])/g;
  const res = str
    .replace(capitalCheckRegex, " $1")
    .replace(specialCharCheckRegex, "-")
    .toLowerCase();

  return res;
}

// this-is-spinal-tap
spinalCase("This Is Spinal Tap");
