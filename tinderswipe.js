document.body.addEventListener('nopecard', function(ev) {
     console.log(ev.detail);
  });
  document.body.addEventListener('yepcard', function(ev) {
     console.log(ev.detail);
  });
  document.body.addEventListener('deckempty', function(ev) {
     console.log(ev.detail);
  });
  document.body.addEventListener('cardchosen', function(ev) {
     console.log(ev.detail);
  });
  document.body.addEventListener('nopecard', function(ev) {
    var container = ev.detail.container;
    var label = container.querySelector('.nopes');
    if (label) {
      var nopes = +container.nopes || 0;
      nopes++;
      container.nopes = nopes;
      label.innerHTML = container.nopes;
    }
  });
  document.body.addEventListener('yepcard', function(ev) {
    var container = ev.detail.container;
    var label = container.querySelector('.yays');
    if (label) {
      var yeps = +container.yeps || 0;
      yeps++;
      container.yeps = yeps;
      label.innerHTML = container.yeps;
    }
  });
  document.body.addEventListener('deckempty', function(ev) {
    var container = ev.detail.container;
    var list = container.querySelector('.cardlist');
    var out = '<li class="card current">#1</li>';
    for (var i = 2; i < 6; i++) {
      out += '<li class="card">#' + i + '</li>';
    }
    list.innerHTML = out;
  });
