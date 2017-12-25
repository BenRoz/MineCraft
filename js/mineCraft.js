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


var minecraftMatrix=new Array(10);
//Creating board loop
for (var y=0; y<10; y++){
    minecraftMatrix[y]=new Array (15);
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
        minecraftMatrix[y][x]=row;
    }
}



console.log(minecraftMatrix[1][2]);

function squarePress(){
    var row = $(this).data("row");
    var column = $(this).data("column");
    console.log( column+ ","+ row);
    if ((($(this).attr("class") == "square dirt") || ($(this).attr("class") == "square dirtGrass"))
    && ($("#shovel").attr("class") == "tool selectedTool")){
        $(this).attr("class", "square");
    }

}

var sideBarVar = $(".sideBar");
sideBarVar.css({"display":"flex",'height':'600px',"justify-content":"center", 'width':'250px',"background-color":"black"});

var topSideBar = $("<div/>");
$(".sideBar").append(topSideBar);
topSideBar.css({"display":"flex","flex-direction":"column","height":"350px","align-items":"center","justify-content":"space-around"});
var toolButtonArray = ["axe","pickaxe", "shovel"];
for (var w = 0; w < 3; w++){
    var button = $("<button/>");
    button.attr("id", toolButtonArray[w]);
    button.addClass('tool');
    button.click(function(){
        $('.tool').removeClass("unselectedTool selectedTool");
        $('.tool').addClass("unselectedTool");
        $(this).removeClass("unselectedTool");
        $(this).addClass("selectedTool");
    })
    topSideBar.append(button);
}
$("#axe").html("Axe").addClass("unselectedTool");
$("#pickaxe").html("Pickaxe").addClass("unselectedTool");
$("#shovel").html("Shovel").addClass("unselectedTool");



var bottomSideBar = $("<div/>");
$(".sideBar").append(bottomSideBar);
