<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>loadbalancer test</title>
    


<script type="text/javascript">
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


 
  var ticket = Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
  var cdnhosts = ["http://cdn1.test.test/","http://cdn1.test.test/","http://cdn2.test.test/","http://cdn3.test.test/"];
  var cdnhoststickets = ["0","3333 ","6666","9999","100000"];
  
  console.log(ticket);
  
  var whilelooper = 1
  var whilelimiter = (cdnhosts.length)+1;
  while ( whilelooper < whilelimiter) {
  
  if (cdnhoststickets[whilelooper] > ticket){
    
     loadjscssfile(cdnhosts[whilelooper] + filename, "css");
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

</script>

  </head>
  <body>
  asdadsuhads9huhuoadsh
  </body>



</html>
