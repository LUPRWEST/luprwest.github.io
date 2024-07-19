player.onmousedown = function(event) {

    let shiftX = event.clientX - player.getBoundingClientRect().left;
    let shiftY = event.clientY - player.getBoundingClientRect().top;
  
    player.style.position = 'absolute';
    player.style.zIndex = 1000;
    document.body.append(player);
  
    moveAt(event.pageX, event.pageY);
  
    // 초기 이동을 고려한 좌표 (pageX, pageY)에서
    // 플레이어을 이동.
    function moveAt(pageX, pageY) {
      player.style.left = pageX - shiftX + 'px';
      player.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // mousemove로 플레이어을 움직임.
    document.addEventListener('mousemove', onMouseMove);
  
    // 플레이어을 드롭하고, 불필요한 핸들러를 제거.
    player.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      player.onmouseup = null;
    };
  
  };
  
  player.ondragstart = function() {
    return false;
  };