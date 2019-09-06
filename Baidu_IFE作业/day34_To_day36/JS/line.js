function draw2() {

    plot1.height = plot1.height;
    let color = ["red","orange","yellow","green","cyan","blue","purple"];

    const ctx = plot1.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,max);
    ctx.lineTo(sale[0].length*30,max);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();

    for (let i = 0;i<sale.length;i++) {
        for (let j = 0; j < sale[i].length; j++) {
            ctx.beginPath();
            ctx.arc(15 + j * 30, max - sale[i][j]/2, 2.5, 0, 2 * Math.PI);
            ctx.fillStyle = color[i%7];
            ctx.fill();
            ctx.strokeStyle = color[i%7];
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.moveTo(15, max - sale[i][0]/2);
        for (let j = 1; j < sale[i].length; j++) {
            ctx.lineTo(15 + j * 30, max - sale[i][j]/2);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "black";
        }
        ctx.stroke();
    }

    ctx.font = "20px arial";
    ctx.fillStyle = "black";
    ctx.fillText("多条数据按照月份的销量折线图",0,max+25);
    ctx.fillText("(把鼠标放在表格中某行时就会把这行数据添加到折线图中)",0,max+50);

}
