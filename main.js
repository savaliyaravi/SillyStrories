var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray (array) {
  return array[Math.floor(Math.random()*array.length)];
}



var storyText = "It was 94 fahrenheit outside, so insertx went for a walk. When they got to inserty, they stared in horror for a few moments, then insertz. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";


var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];

var insertY = ['the soup kitchen','Disneyland','the White House'];

var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];




function result() {


	var newStory = storyText;

  if(customName.value !== '') {
    var name = customName.value;

  }

  if(document.getElementById("uk").checked) {
   // var weight = Math.round(300 * 0.071429);
    //var temperature =  Math.round(62 × 5/9);
    //console.log(temperature);
  newStory = newStory.replace('94 fahrenheit','34 Centigrade');
  newStory = newStory.replace('300 pounds','21 stone ');

  console.log(newStory);
  }


    


  var xItem = randomValueFromArray (insertX);
  var yItem = randomValueFromArray (insertY);
  var zItem = randomValueFromArray (insertZ);


var mapObj = {
   insertx : xItem,
   inserty : yItem,
   insertz : zItem
};

 newStory = newStory.replace(/insertx|inserty|insertz/gi, function(matched){
  return mapObj[matched];
});
  

  story.textContent = newStory;


  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);


