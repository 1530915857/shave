var btn = document.getElementById('button');
btn.addEventListener('click', function() {
  var text = document.getElementById('demo-text'),
      hasShave = text.querySelector('#demo-text .js-shave');
  if (hasShave !== null) {
    shave(text, 1000);
    btn.textContent = 'Click to \'shave\' ✁';
    return;
  }
  shave(text, 80, {character: '...🐔 (Shave works!)'});
  btn.textContent = 'Click to \'unshave\' ⏎';
  return;
}, false);
