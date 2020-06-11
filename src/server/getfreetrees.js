const newUserFunction = () => {
    // Attribution des 3 arbres

    const getFreeTree = (newUserThreeIndex) => {
        console.log(findUserTree[newUserThreeIndex[0]]._id);
        console.log(findUserTree[newUserThreeIndex[1]]._id);
        console.log(findUserTree[newUserThreeIndex[2]]._id);
    };

    // Algo pour la distribution des arbres des nouveaux joueurs:

    let newUserThreeIndex = [];
    function getRandomInt(max) {
        let randomNumb;
        for (let i = 0; i < 3; i++) {
            randomNumb = Math.floor(Math.random() * Math.floor(max));
            if (
                randomNumb != newUserThreeIndex[0] &&
                randomNumb != newUserThreeIndex[1] &&
                randomNumb != newUserThreeIndex[2]
            ) {
                newUserThreeIndex.push(randomNumb);
            } else {
                i--;
            }
        }
        getFreeTree(newUserThreeIndex);
    }

    const findUserTree = [];

    const newUserTree = () => {
        //Netoyage de la variable
        newUserThreeIndex = [];
        //console.log(getAllThrees);
        getAllThrees.forEach((element) => {
            if (element.free === true) {
                findUserTree.push(element);
            }
        });
        getRandomInt(findUserTree.length);
        //console.log(findUserTree.length);
    };
    newUserTree();
};

module.exports = newUserFunction;
