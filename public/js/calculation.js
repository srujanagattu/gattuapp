function verify(){
    var ncheck=document.getElementById("example-text-input").value.toLowerCase();
  
var fname = verifyname(ncheck);
  
    document.getElementById("comment").innerHTML="Vowel count in Name:"+fname;
    document.getElementById("reset").innerHTML="Clear Value";
   
    return false;
    }
 function verifyname(ncheck){
        var fname=0;
        if((ncheck.length === 0 )|| ncheck === null ||/[\d\s@!#$%^&*().,":;{}=+-_]/.test(ncheck)){
          alert("Name should not contain special characters,numbers and should not be empty");
          throw Error('The given argument is not a valid name');}
          else{
        for(var i=0;i<ncheck.length;i++){
            if(ncheck[i]=='a'||ncheck[i]=='i'||ncheck[i]=='e'||ncheck[i]=='u'||ncheck[i]=='o'){
                fname++;
            }
        }
    }
    return fname;
}
