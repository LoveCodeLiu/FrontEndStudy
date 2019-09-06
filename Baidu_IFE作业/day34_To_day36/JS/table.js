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

        row.onmouseover = function(){
            if (i != 0) {
                hoverCommodity = td1.innerText;
                hoverArea = td2.innerText;
                draw();
            }
        };

        table.appendChild(row);
    }

    Merge(table);
    productDiv.innerHTML = "";
    productDiv.appendChild(table);
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

