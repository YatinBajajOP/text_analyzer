
function formdata(){
var data1= document.getElementById("data").value;
var search1 = document.getElementById("search").value;
var freq = 0;

//number of words calculate
//searching with frequency
//
var words = data1.split(" ");
console.log(words);
    for (var i = 0; i < words.length; i += 1) {
      if(search1 == words[i]) {
          freq = freq + 1;
      }
    }

    var count = words.length;
    document.writeln("<h1>Confirmation Page</h1><br>");
    document.writeln("Thank you for completing this form.<br><br>");
    document.writeln("the data entered is "+data1+"<br> and the number of words are "+count+"<br>");
    if(freq!=0){
        document.writeln("The word entered has occured "+freq+" times.");
    }
    else{
        document.writeln("Not found!");
    }
}

