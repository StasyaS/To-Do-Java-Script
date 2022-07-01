const LS = () => localStorage.setItem("comments", JSON.stringify(comments))

const changeIsActive = (id) => { //div.id
    const currentTodo = comments.find(elem => elem._id == id);
    currentTodo.isActive = currentTodo.isActive ? false : true;
    LS()
}

const removeTodo = (div) => { //div.id
    comments = comments.filter(elem => elem._id !== div.id);
    LS();
    div.remove();
}

const addTodo = () => {
    const text = input.value;
    if (text.trim() === '') { // !text.trim().length    !text.trim()
        return
    }

    const _id = id();
    addDiv(text, _id);

    comments.push({
        _id,
        text: input.value,
        isActive: false
    })

    input.value = "";
    LS()
}

const onblurSpanInput = (div, inputSpan, divSpan) => {
    const changedInputSpan = comments.find(elem => {
        return elem._id == div.id
    })
    changedInputSpan.text = inputSpan.value;
    LS();
    inputSpan.remove();
    const spanInput = document.createElement("span");
    spanInput.innerHTML = inputSpan.value;
    divSpan.appendChild(spanInput);
}

const changedText = (div, text, divSpan) => {
    const spanD = divSpan.children[0];
    spanD.remove();
    const inputSpan = document.createElement("input");
    inputSpan.value = text;
    inputSpan.autofocus = true;
    divSpan.appendChild(inputSpan);
    inputSpan.onblur = () => onblurSpanInput(div, inputSpan, divSpan);
}

const addDiv = (text, _id, isActive) => {
    const inputD = document.createElement("input");
    const div = document.createElement("div");
    const divSpan = document.createElement("div");
    const spanD = document.createElement("span");
    const buttonD = document.createElement("button");

    div.id = _id;
    div.classList.add("item");
    inputD.type = "checkbox";

    inputD.checked = isActive;

    spanD.innerHTML = text;
    buttonD.innerHTML = "X";

    div.appendChild(inputD);
    div.appendChild(divSpan);
    divSpan.appendChild(spanD);
    div.appendChild(buttonD);
    block.appendChild(div);

    inputD.addEventListener("click", () => changeIsActive(div.id))
    buttonD.addEventListener("click", () => removeTodo(div));
    divSpan.addEventListener("dblclick", () => changedText(div, text, divSpan));
}
