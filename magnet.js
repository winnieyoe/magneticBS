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

//Firebase Authentication
firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
  } else {
    // User is signed out.
  }
});

var database = firebase.database();
var userData = {
  "sentence": ""
};


//BUTTON to go to create sentence section
let startB = document.getElementById("arrow");
let introDiv = document.getElementById("topDiv");
let createDiv = document.getElementById("createDivWrapper");

startB.addEventListener("click", function() {
  introDiv.style.display = "none";
  createDivWrapper.style.display = "block";
  $('html, body').scrollTop($('#createDivWrapper').offset().top);
  return false
})


//WORDLIST: Make the list of words into an array, print it on the screen
// let words = [];
let eachWord;

// $.get('words-noDup.txt', function(data) {
//   words = data.split("\n");
//   words = words.filter(item => item); //remove empty element in array
//   words = shuffle(words); //shuffle the order of words in array
//
//   console.log(words);
//   // console.log("length", words.length)
//   for (let i = 0; i < words.length; i++) {
//     eachWord = "<span class='word' id='word" + i + "'>" + words[i] + "</span>"
//     $("#allWords").append(eachWord);
//   }
//
//   //Rotate each magnet by a random degree
//   $(".word").each(rotate);
//   //Find duplicates
//   // find_dup(words);
//   // console.log(find_dup(words));
//
//   //METHOD SECTION
//   let n = 11;
//   let sampleWords = words.slice(0, n);
//   for (let i = 0; i < sampleWords.length; i++) {
//     sampleWord = "<span class='sample'>" + sampleWords[i] + "</span>"
//     $("#sample").append(sampleWord);
//
//     // $.each(sampleWords, function(index, item) {
//     //   $(this).delay(500*(index+1)).fadeIn(1000);
//     //   $(".s").each(rotate);
//     // })
//   }
//  //Sample words fade in one by one
//   $('.sample').each(function(i) {
//     $(this).delay(200*(i+1)).fadeIn(100);
//     $(".sample").each(rotate);
// });
//   // console.log(sampleWords)
// });

//Word using array in js
let words = "lives,petrol,possession,top,shows,arrest,condemns,has,rises,situation,criminal,one,says,allows,incident,protester,needs,metal,point,weekend,man,goes,trains,sounds,search,happens,call,takes,targets,gives,hand,stakeholders,guns,seems,reports,appears,press,operation,does,sorts,prints,works,need,depends,is,gets,means,ruins,scene,resources,lies,fights,turns,place,commits,an,duty,claims,trips,appeal,hospital,gas,feels,opens,includes,plainclothes,way,room,police,question,lampposts,talk,brakes,crime,emergency,from,ages,burns,breaks,helmets,injunction,bus,comes,officer,figures,demonstration,use,case,regards,station,officers,international,rows,work,falls,person,airport,information,runs,wants,bones,force,attack,conference,new,acts,outfits,time,report,enforcement,tell,ends,exists,make,thank,approaches,site,law,serves,some,hope,investigation,gun,life,total,safety,laser,deployments,day,asks,affects,carries,night,irresponsible,fire,part,looks,number,court,organizer,protect,safe,video,mean,whole,recent,traffic,able,rounds,free,Music,relevant,fact,old,small,legal,violent,express,action,black,matter,basic,decision,road,kind,entire,other,major,evidence,fake,same,brief,letter,security,objection,center,back,involves,sorry,purpose,machines,aged,deal,damage,short,personal,something,true,open,making,requires,violence,reporter,male,like,district,second,radical,government,home,unit,cause,apart,young,professional,makes,area,bomb,serious,responsible,baton,last,weapon,online,dangerous,treatment,local,stay,danger,justice,maximum,line,tear,object,female,medical,respect,own,good,event,certain,peaceful,everyone,few,such,charge,reason,freedom,necessary,risk,main,woman,public,illegal,important,huge,clarify,large,conduct,training,level,many,protest,injury,further,ordinance,face,stress,family,school,measures,concerned,high,great,threat,social,rearms,example,false,group,choice,internet,possible,acceptable,rest,street,front,batches,innocent,detention,next,ground,clear,relation,control,unlawful,fair,later,close,prevent,various,particular,subject,national,difficult,human,multiple,reasonable,round,empty,procession,bodily,Chinese,appropriate,closed,common,assessment,individual,sufficient,premises,simple,internal,assault,corrosive,strict,society,passes,happy,caused,perfect,orderly,disorderly,political,specific,central,anyone,respond,several,riotous,chaotic,normal,lawful,yellow,ordinary,ongoing,different,available,organized,effective,previous,sexual,present,physical,morning,initial,suspect,liable,extreme,rational,lethal,proper,deadly,actual,future,similar,a,about,the,after,to,against,for,before,are,behind,of,below,at,during,but,regarding,by,since,into,through,on,towards,off,within,out,until,over,under,with,except,upon,excluding,than,besides,in,between,as,across,amid,around"

