let inputBox = document.getElementById("input");
let outputBox = document.getElementById("output");
let changeBtn = document.getElementById("change");
let alertBox = document.getElementById("alert");

changeBtn.onclick = (beforeStr) => {
  beforeStr = inputBox.value;
  midStr = beforeStr.split("/");
  afterStr = "https://www.youtube-nocookie.com/embed/" + midStr[3];
  outputBox.value = afterStr;
  navigator.clipboard.writeText(afterStr).then(() => {
    alertBox.innerText = "복사완료!";
  });
};
