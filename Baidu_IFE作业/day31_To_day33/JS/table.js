function GetData() {
    commodity.length = 0;
    area.length = 0;
    month.length = 0;
    let checks = document.getElementsByName("1");
    for (let i = 0;i<checks.length-1;i++){
        if (checks[i].checked){
            commodity.push(checks[i].title);
        }
    }
    checks = document.getElementsByName("2");
    for (let i = 0;i<checks.length-1;i++){
        if (checks[i].checked){
            area.push(checks[i].title);
        }
    }
    checks = document.getElementsByName("3");
    for (let i = 0;i<checks.length-1;i++){
        if (checks[i].checked){
            month.push(checks[i].title);
        }
    }
    res.length = 0;
    if (area.length === 1 && commodity.length > 1){
        res.push({
            col1: "地区",
            col2: "商品",
            col3: "月份",
            col4: "销量"
        });
        for (let i = 0;i<area.length;i++){
            for (let j = 0;j<commodity.length;j++){
                for (let k = 0;k<month.length;k++){
                    for (let p = 0;p<sourceData.length;p++){
                        if (sourceData[p].product === commodity[j] &&
                            sourceData[p].region === area[i]){
                            res.push({
                                col1 : area[i],
                                col2 : commodity[j],
                                col3 : month[k],
                                col4 : sourceData[p].sale[month[k]-1]
                            });
                            break;
                        }
                    }
                }
            }
        }
        console.log(res);
    } else {
        res.push({
            col1: "商品",
            col2: "地区",
            col3: "月份",
            col4: "销量"
        });
        for (let i = 0; i < commodity.length; i++) {
            for (let j = 0; j < area.length; j++) {
                for (let k = 0; k < month.length; k++) {
                    for (let p = 0; p < sourceData.length; p++) {
                        if (sourceData[p].product === commodity[i] &&
                            sourceData[p].region === area[j]) {
                            res.push({
                                col1: commodity[i],
                                col2: area[j],
                                col3: month[k],
                                col4: sourceData[p].sale[month[k] - 1]
                            });
                            break;
                        }
                    }
                }
            }
        }
        console.log(res);
    }
    CreateTable();
}
function CreateTable() {
    let table = document.createElement("table");
    table.setAttribute("border","1");

    for (let i = 0;i<res.length;i++){
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(res[i].col1));
        row.appendChild(td1);

        let td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(res[i].col2));
        row.appendChild(td2);

        let td3 = document.createElement("td");
        td3.appendChild(document.createTextNode(res[i].col3));
        row.appendChild(td3);

        let td4 = document.createElement("td");
        td4.appendChild(document.createTextNode(res[i].col4));
        row.appendChild(td4);

        table.appendChild(row);
    }

    Merge(table);
    product.innerHTML = "";
    product.appendChild(table);
}

function Merge(table) {
    for(let i = 0; i < table.rows.length;) {
        let j = i+1;
        while (j < table.rows.length && table.rows[i].cells[0].innerText === table.rows[j].cells[0].innerText){
            table.rows[j].removeChild(table.rows[j].cells[0]);
            table.rows[i].cells[0].rowSpan++;
            j++;
        }
        i = j;
    }
}
let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}];