words = words.split(",");
words = words.filter(item => item); //remove empty element in array
words = shuffle(words); //shuffle the order of words in array
// console.log("length", words.length)
for (let i = 0; i < words.length; i++) {
  eachWord = "<span class='word' id='word" + i + "'>" + words[i] + "</span>"
  $("#allWords").append(eachWord);
}

//Rotate each magnet by a random degree
$(".word").each(rotate);
//Find duplicates
// find_dup(words);
// console.log(find_dup(words));

//METHOD SECTION
let n = 11;
let sampleWords = words.slice(0, n);
for (let i = 0; i < sampleWords.length; i++) {
  sampleWord = "<span class='sample'>" + sampleWords[i] + "</span>"
  $("#sample").append(sampleWord);

  // $.each(sampleWords, function(index, item) {
  //   $(this).delay(500*(index+1)).fadeIn(1000);
  //   $(".s").each(rotate);
  // })
}
//Sample words fade in one by one
$(window).scroll(function() {
  let y = $(window).scrollTop();

  if (y > 100) {
    $('.sample').each(function(i) {
      $(this).delay(200 * (i + 1)).fadeIn(100);
      $(".sample").each(rotate);
    });
  }
})

function find_dup(arra1) {
  var object = {};
  var result = [];

  arra1.forEach(function(item) {
    if (!object[item])
      object[item] = 0;
    object[item] += 1;
  })

  for (var prop in object) {
    if (object[prop] >= 2) {
      result.push(prop);
    }
  }
  return result;
}

