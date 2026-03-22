import {
  collapseParagraphBreaks,
  isLeadLabelLine,
  isStandaloneHeading,
  normalizeChineseSpacing,
  normalizeLine,
  normalizeWhitespace,
} from "./rules.mjs";

function addHeadingBreathingRoom(lines) {
  const result = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    result.push(line);

    if (!line) continue;

    const next = lines[index + 1];
    if (!next) continue;

    if (isStandaloneHeading(line) && next !== "") {
      result.push("");
      continue;
    }

    if (/[。！？]$/.test(line) && isLeadLabelLine(next)) {
      result.push("");
    }
  }

  return result;
}

export function cleanText(raw) {
  const normalized = normalizeChineseSpacing(normalizeWhitespace(raw));
  const cleanedLines = normalized.split("\n").map(normalizeLine);
  const compact = collapseParagraphBreaks(cleanedLines);
  const structured = addHeadingBreathingRoom(compact);

  return normalizeChineseSpacing(
    structured
      .join("\n")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/[ \t]+\n/g, "\n")
      .trim()
  );
}

export function countVisibleChars(text) {
  return text.replace(/\s/g, "").length;
}
