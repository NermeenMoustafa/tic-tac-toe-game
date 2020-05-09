var input11=document.getElementById("input11");
var input12=document.getElementById("input12");
var input13=document.getElementById("input13");
var input21=document.getElementById("input21");
var input22=document.getElementById("input22");
var input23=document.getElementById("input23");
var input31=document.getElementById("input31");
var input32=document.getElementById("input32");
var input33=document.getElementById("input33");

var win=document.getElementById('winner');

// var inputs=document.getElementsByTagName("input");

input11.onkeyup=function(){
  if( input11.value == input12.value && input11.value == input13.value && input11.value != "" && ( input11.value == "x" || input11.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input11.value+"'";
  // for(var i=0 ; i<inputs.length ; i++){
  //   // if(inputs[i].type=="text")
  //   inputs[i].value="";
  // }
  }
  if( input11.value == input22.value && input11.value == input33.value && input11.value !="" && ( input11.value == "x" || input11.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input11.value+"'";
  }
  if( input11.value == input21.value && input11.value == input31.value && input11.value !="" && ( input11.value == "x" || input11.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input11.value+"'";
  }
}

input12.onkeyup=function(){
  if( input11.value == input12.value && input11.value == input13.value && input12.value != "" && ( input12.value == "x" || input12.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input12.value+"'";
  }
  if( input12.value == input22.value && input12.value == input32.value && input12.value != "" && ( input12.value == "x" || input12.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input12.value+"'";
  }

}

input13.onkeyup=function(){
  if( input11.value == input12.value && input11.value == input13.value && input13.value != "" && ( input13.value == "x" || input13.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input13.value+"'";
  }
  if( input13.value == input22.value && input13.value == input31.value && input13.value != "" && ( input13.value == "x" || input13.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input13.value+"'";
  }
  if( input13.value == input23.value && input13.value == input33.value && input13.value != "" && ( input13.value == "x" || input13.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input13.value+"'";
  }
}

input21.onkeyup=function(){
  if( input21.value == input22.value && input21.value == input23.value && input21.value != "" && ( input21.value == "x" || input21.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input21.value+"'";
  }
  if( input11.value == input21.value && input11.value == input31.value && input21.value != "" && ( input21.value == "x" || input21.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input21.value+"'";
  }
}

input22.onkeyup=function(){
  if( input21.value == input22.value && input21.value == input23.value && input22.value != "" && ( input22.value == "x" || input22.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input22.value+"'";
  }
  if( input11.value == input22.value && input11.value == input33.value && input22.value != "" && ( input22.value == "x" || input22.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input22.value+"'";
  }
  if( input13.value == input22.value && input13.value == input31.value && input22.value != "" && ( input22.value == "x" || input22.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input22.value+"'";
  }
  if( input12.value == input22.value && input12.value == input32.value && input22.value != "" && ( input22.value == "x" || input22.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input22.value+"'";
  }
}

input23.onkeyup=function(){
  if( input21.value == input22.value && input21.value == input23.value && input23.value != "" && ( input23.value == "x" || input23.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input23.value+"'";
  }
  if( input13.value == input23.value && input13.value == input33.value && input23.value != "" && ( input23.value == "x" || input23.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input23.value+"'";
  }
}

input31.onkeyup=function(){
  if( input31.value == input32.value && input31.value == input33.value && input31.value != "" && ( input31.value == "x" || input31.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input31.value+"'";
  }
  if( input13.value == input22.value && input13.value == input31.value && input31.value != "" && ( input31.value == "x" || input31.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input31.value+"'";
  }
  if( input11.value == input21.value && input11.value == input31.value && input31.value != "" && ( input31.value == "x" || input31.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input31.value+"'";
  }
}

input32.onkeyup=function(){
  if( input31.value == input32.value && input31.value == input33.value && input32.value != "" && ( input32.value == "x" || input32.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input32.value+"'";
  }
  if( input12.value == input22.value && input12.value == input32.value && input32.value != "" && ( input32.value == "x" || input32.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input32.value+"'";
  }
}

input33.onkeyup=function(){
  if( input31.value == input32.value && input31.value == input33.value && input33.value != "" && ( input33.value == "x" || input33.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input33.value+"'";
  }
  if( input11.value == input22.value && input11.value == input33.value && input33.value != "" && ( input33.value == "x" || input33.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input33.value+"'";
  }
  if( input13.value == input23.value && input13.value == input33.value && input33.value != "" && ( input33.value == "x" || input33.value == "o" ) ){
    win.innerHTML="You Win!<br/>Player '"+input33.value+"'";
  }
}
