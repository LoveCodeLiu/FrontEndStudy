let region = document.getElementById("region-radio-wrapper");
let product = document.getElementById("product-radio-wrapper");
let commodity = [],area = [],month = [],res = [];

region.appendChild(document.createTextNode("选择商品种类: "));
CreateCheckBoxs(region,1,["手机","笔记本","智能音箱"]);

region.appendChild(document.createTextNode("选择地区: "));
CreateCheckBoxs(region,2,["华东","华南","华北"]);

region.appendChild(document.createTextNode("选择月份: "));
CreateCheckBoxs(region,3,[1,2,3,4,5,6,7,8,9,10,11,12]);

document.getElementById("confirm-button").onclick = function () {
    GetData();
};
