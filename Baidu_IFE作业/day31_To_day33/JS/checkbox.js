function CreateCheckBoxs(Parent,tag,content){
    for (let i = 0;i<content.length;i++){
        CreateCheckBox(Parent,tag,1,i,content[i])
    }
    CreateCheckBox(Parent,tag,2,content.length,"全选");
    Parent.appendChild(document.createElement("br"));
}
function CreateCheckBox(Parent,tag,flag,i,name) {
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    checkBox.setAttribute("name",tag);
    checkBox.setAttribute("title",name);
    checkBox.setAttribute("class",flag === 1?"one":"all");
    if (i === 0)checkBox.checked = true;
    checkBox.onclick = function(){
        SetCheckBoxClick(checkBox);
    };

    Parent.appendChild(checkBox);
    Parent.appendChild(document.createTextNode(name));
}
function SetCheckBoxClick(checkBox) {
    let temp = checkBox.className;
    if (temp === "one"){
        OneClick(checkBox);
    } else if (temp === "all"){
        SetAllCheckBox(checkBox);
    }
}
function OneClick(checkBox) {
    let tag = checkBox.name;
    let checkBoxs = document.getElementsByName(tag);
    let sum = 0;
    for (let i = 0;i<checkBoxs.length-1;i++){
        if (checkBoxs[i].checked)
            sum++;
    }
    if (sum === checkBoxs.length-1) {
        checkBoxs[checkBoxs.length-1].checked = true;
    } else {
        checkBoxs[checkBoxs.length-1].checked = false;
    }

    if (sum === 0){
        alert("请至少选择一个");
        checkBox.checked = true;
    } else {
    }
}
function SetAllCheckBox(checkBox) {
    let tag = checkBox.name;
    let checkBoxs = document.getElementsByName(tag);
    for (let i = 0;i<checkBoxs.length-1;i++){
        checkBoxs[i].checked = true;
    }
    checkBox.checked = true;
}
