import { cleanText, countVisibleChars } from "./cleaner.mjs";
import { sampleCases } from "../samples/cases.mjs";

const toggle = document.getElementById("themeToggle");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const copyResult = document.getElementById("copyResult");
const clearText = document.getElementById("clearText");
const charCount = document.getElementById("charCount");
const sampleButtons = [...document.querySelectorAll(".sample-button")];
const showInput = document.getElementById("showInput");
const showOutput = document.getElementById("showOutput");
const inputPanel = document.getElementById("inputPanel");
const outputPanel = document.getElementById("outputPanel");
const defaultSample = sampleCases[0];

function renderOutput() {
  const cleaned = cleanText(inputText.value);
  charCount.textContent = `已处理 ${countVisibleChars(cleaned)} 字`;

  if (!cleaned) {
    outputText.innerHTML =
      '<div class="empty-state">粘贴文本后，这里会自动生成可复制到 Word 的结果。</div>';
    return;
  }

  outputText.textContent = cleaned;
}

function setMobileView(view) {
  const isOutput = view === "output";
  inputPanel.classList.toggle("visible", !isOutput);
  outputPanel.classList.toggle("visible", isOutput);
  showInput.classList.toggle("active", !isOutput);
  showOutput.classList.toggle("active", isOutput);
}

function applySample(sampleId) {
  const sample = sampleCases.find((item) => item.id === sampleId);
  if (!sample) return;

  inputText.value = sample.input;
  renderOutput();
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

inputText.addEventListener("input", renderOutput);

clearText.addEventListener("click", () => {
  inputText.value = "";
  copyResult.textContent = "复制结果";
  renderOutput();
  inputText.focus();
});

copyResult.addEventListener("click", async () => {
  const text = outputText.textContent.trim();
  if (!text || outputText.querySelector(".empty-state")) return;

  try {
    await navigator.clipboard.writeText(text);
    copyResult.textContent = "已复制";
  } catch {
    copyResult.textContent = "复制失败";
  }

  setTimeout(() => {
    copyResult.textContent = "复制结果";
  }, 1500);
});

sampleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sampleButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    applySample(button.dataset.sample);
  });
});

showInput.addEventListener("click", () => setMobileView("input"));
showOutput.addEventListener("click", () => setMobileView("output"));

if (!inputText.value.trim() && defaultSample) {
  inputText.value = defaultSample.input;
}

renderOutput();
setMobileView("output");
