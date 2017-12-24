//var minecraftMatrix = new Array(10);
//for (var j = 0; j < minecraftMatrix.length; j++){
//    minecraftMatrix[j] = new Array(15);
//    }
//    for (var k = 0; k < minecraftMatrix.length; k++){
//        for (var q = 0; q < 15; q++){
//        minecraftMatrix[k][q] = q+","+k;
//        }
//    }
//



for (var y=0; y<10; y++){
    for (var x=0; x<15; x++){
        var row = $("<div/>");
        row.addClass("square");
        $(".board" ).append(row);
        row.attr("id", "column" + x + "row"+ y );
        row.on("click", squarePress);
        row.data("row",y);
        row.data("column",x);
        if (y==7){
            row.addClass("dirtGrass");
        }
        else if (y>7){
            row.addClass("dirt");
        }
    }
}

function squarePress(){
    var row = $(this).data("row");
    var column = $(this).data("column");
    console.log( column+ ","+ row);

}

var sideBarVar = $(".sideBar");
sideBarVar.css({"display":"flex",'height':'600px',"justify-content":"center", 'width':'250px',"background-color":"black"});

var topSideBar = $("<div/>");
$(".sideBar").append(topSideBar);
topSideBar.css({"display":"flex","flex-direction":"column","height":"350px","align-items":"center","justify-content":"space-around"});
for (var w = 0; w < 3; w++){
    var button = $("<button/>");
    button.attr("id", "button"+w);
    topSideBar.append(button);
}
$("#button0").html("Axe");
$("#button1").html("Pickaxe");
$("#button2").html("Shovel");



var bottomSideBar = $("<div/>");
$(".sideBar").append(bottomSideBar);
