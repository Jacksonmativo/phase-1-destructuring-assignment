const farmAnimals = 'cow horse sheep pig chicken'; 
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Destructure animal sounds from farmAnimals
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// Assign animal names (excluding horse)
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// Assign correct animal colors
const [blackAndWhite, white, pink] = ['black and white', 'white', 'pink'];

// Destructure rainbow colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// Destructure rainbow colors using initials (excluding indigo)
const [r, o, y, g, b, , v] = colors;

// Assign only indigo
const [, , , , , indg] = colors;

// Destructure muppet object
const { muppetName, color, song, job, partner } = muppet;

// Destructure nested muppet object
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob, nestedPartner } = nestedMuppet;

// Logging for debugging
console.log(moo, neigh, baa, oink, cluck); // Animal sounds
console.log(bessie, dolly, babe, little);  // Animal names
console.log(blackAndWhite, white, pink);  // Animal colors 