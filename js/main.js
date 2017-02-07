// console.log('connected')


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
var $firstStory = [
  {story1: "This option goes to forest 1"},
  {story1: "This option goes to 2"},
  {story1: "This option goes to 3"},
  {story1: "This option goes to 4"},
  {story1: "This option goes to 5"},
]
//
var $secondStory = [
  {story2: "This goes to 1"},
  {story2: "This goes to 2"},
  {story2: "This goes to 3"},
  {story2: "This goes to 4"},
  {story2:  "This goes to 5"},
]



var $storyCards = [
  {oneA: "The fox continues on his way, surely theres nothing in those bushes! As Mr. Fox turns the corner he see’s a black bear and her cubs. Oh no! Does he:"},
  {oneB: "The fox tentatively walks to the bush and calls out “Hello in there?”. A small brown squirrel jumps out of the bush, “Hiya Mr. Fox!” The squirrel asks you to take a note to his friend at the top on the mountain. Will you?"},
  {oneC: "Sure thing Squirrely!"},
  {twoBase: "Mr. Fox, once again alone, hums a tune while he walks further up the mountain. Little does he know the resident songbird is following along. Suddenly she soars in front of him and asks him to duet. Do you:"},
  {twoA: 'Lets do it!" the fox say exictedley. With a pep in his step the fox and the songbird again start up the trail, singing together.'},
  {twoB: 'The fox leaves the songbird behind and looks out at the mountains around him. "So beautiful," he thinks to himself, "the only thing better would be if I could get to the top and see it all before sundown!" Does the fox:'},
  {threeBase: 'The fox and the songbird finish their song and part ways. "Looks like wind tonight, better be careful!" the bird says before departing. Mr. Fox looks around and remembers theres a shortut nearby. Does he:'},
  {fourBase: 'Mr. Fox dashes across the trail looking for the shortcut, a steep rope bridge going across the cliffs. Dangerous no doubt, but the time it saves! "The sunset tonight will be amazing, I must see it!"'},
  {fiveBase: "Although it sure would be nice to make it up the mountain in time to see the sunset, Mr. Fox knows the rope bridge is a gamble. Even though the longer route is indeed safer, that doesen't mean danger can't be found. Watch out!"},
  {sixBase: "Although it sure would be nice to make it up the mountain in time to see the sunset, Mr. Fox knows the rope bridge is a gamble. Even though the longer route is indeed safer, that doesen't mean danger can't be found. Watch out!"},
  {sevenBase: "Oh no!!!! Disaster! Mr. Fox went right off the bridge. How unfortunate. Return to main page:"},
  {eightBase: 'That was a close one! Luckily Mr. Fox is able to make his way to the other side, just in time for sunset! "That bridge had me worried for a minute!" Mr. Fox sighed, but was worth it for the amazing view. Return to main page:'},
  {nineBase: "Mr. Fox winds up and around the side of the mountain, slowly making his way to the top. Although it took longer, it was a beautiful stroll! Mr. Fox finally reaches the top, still in time for sunset!"}
]

var $buttonOptions = [
  {investigate: "Investigate!"},
  {continue: "Continue!"},
  {oneAFirst: "Run away!"},
  {oneBFirst: "Sure!"},
  {oneBSecond: "Sorry, can't be weighted down!"},
  {oneCFirst: "Continue On!"},
  {sing: "Duet with the songbird"},
  {soloist: "Sorry, can't do it. I'm more of a solist."},
  {twoAFirst: "Continue!"},
  {twoBFirst: "Take a shortcut!"},
  {twoBSecond: "Take the safe way."},
  {threeAFirst: "Take a shortcut!"},
  {threeASecond: "Take the safe way."},
  {fourAFirst: "Continue!"},
  {fiveAFirst: "Continue!"},
  {sixAFirst: "Step left!"},
  {sixASecond: "Step right!"},
  {sevenAFirst: "yes"}, //end game return home
  {eightAFirst: "yes"}, //end game return home
]

var $leftButton = [
  {buttonOption: "Investigate!"},
  {buttonOption: "Run Away!"},
  {buttonOption: "Sure!"},
  {buttonOption: "Continue on!"},
  {buttonOption: "Duet with songbird"},
  {buttonOption: "Continue!"},
  {buttonOption: "Take a shortcut!"},
  {buttonOption: "Take a shortcut!"},
  {buttonOption: "Continue!"},
  {buttonOption: "Continue!"},
  {buttonOption: "Step left!"},
  {buttonOption: "yes"},
  {buttonOption: "yes"}
]

var $rightButton = [
  {optionTwo: "Continue!"},
  {optionTwo: "Sorry, can't be weighted down!"},
  {optionTwo: "Sorry, I'm more of a solist."},
  {optionTwo: "Take the safe route."},
  {optionTwo: "Take the safe route."},
  {optionTwo: "Step right"},

]






var step = 0;
var i = 0;
var j = 0;


    $('.button').click(function(){
        // $('#front').html("You chose path one")
        $('#maincard').fadeTo()

        $('#button1').html($leftButton[step].buttonOption)
        $('#button2').html($rightButton[step].optionTwo)
        step++
      })
        $('#button1').click(function() {
          $('#maincard').html($storyCards[i])
          i++
      })
        $('#button2').click(function() {
          $('#maincard').html($storyCards[j])
          j++
        })

//     // $('#path2').click(function(){
//     //   $('#front').html("You chose path two")
//     //   $('#path2').html("character two")
//     //
//     // })
