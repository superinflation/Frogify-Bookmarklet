javascript: (function() {
  var url = "https://i.pinimg.com/originals/4d/73/f0/4d73f0cec466f102a91e336db64cc7f5.jpg";
  document.querySelector("title").innerHTML = "Ribbit"; 
  var images = document.querySelectorAll("img"); 
  for (var i = 0; i < images.length; i++) {    
    images[i].src = url;  images[i].srcset = url
  }
  var links = document.querySelectorAll("link");  
  for (var i = 0; i < links.length; i++) {    
    if (["mask-icon", "icon", "shortcut icon"].includes(links[i].rel)) {      
      links[i].href = url;  
    }  
  } 
  var divs = document.querySelectorAll("div"); 
  for(var i = 0; i < divs.length; i++){ 
    divs[i].style.fontFamily = "Comic Sans MS", "Comic Sans", cursive;
  }
  var meta = document.querySelectorAll("meta");
  alert("aa");
  for(var i = 0; i < meta.length; i++){
    if(meta[i].itemprop == "image"){
      meta[i].content = url;
    }
  }
})();
