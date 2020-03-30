$(document).ready(function(){
  $("#formInput").submit(function(event){
    event.preventDefault();
    
    var itemList = [];
    for(var i = 1; i < 12; i++) {
      itemList.push("list" + i);
    }
   
    var newGrocery = itemList.map(function(item){
      if($("#" + item).val() !== undefined) {
        var userInput = $("#" + item).val().toLowerCase();
        return userInput;
      }  
    });

    var filteredGrocery = newGrocery.filter(item => item.length>0);

    filteredGrocery.sort();

    var newArray = filteredGrocery.map(function(item){
      var upper = item.toUpperCase(); 
      return upper
    });

    newArray.forEach(function(item) {
      var list = $(".finalList #unorderedList");
      $("<li>"+ item +"</li>").appendTo(list);
    });

    $(".finalList").show();
    $("#formInput").hide();
  });
});

