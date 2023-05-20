const toolbar_div = document.querySelector("#toolbar")

const img_btn = document.createElement("button")
img_btn.className = "sc-eLwHnm hAZWeI"
img_btn.innerHTML = `<p style="font-size: 0.4em;">HTML IMAGE</p>`
toolbar_div.appendChild(img_btn)

img_btn.addEventListener('click', (event)=>{
    const data = '<p align="center">\n\t<img src="" alt="" width="100%" />\n\t캡션 입력\n</p>'
    navigator.clipboard.writeText(data).then(()=>{
        const editor = document.querySelector("div.CodeMirror-scroll")

        const clipboardData = new DataTransfer()
        clipboardData.setData("text/plain", data)
        const evt = new ClipboardEvent("paste", {clipboardData: clipboardData})

        const result = editor.dispatchEvent(evt)
        if (!result) alert("삽입 실패")
    }).catch(() => {
        alert("삽입 실패")
    })
})