$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();  
    var resultLucky = 0;
    $("input:checkbox[name=lucky]:checked").each(function() {
      resultLucky += parseInt($(this).val());
    });
    if (resultLucky > 0) {
      $("#fortune").text("You have lucky!! you should probably buy lottery ticket!!!");
    } else if (resultLucky === 0) {
      $("#fortune").text("Your fortunes are looking rather flat, don't do anything out of the ordinary...");
    } else {
      $("#fortune").text("Things aren't looking good for you, beware!")
    }
  });
});