console.log('connected')



// function animatethings() {
//   $('#moon').animate({'top': '30%', 'opacity':1}, 5000)
//   }
//



var $steps = [
  {
    step: "stepOne",
    mainText: "“Here I go!” says the fox as he runs into the forest. While he makes his way forward a slight bustle in the bushes catches his ear. Does he :",
    leftButton: {
      text: "Investigate",
      nextStep: "oneB"
    },
    rightButton: {
      text: "Continue",
      nextStep: "oneA"
    }
  },
  {
    step: "investigate",
    mainText: "The fox tentatively walks to the bush and calls out “Hello in there?”. A small brown squirrel jumps out of the bush, “Hiya Mr. Fox!” The squirrel asks you to take a note to his friend at the top on the mountain. Will you?",
    leftButton: {
      text: "Sure!",
      nextStep: "oneC"
    },
    rightButton: {
      text: "Sorry, can't be weighted down!",
      nextStep: "twoBase"
    }
},

    {
      step: "oneC",
    mainText: "Sure thing squireley!",
    leftButton: {
      text: "Continue on!",
      nextStep: "twoBase"
    },
    rightButton: {
      text: ""
    }
  },
  {
    step: "oneAFirst",
    mainText: 'The fox continues on his way, surely theres nothing in those bushes! As Mr. Fox turns the corner he see’s a black bear and her cubs. Oh no! Does he:',
    leftButton: {
      text: "Run away!",
      nextStep: "twoBase"
    },
    rightButton: {
      text: ""
    }
  },
  {
    step: "twoBase",
    mainText: "Mr. Fox, once again alone, hums a tune while he walks further up the mountain. Little does he know the resident songbird is following along. Suddenly she soars in front of him and asks him to duet. Do you:",
    leftButton: {
      text: "Duet with the songbird",
      nextStep: "twoA"
    },
    rightButton: {
      text: "Sorry, can't do it. I'm more of a soloist.",
      nextStep: "twoB"
    }
  },
  {
    step: "twoA",
    mainText: '"Lets do it!" the fox say exictedley. With a pep in his step the fox and the songbird again start up the trail, singing together.',
    leftButton: {
      text: "Continue!",
      nextStep: "threeBase"
    },
    rightButton: {
      text: ""
    }
  },
   {
    step: "twoB",
    mainText: 'The fox leaves the songbird behind and looks out at the mountains around him. "So beautiful," he thinks to himself, "the only thing better would be if I could get to the top and see it all before sundown!" Does the fox:',
    leftButton: {
      text: "Take a shortcut!",
      nextStep: "fourBase"
    },
    rightButton: {
      text: "Take the safe way!",
      nextStep: "fiveBase"
    }
  },
  {
    step: "threeBase",
    mainText: 'The fox and the songbird finish their song and part ways. "Looks like wind tonight, better be careful!" the bird says before departing. Mr. Fox looks around and remembers theres a shortut nearby. Does he:',
    leftButton: {
      text: "Take a shortcut!",
      nextStep: "fourBase",
    },
    rightButton: {
      text: "Take the safe way!",
      nextStep: "fiveBase",
    }
  },
  {
    step: "fourBase",
    mainText: 'Mr. Fox dashes across the trail looking for the shortcut, a steep rope bridge going across the cliffs. Dangerous no doubt, but the time it saves! "The sunset tonight will be amazing, I must see it!"',
    leftButton: {
      text: "Continue!",
      nextStep: "sixBase"
    },
    rightButton: {
      text: ""
    }
  },
  {
    step: "fiveBase",
    mainText: "Although it sure would be nice to make it up the mountain in time to see the sunset, Mr. Fox knows the rope bridge is a gamble. Even though the longer route is indeed safer, that doesen't mean danger can't be found. Watch out!",
    leftButton: {
      text: "Continue!",
      nextStep: "nineBase"
    },
    rightButton: ""
  },
  {
    step: "sixBase",
    mainText: 'Mr Fox steps onto the bridge and immediately the swing almost send him flying off. "Oh no! This is going to be tricky!" Mr. Fox exclaims. A blizzard rushes in off the mountains, almost obscuring his vision entirely. Will he',
    leftButton: {
      text: "Step left!",
      nextStep: "sevenBase"
    },
    rightButton: {
      text: "Step right!",
      nextStep: "eightBase"
    }
  },
    //game ender
  {
    step: "sevenBase",
    mainText: "Oh no!!!! Disaster! Mr. Fox went right off the bridge. How unfortunate. Return to main page:",
    leftButton: {
      text: "return home"
    },
    rightButton: {
      text: ""
    }
  },
    // game ender
  {
    step: "eightBase",
    mainText: 'that was a close one! Luckily Mr. Fox is able to make his way to the other side, just in time for sunset! "That bridge had me worried for a minute!" Mr. Fox sighed, but was worth it for the amazing view. Return to main page:',
    leftButton: {
      text: "Return home!",
    },
    rightButton: {
      text: ""
    }
  },
    //game ender
    {
    step: "nineBase",
    mainText: "Mr. Fox winds up and around the side of the mountain, slowly making his way to the top. Although it took longer, it was a beautiful stroll! Mr. Fox finally reaches the top, still in time for sunset!",
    leftButton: {
      text: "Return home"
    },
    rightButton: {
      text: ""
      }

 }]

 // click maincard div to start game, load first step
 $('.bigButton').click(function (start) {
       nextCard($steps[1])
       $('.button').toggle()
       $('.bigButton').hide().on('click')


   })


 // creates function to go to specified nextStep object in array
 // fills the html of selected div with information specified in it's corresponding place in object.
 // stepNext being paramater for continuation
   function nextCard(stepNext) {
     $('#maincard').html(stepNext.mainText)
     $('#button1').html(stepNext.leftButton.text).attr('data-next-step', stepNext.leftButton.nextStep)
     $('#button2').html(stepNext.rightButton.text).attr('data-next-step', stepNext.rightButton.nextStep),
      function hideButtons(hide) {
            if (nextCard == "") {
              $(this).hide()
              // $('#contButton').html(stepNext.leftButton.text).attr('data-next-step', stepNext.leftButton.nextStep)
            }

          // if ('rightButton' == "") {
          //     this.removeEventListener.('click')
          //   } else {
          //      $('#button2').show()
          //    }
}
}




 // on click finds step, sets to data card
 // searches for 'step' in array from matching nextStep in button object
 $('.button').click(function(e){
     var nextStep = $(this).attr("data-next-step")
     var step = $steps.find(function (s){
         return (s.step == nextStep)
      //   function m() {
      // if (nextStep === "") {
      //   $('.button').removeEventListener('click', nextStep).hide()
      //   $('.buttonOn').addEventlistener('click', nextStep).show()
      //   }
      //   //  else {
      //   //    $('#button2').show()
      //   //  }
        //  }
       })
        nextCard(step)

    })

 // function hideButtons(hide) {
 //   $('#button2').hide()
 // }
 //
 //







