(function () {

 const { remote } = require('electron');
 const { BrowserWindow } = remote;

 function init() {
      document.getElementById("min-btn").addEventListener("click", function (e) {
           var window = BrowserWindow.getFocusedWindow();
           window.minimize();
      });

      document.getElementById("max-btn").addEventListener("click", function (e) {
           var window = BrowserWindow.getFocusedWindow();
           if(window.isMaximized()){
             window.unmaximize();
              document.getElementById("max-btn").setAttribute("class","btn btn-primary btn-lg glyphicon glyphicon-unchecked");
              document.getElementById("max-btn").blur();
           }else{
             window.maximize();
             document.getElementById("max-btn").setAttribute("class","btn btn-primary btn-lg glyphicon glyphicon-resize-small");
             document.getElementById("max-btn").blur();
           }
      });

      document.getElementById("close-btn").addEventListener("click", function (e) {
           var window = BrowserWindow.getFocusedWindow();
           window.close();
      });
 };

 document.onreadystatechange = function () {
      if (document.readyState == "complete") {
           init();
      }
 };

})();
