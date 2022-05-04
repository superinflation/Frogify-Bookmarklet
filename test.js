(function() {
  function start(){
    alert("aaaa");
  }
   var original = window.Frogify;

  var self = (window.Frogify = {
    add: add,
    noConflict: function() {
      window.Frogify = original;
      return self;
    }
  });
})();
