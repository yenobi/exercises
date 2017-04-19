var button = document.getElementById('button');
button.addEventListener('click', loadPhones);

// function that send request
function loadPhones() {
  console.log('click');

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'phones.json', true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    button.innerHTML = 'Готово!';

    if (xhr.status != 200) {
      // обработать ошибку
      console.log(xhr.status + ': ' + xhr.statusText);
    }
  }

  xhr.send();

  xhr.onload = function() {
    // response is array with objects, which has field "name"
    // need this field
    var response = JSON.parse(xhr.responseText);

    var container = document.getElementById('container');

    for (var i =0; i < response.length; i++) {
      var phoneName = document.createElement('h3');
      phoneName.innerHTML = response[i].name;
      container.appendChild(phoneName);
    }

  }

  button.innerHTML = 'Загружаю...';
  button.disabled = true;
}
