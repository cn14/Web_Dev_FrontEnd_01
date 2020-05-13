$(document).ready(function(){
    for( var i =0 ;i<4;i++){
      $(`#readtxt${i}`).hide();
    }
    $('a').click(function() { 
      var id = $(this).attr('id');
      console.log(id);
      for(var i=0;i<4;i++){
        if(id == (`readmore${i}`)){
          $(`#readtxt${i}`).toggle("slow");
          $(`#readmore${i}`).text($(`#readmore${i}`).text() == 'Read more' ? 'Read Less' : 'Read more');
          return false;
        }
      }
    });
    // form validation
    $('#subscribeForm').validate({
      rules:{
        email:{
          required: true,
          email:true
      }
    },
    messages:{}
  });

  // jquery for toggleing news

});