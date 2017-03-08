function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

function loadbalance(filename, filetype){


 
  var ticket = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
  var cdnhosts = ["1.css","1.css","2.css","3.css"];
  var cdnhoststickets = ["0","200","666","999","10000"];
  
  console.log(ticket);
  
  var whilelooper = 1
  var whilelimiter = (cdnhosts.length)+1;
  while ( whilelooper < whilelimiter) {
  
  if ((cdnhoststickets[whilelooper-1] < ticket) && (cdnhoststickets[whilelooper+1] > ticket)){
    
     loadjscssfile(cdnhosts[whilelooper], "css");
     console.log("WAAAAAAAAAAAA")
     whilelooper = 3000000
   }
  
  console.log("XXXXXXXXXXXXXXXXXXXXXXXX")
  console.log(whilelooper)
  console.log(cdnhoststickets[whilelooper-1])
  console.log(cdnhoststickets[whilelooper])
  console.log(cdnhoststickets[whilelooper+1])
  whilelooper++
  }



}

 
loadbalance("1.css", "css") //dynamically load and add this .js file.