//map


// $steps[$steps.map(function(e) {
//     e.step
// }).indexOf($steps[step].leftButton.nextStep)
//
// $steps.map(function(e) {
//     return (e.name)}.indexOf(step)


// var $steps = 0;





// $('.button').click(function(ani) {
//     $('#maincard').toggle("bounce", {times: 3}, "slow")
//
// })

//
// $('#button').click(function (playgame) {
//     $('#maincard').html($steps[step].mainText)
//     $('#button1').html($steps[step].leftButton.text.nextStep)
//     $('#button2').html($steps[step].rightButton.text.nextStep)
//     $steps = 0,
//     $step++
//
// })
//
//     $('.button').click(function(e){
//         // $('#front').html("You chose path one")
//         $('#maincard').fadeTo()
//
//         $('#button1').html($steps[0]leftButton.text)
//
//         $('#button2').html($steps[step].rightButton.text)
//         step++
//       })
//         $('#button1').click(function() {
//           step = $steps[$steps.map(function(e) {
//               e.step
//           }).indexOf($steps[i].leftButton.nextStep)]
//           $('#maincard').html($steps[i].mainText)
//           i++
//       })
//         $('#button2').click(function() {
//           step = $steps[$steps.map(function(e) {
//               e.step
//           }).indexOf($steps[j].rightButton.nextStep)]
//           $('#maincard').html($steps.map.mainText)
//           j++
// //         })



// Options in array

//
//
//
// var $firstPath = [
//   {choice1: "Character One", choice2: 'Character Two'},
//  {choice1: "Option 1", choice2: 'Option a'},
//  {choice1: "Option 2", choice2: 'Option b'},
//  {choice1: "Option 3", choice2: 'Option c'},
// ]
// //
// var $secondPath = [
//   {choice1: "Character 2"},
//   {choice1: 'Option 1', choice2: 'Option a' },
//   {choice1: "Option 2", choice2: 'Option b' },
//   {choice1: "Option 3", choice2: "Option c"}
// ]
// //
// var $firstStory = [
//   {story1: "This option goes to forest 1"},
//   {story1: "This option goes to 2"},
//   {story1: "This option goes to 3"},
//   {story1: "This option goes to 4"},
//   {story1: "This option goes to 5"},
// ]
// //
// var $secondStory = [
//   {story2: "This goes to 1"},
//   {story2: "This goes to 2"},
//   {story2: "This goes to 3"},
//   {story2: "This goes to 4"},
//   {story2:  "This goes to 5"},
// ]
//


