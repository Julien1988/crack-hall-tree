// NAME GENERATOR :
let randomName;
let gender;
let randomNumber;
let randomRaceName;
let randomRaceGender;
let raceGender;
let fantasyName;
const raceArrayLength = 17;
const raceArray = {
    0: ["angel", (gender = true)],
    1: ["cavePerson", (gender = true)],
    2: ["darkelf", (gender = true)],
    3: ["demon", (gender = false)],
    4: ["dragon", (gender = true)],
    5: ["drow", (gender = true)],
    6: ["dwarf", (gender = true)],
    7: ["elf", (gender = true)],
    8: ["fairy", (gender = true)],
    9: ["gnome", (gender = true)],
    10: ["goblin", (gender = false)],
    11: ["halfdemon", (gender = true)],
    12: ["halfling", (gender = true)],
    13: ["highelf", (gender = true)],
    14: ["highfairy", (gender = true)],
    15: ["ogre", (gender = false)],
    16: ["orc", (gender = false)],
};

const fantasyNameGenerator = (randomNumber) => {
    randomRaceName = raceArray[randomNumber][0];
    randomRaceGender = raceArray[randomNumber][1];
    raceGender = randomNumber % 2;
    // console.log(randomRaceName);
    // console.log(randomRaceGender);
    // console.log(raceGender);

    if (randomRaceGender == true) {
        if (raceGender == 0) {
            fantasyName = nameByRace(randomRaceName, {
                gender: "female",
            });
        } else {
            fantasyName = nameByRace(randomRaceName, {
                gender: "male",
            });
        }
    } else {
        fantasyName = nameByRace(randomRaceName);
    }
    console.log(fantasyName);
};

const getRandomInt = (max) => {
    randomNumber = Math.floor(Math.random() * Math.floor(max));
    //console.log(randomNumber);
    fantasyNameGenerator(randomNumber);
};

const nameGenerator = () => {
    getRandomInt(raceArrayLength);
};

//nameGenerator();

// END
