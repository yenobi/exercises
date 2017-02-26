$(function(){
  var html = $('#template').html();
  var data = {
    name: 'Кошман Сергей Константинович',
    description: 'Больше не студент Харьковского Национального Медицинского Университета',
    heading: 'Хочу учить фронт-енд, потому что:',
    reason1: 'В медицине нельзя без денег или связей;',
    reason2: 'Это интересно и увлекательно;',
    reason3: 'Это прибыльно;',
    reason4: 'Это перспективно.'
  };
  var content = tmpl(html, data);
  $('#container').append(content);
});
