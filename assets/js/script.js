window.onload = function() {

    // Pick up on element from canvas by ID
    let area = document.getElementById('area');
    //Let the area contxt to 2D
    let contx = area.getContext("2d");

    // Score Board
    let poits = document.getElementById('poits');
    let poiti = 0;


    document.addEventListener("keydown", keyPush);

    const easy = document.getElementById('easy');
    const medium = document.getElementById('medium');
    const hard = document.getElementById('hard');

    setInterval(game, 70);

    //  How much the snake grow up with the poits
    const speed = 1;

    // Inicial speed
    let spx = 0;
    let spy = 0;

    // Started poit 
    let stx = 10;
    let sty = 15;

    // Point size
    const psz = 20;

    // Quantity of poits
    const qtp = 20;

    // Started mouse point
    let mousex = 15;
    let mousey = 15;

    // Array for the snake tail
    let tail = [];

    function game() {

        stx += spx;
        sty += spy;

        // For snake control on the boards rps
        if (stx < 0) {
            sty = qtp-1;
        }
        if (stx > qtp-1) {
            sty = 0;
        }
        if (stx < 0) {
            sty = qtp-1;
        }
        if (stx > qtp-1) {
            sty = 0;
        }

        
        contx.fillStyle ="#111D4A";
        // javascript contex.fillRect (x, y, = altura, largura)
        contx.fillRect(0, 0, area.width, area.height);
        
        contx.fillStyle = "#EA2B1F";
        contx.fillRect(mousex * psz, mousey * psz, psz, psz, 2, 2);

        // For ([inicialExpretion]; [condition]; [increment]) declaration
        for (let i = 0; i < tail.length; i++) {
            contx.fillStyle ="green"
            contx.stokeStyle ="green"
            contx.fillRect(tail[i].x * psz, tail[i].y * psz, psz, psz);
            contx.strokeRect(tail[i].x * psz, tail[i].y * psz, psz, psz);
            if (tail[i].x == stx && tail[i].y == sty) {
                spx = spy = 0;
                taile = 2;
                poiti = 0;
            }
        }

        tail.push({x: stx, y: sty})

        while (tail.length > taile) {
            tail.shift()
        }

        if (mousex==stx && mousey==sty){
            taile++
            mousex = Math.floor(Math.random() * qtp)
            mousey = Math.floor(Math.random() * qtp)

            poits.innerHTML = ++poiti
        }

    }

    window.addEventListener("keydown", function (e) {
        // Space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);

      let lastKeyPressed = ""

      function keyPush(e) {
          switch (e.keyCode) {
              case 37: // Left
                  if (lastKeyPressed != "right") {
                      spx = -speed;
                      spy = 0;
                      lastKeyPressed = "left";
                  }
                  break;
              case 38: // up
                  if (lastKeyPressed != "down") {
                      spx = 0;
                      spy = -speed;
                      lastKeyPressed = "up";
                  }
                  break;
              case 39: // right
                  if (lastKeyPressed != "left") {
                      spx = speed;
                      spy = 0;
                      lastKeyPressed = "right";
                  }
                  break;
              case 40: // down
                  if (lastKeyPressed != "up") {
                      spx = 0;
                      spy = speed;
                      lastKeyPressed = "down";
                  }
                  break;
          }
      }

};