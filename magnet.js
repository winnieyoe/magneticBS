//LEFT SIDE: Make the list of words into an array, print it on the screen
let words = [];
let eachWord;

$.get('words.txt', function(data) {
  words = data.split("\n");
  words = words.filter(item => item); //remove empty element in array
  words = shuffle(words); //shuffle the order of words in array

  for (let i=0; i < words.length; i++){
    eachWord = "<span class='word' id='word" + i + "'>" + words[i] + "<span>"
    $("#allWords").append(eachWord);
  }
});

//Shuffle the order of the words in each reload
let shuffle = function (words) {
  let currentIndex = words.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = words[currentIndex];
    words[currentIndex] = words[randomIndex];
    words[randomIndex] = temporaryValue;
  }
  return words;
};

//RIGHT SIDE: Sentence
let popo = ["Hong", "Kong", "Police"]

$.each(popo, function(index, item){
  $("#sentence").append("<span class='popo'>" + item + " " + "<span>");
})

//Find out which word on left is selected, append to the right side if so
// let clicked = false;
let selectedWords = [];

$(document).ready(function(){
  $("span").click(
    function(){
      if ($(this).hasClass("clicked") == false){
        $(this).addClass("clicked");
        thisWord = $(this).text();
        $(this).appendTo("#sentence");
        // console.log(this.id, thisWord)
        // clicked = true;
      } else {
        $(this).removeClass("clicked");
        $(this).appendTo("#allWords");
        thisWord = $(this).text;
        // selectedWords.pop(thisWord);
        // clicked = false;
      }
    }
  )
  //Submit sentence
  $("#submit").on("click", function(){
     let all = document.querySelectorAll(".clicked");
      for(let i=0; i<all.length; i++){
        selectedWords.push(all[i].textContent);
      }
    console.log(selectedWords);
  });
})
