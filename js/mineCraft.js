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
    console.log($(this));
    var row = $(this).data("row");
    var column = $(this).data("column");
    console.log( column+ ","+ row);
    if ((($(this).attr("class") == "square dirt") || ($(this).attr("class") == "square dirtGrass"))
    && ($("#shovel").attr("class") == "tool selectedTool")){
        $(this).attr("class", "square");
    } else if ((($(this).attr("class") == "leaf") || ($(this).attr("class") == "trunck"))
    && ($("#axe").attr("class") == "tool selectedTool")){
        $(this).css({"visibility":"hidden"})
    }

}

var sideBarVar = $(".sideBar");
sideBarVar.css({"display":"block",'height':'600px','width':'250px',"background-color":"black"});

var topSideBar = $("<div/>");
$(".sideBar").append(topSideBar);
topSideBar.css({"display":"flex","flex-direction":"column","height":"350px","align-items":"center","justify-content":"space-around"});
var toolButtonArray = ["axe","pickaxe", "shovel"];
for (var w = 0; w < 3; w++){
    var buttonsUp = $("<button/>");
    buttonsUp.attr("id", toolButtonArray[w]);
    buttonsUp.addClass('tool');
    buttonsUp.click(function(){
        $('.tool').removeClass("selectedTool");
        $('.inventory').removeClass("selectedTool");
        $(this).addClass("selectedTool");
    })
    topSideBar.append(buttonsUp);
}

$("#axe").html("Axe");
$("#pickaxe").html("Pickaxe");
$("#shovel").html("Shovel");


var bottomSideBar = $("<div/>");
$(".sideBar").append(bottomSideBar);
bottomSideBar.css({"display":"flex","flex-direction":"row","flex-wrap": "wrap","height":"250px","align-items":"space-around","padding-top":"30px","justify-content":"space-around"});
var inventoryArray = ["dirt","dirtGrass", "stones", "leaves", "wood","Ariel"];
for (var z = 0; z < inventoryArray.length; z++){
       var buttonsDown = $("<button/>");
        buttonsDown.attr("id", inventoryArray[z]);
        buttonsDown.addClass('inventory');
        buttonsDown.click(function(){
        $('.inventory').removeClass("selectedTool");
        $('.tool').removeClass("selectedTool");
        $(this).addClass("selectedTool");
    })
         bottomSideBar.append(buttonsDown);
}

//Making Tree
var treeDivContainer = $('<div/>');
treeDivContainer.attr('id','tree');
treeDivContainer.appendTo($('.main'));

var treeTop = $('<div/>');
treeTop.appendTo(treeDivContainer);

for (var t=0; t<2; t++){
    for (var v=0; v<3; v++){
        var leaf = $('<div/>')
        leaf.css({"background-image":"url('./images/leaf.png')"});
        leaf.appendTo(treeTop);
        leaf.addClass('leaf');
        leaf.click(squarePress);
    }
}

var treeBottom = $('<div/>');
treeBottom.appendTo(treeDivContainer);
treeBottom.addClass('treeBottom')

for (var r=0; r<3; r++){
    var trunk = $('<div/>')
    trunk.css({"background-image":"url('./images/tree.png')"});
    trunk.addClass('trunck');
    trunk.appendTo(treeBottom);
    trunk.click(squarePress);
}

