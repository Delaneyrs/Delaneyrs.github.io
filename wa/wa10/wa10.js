
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'Once upon a time there was a person named :insertx:. Now, today they were on a mission. A mission to go to :inserty:. However, just as they finished their very important task they :insertz:. Bob watched in horror :insertx: was their idol. Now theyll never get that autograph.';
const insertX = [
  'Hatsune Miku',
  'Jerma',
  'Minnie',
  'Jack Skellington',
  'Hello Kitty',
  'Riku',
  'Gojo'
];

const insertY = [
  'Miku Expo',
  'Assassinate the president',
  'the White House',
  'join a rap battle',
  'join scientology',
  'argue with people on twitter'
];

const insertZ = [
  'were killed by the FBI',
  'were abducted by aliens',
  'mauled by a pack of dogs',
  'said "he\'s right behing me isn\'t he...."',
  'got selected by MrBeast to be sent to hell for 100 days',
  'found out how many licks it takes to get to the center of a tootsie roll pop',
  'met Leon Kennedy'
];
randomize.addEventListener('click', result);
function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}

