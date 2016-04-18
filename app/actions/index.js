export const UPPERCASE = "UPPERCASE";
export const LOWERCASE = "LOWERCASE";
export const WORD_LENGTH = "WORD_LENGTH";

export function toggleCharCase(charCase) {
  return {
    type: charCase === 'lowercase' ? LOWERCASE : UPPERCASE
  };
}

export function filterWordLength(wordLength) {
  return {
    type: WORD_LENGTH,
    wordLength: wordLength
  };
}