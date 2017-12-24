var minecraftMatrix = new Array(15);
for (var j = 0; j < minecraftMatrix.length; j++){
    minecraftMatrix[j] = new Array(15);
    }
    for (var k = 0; k < minecraftMatrix.length; k++){
        for (var q = 0; q < minecraftMatrix.length; q++){
        minecraftMatrix[k][q] = "";
        }
    }




for (var y=0; y<15; y++){
    var line = $("<div/>");
        line.addClass("row");
        $(".board").append(line);
        line.attr("id","row"+ y);

    for (var x=0; x<15; x++){
        var row = $("<div/>");
        row.addClass("square");
        $("#row" + y).append(row);
        row.attr("id","row"+ y + "column" + x);

    }
}
