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
        row.on("click", squarePress);
    }
}

function squarePress(){
    console.log("chicken fucker");
}

var sideBarVar = $(".sideBar");
sideBarVar.css({"display":"flex",'height':'600px',"justify-content":"center", 'width':'250px',"background-color":"black"});

var topSideBar = $("<div/>");
$(".sideBar").append(topSideBar);
topSideBar.css({"display":"flex","flex-direction":"column","height":"350px","align-items":"center","justify-content":"space-around"});
for (var w = 0; w < 3; w++){
    var button = $("<button/>");

    topSideBar.append(button);
}



var bottomSideBar = $("<div/>");
$(".sideBar").append(bottomSideBar);
