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
        //row.on("mouseover", setTree);
        //row.on("mouseout", backtoSquare)
        row.data("row",y);
        row.data("column",x);
//adding dirstGrass and dirt
        if (y==7){
            row.addClass("dirtGrass");
        }
        else if (y>7){
            row.addClass("dirt");
        }
        minecraftMatrix[y][x]=row;
    }
}
//on click function
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
    else if (($(this).attr("class")== "rock") && ($("#pickaxe").attr("class") == "tool selectedTool")){
     $(this).css({"visibility":"hidden"});
    }
    inventoryCounter($(this));
}
var settingCounter ={
stones: "0",
leaves : "0",
wood: "0",
dirtGrass: "0",
dirt: "0",
Ariel: "0",
}

function inventoryCounter(a){
    console.log(a);
    if (a.attr("class").includes("rock")){
            settingCounter.stones++;
            $("#stones").text(settingCounter.stones);

    }
    console.log("done");
}
//creating sidebar for buttons
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
        buttonsDown.text(0);
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
 $( function() {
    $( "#tree" ).draggable({
     containment: '.board',
    cursor: 'move',
    snap: '.square',
    axis: 'x'
    });
  } );



function tree(){
    this.id =
    row (y) + line (x) . addClass(tree);
    row (y) + line (x-1) . addClass(tree);
    row (y) + line (x-2) . addClass(tree);
    row (y) + line (x-3) . addClass(leaves);
    row (y) + line (x-4) . addClass(leaves);
    row (y) + line (x-5) . addClass(leaves);
    row (y-1) + line (x-3) . addClass(leaves);
    row (y-1) + line (x-4) . addClass(leaves);
    row (y-1) + line (x-5) . addClass(leaves);
    row (y+1) + line (x-3) . addClass(leaves);
    row (y+1) + line (x-4) . addClass(leaves);
    row (y+1) + line (x-5) . addClass(leaves);


}
//creating rocks
var rocks = $("<div/>");
rocks.attr("id","rocks");
rocks.appendTo($(".main"));

for (var p=0; p<2 ; p++){
var rockSquare = $("<div/>");
rockSquare.addClass("rock");
rockSquare.appendTo($("#rocks"));
rockSquare.click(squarePress);
}

$( function() {
    $( "#rocks" ).draggable({
     containment: '.board',
    cursor: 'move',
    snap: '.square',
    axis: 'x'
    });
  } );

// function setTree(){
//     if ($(this).attr("background-image") != 'url()'){
//         var y = $(this).data("row");
//         var x = $(this).data("column");
//         if (y<7){
//         //trunk
//             $('#column'+x+'row'+y).css({"background-image":"url('./images/tree.png')"});
//             $('#column'+x+'row'+(y-1)).css({"background-image":"url('./images/tree.png')"});
//             $('#column'+x+'row'+(y-2)).css({"background-image":"url('./images/tree.png')"});
//             //leaves
//             $('#column'+x+'row'+(y-3)).css({"background-image":"url('./images/leaf.png')"});
//             $('#column'+x+'row'+(y-4)).css({"background-image":"url('./images/leaf.png')"});
//             $('#column'+x+'row'+(y-5)).css({"background-image":"url('./images/leaf.png')"});
//             $('#column'+(x-1)+'row'+(y-3)).css({"background-image":"url('./images/leaf.png')"});
//             $('#column'+(x-1)+'row'+(y-4)).css({"background-image":"url('./images/leaf.png')"});
//             $('#column'+(x-1)+'row'+(y-5)).css({"background-image":"url('./images/leaf.png')"});
//             $('#column'+(x+1)+'row'+(y-3)).css({"background-image":"url('./images/leaf.png')"});
//             $('#column'+(x+1)+'row'+(y-4)).css({"background-image":"url('./images/leaf.png')"});
//             $('#column'+(x+1)+'row'+(y-5)).css({"background-image":"url('./images/leaf.png')"});
//         }else if (y>7){
//             continue;
//         }
//     }
// }
// function backtoSquare(){
//     var y = $(this).data("row");
//     var x = $(this).data("column");
    
//     $('#column'+x+'row'+y).css({"background-image":""});
//     $('#column'+x+'row'+(y-1)).css({"background-image":""});
//     $('#column'+x+'row'+(y-2)).css({"background-image":""});
//     //leaves
//     $('#column'+x+'row'+(y-3)).css({"background-image":""});
//     $('#column'+x+'row'+(y-4)).css({"background-image":""});
//     $('#column'+x+'row'+(y-5)).css({"background-image":""});
//     $('#column'+(x-1)+'row'+(y-3)).css({"background-image":""});
//     $('#column'+(x-1)+'row'+(y-4)).css({"background-image":""});
//     $('#column'+(x-1)+'row'+(y-5)).css({"background-image":""});
//     $('#column'+(x+1)+'row'+(y-3)).css({"background-image":""});
//     $('#column'+(x+1)+'row'+(y-4)).css({"background-image":""});
//     $('#column'+(x+1)+'row'+(y-5)).css({"background-image":""});
    
// }
