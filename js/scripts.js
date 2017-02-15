 // twitter
 !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0], p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id)){js=d.createElement(s);
  js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
  fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs'); 
   
 //facebook
 (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
  
 // Smooth scrolling
 $(document).ready(function(){
    var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });
  
// Stellar- $.stellar();

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $('#button').on('click', function() {
   var comment = $('#message-box').val();
   $('#visible-comment').html(comment);
   $('#message-box').hide();  
  return false;
});

 //textarea background
$("#message-box").on("keyup", function() {
        console.log("keyup happened");          
 var charCount = $("#message-box").val().length;
  console.log(charCount);   
 $("#char-count").html(charCount);
 if(charCount > 50) { 
    $("#char-count").css("color", "red");
} else {
    $("#char-count").css("color", "black");
};
var comment = $("#message-box").val();
  if(comment ==="") { 
    $("#message-box").css("border", "2px solid red"); 
  } else {
    $("#message-box").css("color", "black");
  };
 });  
// work section
  //console.log(works);
  for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-md-3 col-xs-12'>\
     <a href='" + works[i].url + "' class='work-img'>\
       <img class='img-responsive' src='" + works[i].pic + "'>\
       <span class='info'><p class='proj-title'>Title:</p> " + works[i].title + "</span>\
       </a>\
    </div>\
  ");
   var images = $("#work img");
   if(i%2 === 0){
     $(images[i]).css("border", "2px solid DodgerBlue");
  }  else {
     $(images[i]).css("border", "2px solid salmon");
  };
};
 $(".work-img").mouseenter(function(){
  $(".info", this).show();
})
  .mouseleave(function(){
  $(".info", this).hide();
});
  
});

 //var map;
   //function initMap() {
     //map = new google.maps.Map(document.getElementById('map'), {
      // center: {lat: 29.9902, lng: -95.3368},
      // zoom: 10
  //});
  //}
    
  function initMap() {
  var myLatLng = {lat: 29.9902, lng: -95.3368};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'IAH'
  });
}
