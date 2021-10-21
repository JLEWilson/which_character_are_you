function add(val1, val2, val3) {
  const total = val1 + val2 + val3;
  return total;
}
function showCharacter(total) {
  if (total < 10) {
    //you are pam
  } else if( total >= 10 && total < 50){
    //you are jim
  } else if(total >=50 && total <150){
    //you are dwight
  } else if(total >=150){
    //you are michael
  } else{
    alert("You broke it!");
  }
}
/*
pam < 10  
jim 10-50
dwight 50-150
michael + 150+*/

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
