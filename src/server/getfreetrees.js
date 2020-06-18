const newUserFunction = (getPlayerId, getFreeTrees) => {
    //const playerId = getPlayerId;
    const freeTrees = getFreeTrees;
    const freeTreesNumber = freeTrees.length;
    const randomTrees = [];
    const getRandomTrees = [];
    let i;

    if (freeTreesNumber > 10) {
        const getRandomInt = (max) => {
            let getRandomTree = Math.floor(Math.random() * Math.floor(max));
            if (i !== 0) {
                randomTrees.forEach((element) => {
                    if (element !== getRandomTree) {
                        randomTrees.push(getRandomTree);
                    } else {
                        i--;
                    }
                });
                randomTrees.push(getRandomTree);
            }
        };
        for (i = 0; i < 3; i++) {
            getRandomInt(freeTreesNumber);
        }
        if (i === 3) {
            for (let index = 0; index < 3; index++) {
                getRandomTrees.push(freeTrees[randomTrees[index]]);
            }
            console.log(getRandomTrees);
        }
    } else {
        console.log(
            "Il n'y a plus assez d'abres disponnible pour un nouveau joueur désolé...",
        );
    }
};

module.exports = newUserFunction;
