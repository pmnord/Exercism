const ENGLISH_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const isPangram = (string) => {
  const stringSet = new Set(string.toLowerCase());

  return ENGLISH_ALPHABET
    .every(char => stringSet.has(char));
};