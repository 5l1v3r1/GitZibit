date = ["epoch","1 year","6 months","3 months","1 month", "15 days","7 days","3 days","1 day","6 hours"]
small = [0,1,3,5,10,20,50,100,500,1000]
big = [0,1,3,5,10,20,50,100,500,1000]
language = []
forked = true
size = ["0kb","1kb","10kb","100kb","1mb","5mb","20mb","100mb","500mb","1gb"]
query = ""

$(function() {
   $( ".slider-ui" ).slider({
     value:5,
     min: 0,
     max: 10,
     step: 1,
   });
 });

 $(function() {
  $( "#stars-ui" ).slider({
    range: true,
    min: 0,
    max: 9,
    values: [4, 6]
  });
});

$(function() {
  $( "#language-ui" ).menu();
});

$(function() {
  $("#newness").val("< " + date[$( "#newness-ui" ).slider( "value")+1]);
  $("#newness-ui").slider({
    slide: function( event, ui ) {
      $("#newness").val("< " + date[$( "#newness-ui" ).slider( "value")]);
      console.log($( "#newness-ui" ).slider( "value"));
    }
  })
})

function resizeInput() {
    $(this).attr('size', $(this).val().length);
}
