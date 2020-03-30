$(document).ready(function(){
  $("#formInput").submit(function(event){
    event.preventDefault();
    
    var itemList = [];
    for(var i = 1; i < 12; i++) {
      itemList.push("list" + i);
    }
   
    var newGrocery = itemList.map(function(item){
      if($("#" + item).val().length !== 0) {
        var userInput = $("#" + item).val().toLowerCase();
        return userInput;
      }  
    });

    newGrocery.sort();
    var newArray = newGrocery.map(function(item){
      return item.toUpperCase(); 
    });
    console.log(newArray);
    newArray.forEach(function(item) {
      var list = $("#unorderedList ul");
      $("<li></li>").html(item).appendTo(list);
    });

    $(".finalList").show();
    $("#formInput").hide();
  });
});

