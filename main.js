blackT.onclick = function(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    ChangeBtn.style.border = '1px solid white';
    random.style.border = '1px solid white';
}

whiteT.onclick = function(){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    ChangeBtn.style.border = '1px solid black';
    random.style.border = '1px solid black';
}
let click = 0;
ChangeBtn.onclick = function(){
    if(click === 0){
     palitra.style.display = 'flex';
        click = 1;
    } else if (click === 1){
        palitra.style.display = 'flex';
        click = 0;
    }
    palitra.style.display = 'flex';
    
}

red.onclick = function(){
    txt.style.color = 'red';
    palitra.style.display = 'none'
    click = 0;
}
green.onclick = function(){
    txt.style.color = 'green';
    palitra.style.display = 'none'
    click = 0;
}
blue.onclick = function(){
    txt.style.color = 'blue';
    palitra.style.display = 'none'
    click = 0;
}
yellow.onclick = function(){
    txt.style.color = 'yello';
    palitra.style.display = 'none'
    click = 0;
}
pink.onclick = function(){
    txt.style.color = 'pink';
    palitra.style.display = 'none'
    click = 0;
}
orange.onclick = function(){
    txt.style.color = 'orange';
    palitra.style.display = 'none'
    click = 0;
}

random.onclick = function() {
  const randoColor = 
      Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#'+randoColor;
}







