date = ["epoch","1 year","6 months","3 months","1 month", "15 days","7 days","3 days","1 day","6 hours"]
small = [0,1,3,5,10,20,50,100,500,1000]
big = [0,1,3,5,10,20,50,100,500,1000]
language = []
forked = true
size = ["0kb","1kb","10kb","100kb","1mb","5mb","20mb","100mb","500mb","1gb"]
query = ""

$('document').ready(function() {
  $('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
      var $container = $(this).parent(),
      g = 255 - 127 + leftValue,
      r = 255 - g,
      b = 0;
      $container.find('.leftLabel').text(leftValue);
      $(this).find('.bar').css('background', 'rgb(' + [r, g, b].join(',') + ')');
    }
  });
});
