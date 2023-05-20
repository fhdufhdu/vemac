let toolbarDiv = null;

while (!toolbarDiv) {
  toolbarDiv = document.querySelector("#toolbar");
  console.log(toolbarDiv);
}

const imgBtn = document.createElement("button");
imgBtn.className = "sc-eLwHnm hAZWeI";
imgBtn.innerHTML = `<p style="font-size: 0.4em;">HTML IMAGE</p>`;
toolbarDiv.appendChild(imgBtn);

imgBtn.addEventListener("click", (event) => {
  const data =
    '<p align="center">\n\t<img src="" alt="" width="100%" />\n\t캡션 입력\n</p>';
  navigator.clipboard
    .writeText(data)
    .then(() => {
      const editor = document.querySelector("div.CodeMirror-scroll");

      const clipboardData = new DataTransfer();
      clipboardData.setData("text/plain", data);
      const evt = new ClipboardEvent("paste", { clipboardData });

      const result = editor.dispatchEvent(evt);
      if (!result) alert("삽입 실패");
    })
    .catch(() => {
      alert("삽입 실패");
    });
});
