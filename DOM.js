addEventListener("load", () => {
    const body = document.querySelector("body");
    const id = document.getElementById("userText");
    const btn = document.getElementById("sendBtn");
    let p = document.createElement("p");
    btn.addEventListener("click", () => {
        const value = id.value;
        if(value.trim() === ""){
            p.textContent = "Insert some text";
            body.appendChild(p);
        } else {
            p.textContent = value;
            body.appendChild(p);
        }
    })
})