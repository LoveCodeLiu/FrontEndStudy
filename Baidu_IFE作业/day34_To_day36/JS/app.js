let region = document.getElementById("region-radio-wrapper");
let productDiv = document.getElementById("product-radio-wrapper");
const plot = document.getElementById("plot");
const plot1 = document.getElementById("plot1");
let commodity = [],area = [],month = [],res = [];
let sale=[[]];
let num = 0;
let max = 0;
let hoverCommodity,hoverArea;
region.appendChild(document.createTextNode("选择商品种类: "));
CreateCheckBoxs(region,1,["手机","笔记本","智能音箱"]);

region.appendChild(document.createTextNode("选择地区: "));
CreateCheckBoxs(region,2,["华东","华南","华北"]);

region.appendChild(document.createTextNode("选择月份: "));
CreateCheckBoxs(region,3,[1,2,3,4,5,6,7,8,9,10,11,12]);

document.getElementById("confirm-button").onclick = function () {
    GetData();
};
function draw(){

    max = 0;
    for (let i = 0;i<sourceData.length;i++){
        if (sourceData[i].product === hoverCommodity &&
            sourceData[i].region === hoverArea){
            sale[num] = sourceData[i].sale;
            num++;
            break;
        }
    }
    for (let i = 0;i<sale.length;i++){
        for (let j = 0;j<sale[i].length;j++){
            max = max > sale[i][j]?max:sale[i][j];
        }
    }
    max += 50;
    max /= 2;
    draw1();
    draw2();
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
