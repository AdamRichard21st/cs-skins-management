
const selectSkin = (column, variables, ...skins) => {

    if (skinsNotCombineColumns(column, skins)) {
        console.log("If the skins specifications for greater than one, the parameters need to be the same amount of columns");

        return false;
    }

    const skinsCombinations = getSkinsCombinations(column, skins);

    let line = 0;

    for (let col = --column; col >= 0; col--) {
        line += skinsCombinations.shift() * variables ** col;
    }

    return line;
}


const skinsNotCombineColumns = (column, skins) => {

    return skins.length !== 1 && skins.length !== column;
}


const getSkinsCombinations = (column, skins) => {

    let skinsCombinations = [];

    if (skins.length === 1) {
        for (let i = 0; i < column; i++) {
            skinsCombinations.push(skins[0]);
        }

        return skinsCombinations;
    }

    return skins;
}


export default {

    selectSkin,
    skinsNotCombineColumns,
    getSkinsCombinations
}