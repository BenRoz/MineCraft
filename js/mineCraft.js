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
    var row = $(this).data("row");
    var column = $(this).data("column");
    console.log( column+ ","+ row);

    if (($(this).attr("class") == "square dirt") && ($("#shovel").attr("class") == "tool selectedTool")){
        $(this).attr("class", "square");
        settingCounter.dirtBut++;
        $("#dirtBut").text(settingCounter.dirtBut);
    }
    else if (($(this).attr("class") == "square dirtGrass")&& ($("#shovel").attr("class") == "tool selectedTool"))  {
          $(this).attr("class", "square");
         settingCounter.dirtGrassBut++;
         $("#dirtGrassBut").text(settingCounter.dirtGrassBut);
    }

    else if (($(this).attr("class") == "leaf") && ($("#axe").attr("class") == "tool selectedTool")){
        $(this).css({"visibility":"hidden"})
        settingCounter.leafBut++;
        $("#leafBut").text(settingCounter.leafBut);
    }
    else if (($(this).attr("class") == "trunck") && ($("#axe").attr("class") == "tool selectedTool")){
          $(this).css({"visibility":"hidden"})
         settingCounter.trunckBut++;
         $("#trunckBut").text(settingCounter.trunckBut);
    }
    else if (($(this).attr("class")== "rock") && ($("#pickaxe").attr("class") == "tool selectedTool")){
        $(this).css({"visibility":"hidden"});
        settingCounter.rockBut++;
        $("#rockBut").text(settingCounter.rockBut);
    }
    else if (($(this).attr("class")== "Ariel")){
         $(this).css({"visibility":"hidden"});
        settingCounter.ArielBut++;
        $("#ArielBut").text(settingCounter.ArielBut);
    }
    if (!$('#pickaxe').attr("class").includes("selectedTool")&&!$('#axe').attr("class").includes("selectedTool")&&
    !$('#shovel').attr("class").includes("selectedTool")){
        placingOnBoard($(this));
    }

    console.log($(this).css("background-image"))
}
//setting inventory values
var settingCounter ={
rockBut: 2,
leafBut : 0,
trunckBut: 1,
dirtGrassBut: 2,
dirtBut: "0",
ArielBut: 5,
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
//inventory

var bottomSideBar = $("<div/>");
$(".sideBar").append(bottomSideBar);
bottomSideBar.css({"display":"flex","flex-direction":"row","flex-wrap": "wrap","height":"250px","align-items":"space-around","padding-top":"30px","justify-content":"space-around"});

//creating inventory
var selectedInventory;
var tempImage;

var matchingIdToClass= {
dirtBut : "square dirt",
dirtGrassBut : "square dirtGrass",
rockBut : "rock",
leafBut: "leaf",
trunckBut: "trunck",
ArielBut : "Ariel"
}

var tempClassName="";
var inventoryArray = ["dirtBut","dirtGrassBut", "rockBut", "leafBut", "trunckBut","ArielBut"];
for (var z = 0; z < inventoryArray.length; z++){
       var buttonsDown = $("<button/>");
        buttonsDown.attr("id", inventoryArray[z]);
        buttonsDown.addClass('inventory');
        buttonsDown.text(settingCounter[inventoryArray[z]]);

        buttonsDown.click(function(){
        $('.inventory').removeClass("selectedTool");
        $('.tool').removeClass("selectedTool");
        $(this).addClass("selectedTool");
//        tempImage = $(this).css("background-image");
        tempClassName= $(this).attr("id");

 console.log(matchingIdToClass[tempClassName]);
    })
         bottomSideBar.append(buttonsDown);
}

//
function placingOnBoard(a){

    if(settingCounter[tempClassName] > 0){
        if (a.css('background-image') == "none"){
        a.attr("class", matchingIdToClass[tempClassName]);
         console.log(matchingIdToClass[tempClassName]);
         console.log(matchingIdToClass[tempClassName]);
         settingCounter[tempClassName]--;
         $("#"+tempClassName).text(settingCounter[tempClassName]);
         }

     }
}
//creating Tree
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
    opacity: 0.4,
    cursor: 'move',
    snap: '.square',
    axis: 'x'
    });
  } );



    // function tree(){
    // this.id =
    // row (y) + line (x) . addClass(tree);
    // row (y) + line (x-1) . addClass(tree);
    // row (y) + line (x-2) . addClass(tree);
    // row (y) + line (x-3) . addClass(leaves);
    // row (y) + line (x-4) . addClass(leaves);
    // row (y) + line (x-5) . addClass(leaves);
    // row (y-1) + line (x-3) . addClass(leaves);
    // row (y-1) + line (x-4) . addClass(leaves);
    // row (y-1) + line (x-5) . addClass(leaves);
    // row (y+1) + line (x-3) . addClass(leaves);
    // row (y+1) + line (x-4) . addClass(leaves);
    // row (y+1) + line (x-5) . addClass(leaves);


    // }
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
    opacity: 0.4,
    snap: '.square',
    axis: 'x'
    });
  } );


//create cloud
function createCloud(){
    var x = 3;
    var y = 1;
    $('#column'+x+'row'+y).addClass('cloud');
    $('#column'+(x)+'row'+(y+1)).addClass('cloud');
    $('#column'+(x+1)+'row'+(y+1)).addClass('cloud');
    $('#column'+(x-1)+'row'+(y+1)).addClass('cloud');
    $('#column'+(x-1)+'row'+(y)).addClass('cloud');
    $('#column'+(x-2)+'row'+(y+1)).addClass('cloud');
    $('#column'+(x-1)+'row'+(y+2)).addClass('cloud');
}
createCloud();

<<<<<<< HEAD
//create bush
function createBush(){
    var mainBushDiv = $('<div/>')
    mainBushDiv.attr("id","bush");
    mainBushDiv.css({"height":"190px","width":"120px"});
    mainBushDiv.appendTo($(".board"));

}


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
=======
>>>>>>> 75500fdc1852fd35af781e009ef31da96324e6d9
