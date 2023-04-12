const informationGoods = {
    name: "Carrot",
    number: 3,
    price: 20,
};

function sumGoods(informationGoods) {
    return `Sum goods ${informationGoods.price * informationGoods.number}`;
}

console.log(sumGoods(informationGoods))