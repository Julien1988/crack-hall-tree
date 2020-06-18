// // Mondifcation des liens pour pointer vers wikipedia

// let newUrl;
// let wordConc;
// let treeName;
// let words;
// let wordsArrayLength;
// let wikiUrlVar;

// const nextStep = () => {
//     wikiUrlVar = "https://fr.wikipedia.org/wiki/" + wordConc;
// };

// const wikiUrl = (tree) => {
//     treeName = tree.nom_complet;
//     words = treeName.split(" ");
//     wordsArrayLength = words.length;
//     wordConc = words[0] + "_";
//     for (let i = 1; i < wordsArrayLength; i++) {
//         if (i < wordsArrayLength - 1) {
//             wordConc += words[i] + "_";
//         } else {
//             wordConc += words[i];
//             nextStep();
//         }
//     }
// };
