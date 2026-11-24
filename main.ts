/**
 * One Word for the Boss — entry.
 *
 * The boss, in one word: "Hoverer".
 * Not the boss who shouts or the boss who vanishes — the one who stands
 * behind your chair, watching your screen, breathing on your neck while
 * you type. Every office has one. Nobody has ever survived a hover.
 */

const WORD = "Hoverer";

function assertSingleWord(word: string): void {
  if (word.length < 1 || word.length > 30) {
    throw new Error("word must be 1-30 characters");
  }
  if (word.trim().length === 0) {
    throw new Error("word must not be blank");
  }
  if (word !== word.trim()) {
    throw new Error("word must not have leading or trailing spaces");
  }
  if (/\s/.test(word)) {
    throw new Error("word must be a single word with no spaces");
  }
}

export function main(): string {
  assertSingleWord(WORD);
  return WORD;
}
