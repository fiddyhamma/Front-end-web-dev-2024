const closedFace = document.querySelector('.emoji_closed_active');
const openFace = document.querySelector('.emoji_open');

// Add event listener here
closedFace.addEventListener("click", () => {
    openFace.style.display = "block";
    closedFace.style.display = "none";
  });

openFace.addEventListener("click", () => {
    closedFace.style.display ="block";
    openFace.style.display = "none";
})

// Using jquery
$(document).ready(function(){
    $(".emoji_closed_active").click(function(){
        $(".emoji_closed_active").hide();
        $(".emoji_open").show();
      });

    $(".emoji_open").click(function(){
      $(".emoji_open").hide();
      $(".emoji_closed_active").show();
    });
   
  });
