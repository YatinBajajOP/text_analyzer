function formdata(){
let data1= document.getElementById("data").value;
let search1 = document.getElementById("search").value;
let freq = 0;

let words = data1.split(" ");
console.log(words);
    for (let i = 0; i < words.length; i += 1) {
      if(search1 == words[i]) {
          freq = freq + 1;
      }
    }
    let count = words.length;
    document.getElementById("output").innerHTML = "<B>The data entered is:</B>"+data1+"<br><B> and the number of words are :</B>"+count+"<br>";
        if(freq!=0){
            document.getElementById("first").innerHTML = "<B>The word entered has occured </B>" + freq + " times.";
        }
        else{
            document.getElementById("first").innerHTML = "<B>The word entered is not found!</B>";
        }

    
}

