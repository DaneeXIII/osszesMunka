function updateClock() {
    var now = new Date();
    var time = addZero(now.getHours()) + ':' + addZero(now.getMinutes()) + ":" + addZero(now.getSeconds());
    var date = addZero(now.getUTCFullYear()) + '.' + (addZero(now.getUTCMonth() + 1)) + "." + addZero(now.getUTCDate());
  
    document.getElementById('ido').innerHTML = [date, time].join(' / ');
  }
  
  setInterval(updateClock, 1000);
  updateClock();
