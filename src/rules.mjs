export function normalizeWhitespace(text) {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\t/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/[ \u3000]{2,}/g, " ");
}

export function normalizeChineseSpacing(text) {
  return text
    .replace(/([，。；：！？）】》])[ \t]+/g, "$1")
    .replace(/[ \t]+([，。；：！？）】》])/g, "$1")
    .replace(/([（【《])[ \t]+/g, "$1")
    .replace(/([A-Za-z0-9])[ \t]+([，。；：！？])/g, "$1$2")
    .replace(/([，。；：！？])[ \t]+([\u4e00-\u9fffA-Za-z])/g, "$1$2")
    .replace(/([。！？])([A-Za-z0-9])/g, "$1 $2");
}

export function normalizeLine(line) {
  return line
    .replace(/^\s*[-*_]{3,}\s*$/g, "")
    .replace(/^\s{0,3}(#{1,6})\s*/g, "")
    .replace(/^\s*[-*+]\s+/g, "")
    .replace(/^\s*\d+\.\s+/g, "")
    .replace(/^\s*>\s?/g, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

export function isStandaloneHeading(line) {
  return (
    /^第.+部分[:：]/.test(line) ||
    /^\d+(?:\.\d+)+\s+/.test(line) ||
    /^[一二三四五六七八九十]+[、.．]/.test(line) ||
    /^(写作建议|研究意义|研究背景|摘要|结论)[:：]?$/.test(line)
  );
}

export function isLeadLabelLine(line) {
  return /^[^\s：:]{2,12}[:：]/.test(line);
}

export function collapseParagraphBreaks(lines) {
  const compact = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      if (compact[compact.length - 1] !== "") {
        compact.push("");
      }
      continue;
    }

    compact.push(trimmed.replace(/\s{2,}/g, " "));
  }

  return compact;
}