//Shuffle the order of the words in each reload
function shuffle(words) {
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
// let shuffle = function(words) {
//   let currentIndex = words.length;
//   let temporaryValue, randomIndex;
//
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     // And swap it with the current element.
//     temporaryValue = words[currentIndex];
//     words[currentIndex] = words[randomIndex];
//     words[randomIndex] = temporaryValue;
//   }
//   return words;
// };

//MAKE SENTENCE
let popo = ["Hong", "Kong", "Police"]

$.each(popo, function(index, item) {
  $("#sentence").append("<span class='popo'>" + item + "</span>");
  //Rotate popo
  $(".popo").each(rotate);
})

//Rotate function

function rotate() {
  var rNum = (Math.random() * 10) - 6;
  var x = (Math.random() * 10) - 5;
  var y = (Math.random() * 10) - 5;
  $(this).css({
    '-webkit-transform': 'rotate(' + rNum + '2deg)',
    '-moz-transform': 'rotate(' + rNum + '2deg)',
    'top': x,
    'left': y,
  });
}

//Find out which word on left is selected, append to the right side if so
let selectedWords = [];

// THIS WILL ALLOW YOU TO CLICK ON
// DYNAMICALLY CREATED HTML ELEMENTS O
// IN #SENTENCE !!!
$('div#sentence').on("click", "span", function(){
  console.log("blugh")
      if ($(this).hasClass("clicked") == true) {
        console.log("yes")
        if($("#sentence").find(".clicked").length > 0){
          // $("#sentence:last").remove();
          $(this).remove();
        }
}})

$(document).ready(function() {
  $(".word").on("click",function() {
      if ($(this).hasClass("clicked") == false) {
        $(this).addClass("clicked");
        thisWord = $(this).text();
        $(this).clone().appendTo("#sentence");

        if($("#allWords").find(".clicked").length > 0){
          $(this).addClass("greyOut");
          $(this).removeClass("clicked");
        }
        // console.log(this.id, thisWord)
      } else {
        // console.log("yes")
        // if($("#sentence").find(".clicked").length > 0){
        //   $("#sentence:last").remove();
        }
        // $(this).removeClass("clicked");
        // $(this).appendTo("#allWords");
        // thisWord = $(this).text();
        // selectedWords.pop(thisWord);
      })
    })

  // $(".word").click(
  //   function() {
  //     if ($(this).hasClass("clicked") == false) {
  //       $(this).addClass("clicked");
  //       thisWord = $(this).text();
  //       $(this).appendTo("#sentence");
  //       console.log(this.id, thisWord)
  //       // clicked = true;
  //     } else {
  //       $(this).removeClass("clicked");
  //       $(this).appendTo("#allWords");
  //       thisWord = $(this).text;
  //       // selectedWords.pop(thisWord);
  //       // clicked = false;
  //     }
  //   }
  // )
  //Submit sentence
  var ref = database.ref("result");
  ref.on("value", gotData, errData);

  $("#submit").on("click", function() {
    let all = document.querySelectorAll(".clicked");
    for (let i = 0; i < all.length; i++) {
      selectedWords.push(all[i].textContent);
    }
    // console.log("selected", selectedWords);
    userData.sentence = selectedWords;
    ref.push(selectedWords);
  });

  //Submit Sentence mobile
  $("#submit-mobile").on("click", function() {
    let all = document.querySelectorAll(".clicked");
    for (let i = 0; i < all.length; i++) {
      selectedWords.push(all[i].textContent);
    }
    // console.log("selected", selectedWords);
    userData.sentence = selectedWords;
    ref.push(selectedWords);
    // ref.on("value", gotData, errData);
  });

//Submit Button
let rDiv = document.getElementById("resultDiv");
let creditDiv = document.getElementById("creditDiv");
let submitB = document.getElementById("submit");
let submitMobileB = document.getElementById("submit-mobile");

submitB.addEventListener("click", function() {
  rDiv.style.display = "block";
  creditDiv.style.display = "block"

  $('html, body').animate({
    scrollTop: $("#resultDiv").offset().top
  }, 1000)
})

submitMobileB.addEventListener("click", function() {
  rDiv.style.display = "block";
  creditDiv.style.display = "block"

  $('html, body').animate({
    scrollTop: $("#resultDiv").offset().top
  }, 1000)
})

//back home
let backDiv = document.getElementById("back");

backDiv.addEventListener("click", function() {
  location.reload();

  $(document).ready(function() {
    $(this).scrollTop(0);
  });
})



//VISUALIZE RESULTS
function gotData(data) {
  let answers = data.val();
  let words = Object.values(answers);
  words = shuffle(words);

  for (let i = 0; i < words.length; i++) {

    $("#result").append("<span class='lineY'>" + "Hong Kong Police " + "</span>" + words[i].join(" ") + "." + "<br>")
    ///put the li before the j loop and close it
    for (let j = 0; j < words[i].length; j++) {
      // console.log(words[i][j], [i])
    }
    // console.log(words[i], words[i].length)
    // console.log("Hong Kong Police " + words[i].join(" "))
  }
}

function errData(err) {
  console.log("Error");
  console.log(err);
}
