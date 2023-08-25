let darthVader = {
    allegiance: "Empire",
    weapon: "lightsabre",
    sith: true
};

console.log(darthVader);

console.log(darthVader.allegiance);
console.log(darthVader.weapon);
console.log(darthVader.sith);
console.log(darthVader.Jedi);
console.log(Object.keys(darthVader).length);

darthVader.children = 2;
darthVader.childNames = ["Luke", "Leia"];
console.log(darthVader);
console.log(darthVader.childNames[0]);

for (let key in darthVader){
    console.log(darthVader[key]);
}

darthVader.allegiance = "The light side";
console.log(darthVader);

delete darthVader.children;
console.log(darthVader);

let{allegiance, weapon, sith, childNames} = darthVader;

console.log(allegiance);
console.log(weapon);
console.log(sith);
console.log(childNames);

darthVader = {}
console.log(darthVader);