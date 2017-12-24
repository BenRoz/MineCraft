
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
