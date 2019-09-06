function draw1() {

    let childs = plot.childNodes;
    for (let i = childs.length-1;i>=0;i--){
        plot.removeChild(childs[i]);
    }

    let last = sale[sale.length-1];

    const x = document.createElementNS("http://www.w3.org/2000/svg", "line");
    x.setAttribute("x1","0");
    x.setAttribute("y1",max+"");
    x.setAttribute("x2",last.length * 30+"");
    x.setAttribute("y2",max+"");
    x.setAttribute("stroke","black");
    x.setAttribute("stroke-width","2");
    const y = document.createElementNS("http://www.w3.org/2000/svg", "line");
    y.setAttribute("x1","0");
    y.setAttribute("y1","0");
    y.setAttribute("x2","0");
    y.setAttribute("y2",max+"");
    y.setAttribute("stroke","black");
    y.setAttribute("stroke-width","2");
    plot.appendChild(x);
    plot.appendChild(y);

    for (let i = 0;i<last.length;i++) {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", i*30+"");
        rect.setAttribute("y", max-last[i]/2+"");
        rect.setAttribute("width", "20");
        rect.setAttribute("height", last[i]/2+"");
        rect.setAttribute("style","fill-opacity:0.2");
        plot.appendChild(rect);
    }
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x","0");
    text.setAttribute("y",max+25+"");
    text.setAttribute("font-size","20");
    text.appendChild(document.createTextNode(hoverArea+"地区"+hoverCommodity+"销量按照月份的柱状图"));
    plot.appendChild(text);

    const text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text1.setAttribute("x","0");
    text1.setAttribute("y",max+50+"");
    text1.setAttribute("font-size","20");
    text1.appendChild(document.createTextNode("(只显示鼠标最后放在表格中某行的数据)"));
    plot.appendChild(text1);
}

