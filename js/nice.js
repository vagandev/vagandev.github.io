var text = $('.nice').text(),
    textArr = text.split('');

$('.nice').html('');

$.each(textArr, function(i, v){
  if(v == ' '){$('.nice').append('<span class="space"></span>');}
  $('.nice').append('<span>'+v+'</span>');
})
