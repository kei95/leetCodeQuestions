// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str: string) {
  const vowel = { a: "a", e: "e", i: "i", o: "o", u: "u" };
  const firstVowel = str.split("").findIndex((char: string) => !!vowel[char]);

  // in case when first char is vowel
  if (firstVowel === 0) {
    return str + "way";
  }

  return str.substring(firstVowel) + str.substring(0, firstVowel) + "ay";
}

translatePigLatin("schwartz");
