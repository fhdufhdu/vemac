import { ConstData } from "../common/const";

const macroList = JSON.parse(
  localStorage.getItem(ConstData.LOCAL_STORAGE_MACRO_LIST_KEY)
);

let toolbarDiv = null;

while (!toolbarDiv) {
  toolbarDiv = document.querySelector("#toolbar");
}

for (const macro of macroList) {
  const imgBtn = document.createElement("button");
  imgBtn.className = "sc-eLwHnm hAZWeI";
  imgBtn.innerHTML = `<p style="font-size: 0.4em;">${macro.name}</p>`;
  toolbarDiv.appendChild(imgBtn);

  imgBtn.addEventListener("click", (event) => {
    const data = macro.data;
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
}
