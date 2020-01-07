//FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyC6NcP8kFHNB2SuBKkXV980-uufg2rdI14",
    authDomain: "magneticbs-hk.firebaseapp.com",
    databaseURL: "https://magneticbs-hk.firebaseio.com",
    projectId: "magneticbs-hk",
    storageBucket: "magneticbs-hk.appspot.com",
    messagingSenderId: "1051793330330",
    appId: "1:1051793330330:web:9474d3dcc03a78868b0f23",
    measurementId: "G-EDVW101NCL"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// console.log(firebase);

var database = firebase.database();
var result = database.ref("result");
var userData = {
  "sentence": "",
};


//WORDLIST: Make the list of words into an array, print it on the screen
let words = [];
let eachWord;

$.get('words-noDup.txt', function(data) {
  words = data.split("\n");
  words = words.filter(item => item); //remove empty element in array
  words = shuffle(words); //shuffle the order of words in array

  // console.log("length", words.length)
  for (let i=0; i < words.length; i++){
    eachWord = "<span class='word' id='word" + i + "'>" + words[i] + "<span>"
    $("#allWords").append(eachWord);
  }

  //Find duplicates
  // find_dup(words);
  // console.log(find_dup(words));

  //Rotate each magnet by a random degree
  $(".word").each(function(){
    var rNum = (Math.random()*10)-6;
      var x = (Math.random()*10)-5;
      var y = (Math.random()*10)-5;
    $(this).css({
      '-webkit-transform': 'rotate('+rNum+'2deg)',
      '-moz-transform': 'rotate('+rNum+'2deg)',
        'top': x,
        'left': y,
    });
  });
});

function find_dup(arra1) {
        var object = {};
        var result = [];

        arra1.forEach(function (item) {
          if(!object[item])
              object[item] = 0;
            object[item] += 1;
        })

        for (var prop in object) {
           if(object[prop] >= 2) {
               result.push(prop);
           }
        }
        return result;
}

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

//MAKE SENTENCE
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
    // console.log("selected", selectedWords);
    userData.sentence = selectedWords;
    result.push(selectedWords);
  });
})

function errData(err) {
  // console.log("Error");
  // console.log(err);
}
