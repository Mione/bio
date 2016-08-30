(function () {
  'use strict';
  var leftWriter = document.querySelector('.left-writer');
  var rightWriter = document.querySelector('.right-writer');

  function write(element, string, skip, callback) {
    var count = 0;
    var code = '';
    var style = '';
    var interval;
    var isPaused = false;
    var delayTime = 1000;
    var intervalTime = 30;

    if (!element) return;

    if (skip) {
      delayTime = 1;
      intervalTime = 1;
    }
    if(!string) {
      alert('Unfortunately this browser sux, please use latest Chrome or FF');
      return;
    }
    interval = setInterval(function () {

      var currentChar = string[count];

      if (count === string.length) {
        clearInterval(interval);
        return callback();
      }

      if (isPaused) return;

      switch (currentChar) {
        case '|':
          if (code.length) {
            try {
              eval(code.replace('$', ''));
            } catch (er) {
              console.log(er);
              clearInterval(interval);
              return;
            }
          }

          if (style.length) {
            document.styleSheets[0].insertRule(style.replace('@', ''),0);
          }

          code = '';
          style = ''
          count = count + 1;
          return;
        case '^':
          isPaused = true;
          setTimeout(function () {
            isPaused = false;
          }, delayTime);
          count = count + 1;
          return;
        case '$':
          code = code + currentChar;
          count = count + 1;
          return;
        case '@':
          style = style + currentChar;
          count = count + 1;
          return;
      }

      if (style !== '') {
        style = style + currentChar;
      }

      if (code !== '') {
        code = code + currentChar;
      }

      element.textContent = element.textContent + currentChar;
      count = count + 1;
    }, intervalTime);
  }

  write(leftWriter, window.template1, false, function () {
    write(rightWriter, window.template2, true, function () {
      write(rightWriter, window.template3, false, function () {
        console.log('done!');
      })
    })
  });

} ());