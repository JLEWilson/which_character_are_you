function add(val1, val2, val3) {
  const total = val1 + val2 + val3;
  return total;
}
function showCharacter(total) {
  if (total < 10) {
    //you are pam
    $("div.output").append("<h3>You are Pam!</h3>");
    $("div.output").append("<img class='img' src='img/pam.png'>");
    $("div.output").append("<p>Pam is a level headed person with simpler tastes.</p>");
  } else if( total >= 10 && total < 50){
    //you are jim
    $("div.output").append("<h3>You are Jim!<h3>");
    $("div.output").append("<img class='img' src='img/jim.png'>");
    $("div.output").append("<p>Jim is a funny sportsman that enjoys healthy living.</p>");
  } else if(total >=50 && total <150){
    //you are dwight
    $("div.output").append("<h3>You are Dwight!</h3>");
    $("div.output").append("<img class='img' src='img/dwight.png'>");
    $("div.output").append("<p>Dwight is a follower who also has many surprising skills.</p>");
  } else if(total >=150){
    //you are michael
    $("div.output").append("<h3>You are Michael!</h3>");
    $("div.output").append("<img class='img' src='img/michael.png'>");
    $("div.output").append("<p>Michael is a person that has very little understanding of other peoples feelings or needs.</p>");
  } else{
    alert("You broke it!");
  }
  $("#button").hide
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const question1 = parseInt($("input:radio[name=question1]:checked").val());
    const question2 = parseInt($("input:radio[name=question2]:checked").val());
    const question3 = parseInt($("input:radio[name=question3]:checked").val());
    const totalValue = add(question1, question2, question3);
    showCharacter(totalValue);
  });
});

