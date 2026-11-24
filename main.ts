/**
 * One Word for the Boss — entry.
 *
 * The boss, in one word: "Hoverer".
 * Not the boss who shouts or the boss who vanishes — the one who stands
 * behind your chair, watching your screen, breathing on your neck while
 * you type. Every office has one. Nobody has ever survived a hover.
 */

const WORD = "Hoverer";
const MAX_WORD_LENGTH = 30;

function validatedWord(word: string): string {
  if (word.length < 1 || word.length > MAX_WORD_LENGTH) {
    throw new Error(`word must be 1-${MAX_WORD_LENGTH} characters`);
  }
  if (word.trim().length === 0) {
    throw new Error("word must not be blank");
  }
  if (word !== word.trim() || /\s/.test(word)) {
    throw new Error("word must be a single word with no spaces");
  }
  return word;
}

export function main(): string {
  return validatedWord(WORD);
}
