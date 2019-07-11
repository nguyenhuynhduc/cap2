var minE1,maxE1,minS2,maxS2,minE2,maxE2;
function chooseTimeEnd1($i) {
     minE1 = parseInt($i)+2;
     maxE1 = 18;
    select = document.getElementById('hourEnd1');
    select.innerHTML='';
    for ( var i = minE1;  i <= maxE1; i++ ) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }
}
function chooseTimeStart2($i) {
     minS2 = parseInt($i)+1;
     maxS2 = 19;
    select = document.getElementById('hourStart2');
    select.innerHTML='';
    for ( var i = minS2;  i <= maxS2; i++ ) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }
}
function chooseTimeEnd2($i) {
      minE2 = parseInt($i)+2;
      maxE2 = 21;
    select = document.getElementById('hourEnd2');
    select.innerHTML='';
    for ( var i = minE2;  i <= maxE2; i++ ) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }
}
