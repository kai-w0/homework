const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach"
};

// w3 select option

const render = (ele, tmp) => {
    ele.innerHTML = tmp;
}

const createDropDown = () => {
    const keyele = document.getElementById('key');
    const valele = document.getElementById('val');
    
    let keystmp = '';
    let valstmp = '';
    Object.keys(state).forEach(key => {
        keystmp += `<option value="${key}">${key}</option>`;
        valstmp += `<option value="${key}">${state[key]}</option>`;
    });
    render(keyele, keystmp);
    render(valele, valstmp);
}

const keyele = document.getElementById('key');
const valele = document.getElementById('val');

const output1 = () => {
    let keyCur = keyele.options[keyele.selectedIndex].value;
    let keystmp = '';
    let valstmp = '';
    keystmp += `<option value="${keyCur}">${keyCur}</option>`;
    valstmp += `<option value="${keyCur}">${state[keyCur]}</option>`;
    Object.keys(state).forEach(key => {
        if (key != keyCur){
            keystmp += `<option value="${key}">${key}</option>`;
            valstmp += `<option value="${key}">${state[key]}</option>`;
        }
    });
    render(keyele, keystmp);
    render(valele, valstmp);
}

const output2 = () => {
    let valCur = valele.options[valele.selectedIndex].value;
    let keyCur = valCur.slice(0,1);
    let keystmp = '';
    let valstmp = '';
    keystmp += `<option value="${keyCur}">${keyCur}</option>`;
    valstmp += `<option value="${keyCur}">${state[keyCur]}</option>`;
    Object.keys(state).forEach(key => {
        if (key != keyCur){
            keystmp += `<option value="${key}">${key}</option>`;
            valstmp += `<option value="${key}">${state[key]}</option>`;
        }
    });
    render(keyele, keystmp);
    render(valele, valstmp);
}

createDropDown();
keyele.addEventListener('change', output1);
valele.addEventListener('change', output2);