// var $storyCards = [
//   {oneA: "The fox continues on his way, surely theres nothing in those bushes! As Mr. Fox turns the corner he see’s a black bear and her cubs. Oh no! Does he:"},
//   {oneB: "The fox tentatively walks to the bush and calls out “Hello in there?”. A small brown squirrel jumps out of the bush, “Hiya Mr. Fox!” The squirrel asks you to take a note to his friend at the top on the mountain. Will you?"},
//   {oneC: "Sure thing Squirrely!"},
//   {twoBase: "Mr. Fox, once again alone, hums a tune while he walks further up the mountain. Little does he know the resident songbird is following along. Suddenly she soars in front of him and asks him to duet. Do you:"},
//   {twoA: 'Lets do it!" the fox say exictedley. With a pep in his step the fox and the songbird again start up the trail, singing together.'},
//   {twoB: 'The fox leaves the songbird behind and looks out at the mountains around him. "So beautiful," he thinks to himself, "the only thing better would be if I could get to the top and see it all before sundown!" Does the fox:'},
//   {threeBase: 'The fox and the songbird finish their song and part ways. "Looks like wind tonight, better be careful!" the bird says before departing. Mr. Fox looks around and remembers theres a shortut nearby. Does he:'},
//   {fourBase: 'Mr. Fox dashes across the trail looking for the shortcut, a steep rope bridge going across the cliffs. Dangerous no doubt, but the time it saves! "The sunset tonight will be amazing, I must see it!"'},
//   {fiveBase: "Although it sure would be nice to make it up the mountain in time to see the sunset, Mr. Fox knows the rope bridge is a gamble. Even though the longer route is indeed safer, that doesen't mean danger can't be found. Watch out!"},
//   {sixBase: "Although it sure would be nice to make it up the mountain in time to see the sunset, Mr. Fox knows the rope bridge is a gamble. Even though the longer route is indeed safer, that doesen't mean danger can't be found. Watch out!"},
//   {sevenBase: "Oh no!!!! Disaster! Mr. Fox went right off the bridge. How unfortunate. Return to main page:"},
//   {eightBase: 'That was a close one! Luckily Mr. Fox is able to make his way to the other side, just in time for sunset! "That bridge had me worried for a minute!" Mr. Fox sighed, but was worth it for the amazing view. Return to main page:'},
//   {nineBase: "Mr. Fox winds up and around the side of the mountain, slowly making his way to the top. Although it took longer, it was a beautiful stroll! Mr. Fox finally reaches the top, still in time for sunset!"}
// ]
//
// var $buttonOptions = [
//   {investigate: "Investigate!"},
//   {continue: "Continue!"},
//   {oneAFirst: "Run away!"},
//   {oneBFirst: "Sure!"},
//   {oneBSecond: "Sorry, can't be weighted down!"},
//   {oneCFirst: "Continue On!"},
//   {sing: "Duet with the songbird"},
//   {soloist: "Sorry, can't do it. I'm more of a solist."},
//   {twoAFirst: "Continue!"},
//   {twoBFirst: "Take a shortcut!"},
//   {twoBSecond: "Take the safe way."},
//   {threeAFirst: "Take a shortcut!"},
//   {threeASecond: "Take the safe way."},
//   {fourAFirst: "Continue!"},
//   {fiveAFirst: "Continue!"},
//   {sixAFirst: "Step left!"},
//   {sixASecond: "Step right!"},
//   {sevenAFirst: "yes"}, //end game return home
//   {eightAFirst: "yes"}, //end game return home
// ]
//
// var $leftButton = [
//   {buttonOption: "Investigate!", nextStep: },
//   {buttonOption: "Run Away!"},
//   {buttonOption: "Sure!"},
//   {buttonOption: "Continue on!"},
//   {buttonOption: "Duet with songbird"},
//   {buttonOption: "Continue!"},
//   {buttonOption: "Take a shortcut!"},
//   {buttonOption: "Take a shortcut!"},
//   {buttonOption: "Continue!"},
//   {buttonOption: "Continue!"},
//   {buttonOption: "Step left!"},
//   {buttonOption: "yes"},
//   {buttonOption: "yes"}
// ]
//
// var $rightButton = [
//   {optionTwo: "Continue!"},
//   {optionTwo: "Sorry, can't be weighted down!"},
//   {optionTwo: "Sorry, I'm more of a solist."},
//   {optionTwo: "Take the safe route."},
//   {optionTwo: "Take the safe route."},
//   {optionTwo: "Step right"},
//
// ]
