const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
// ## MAP

// 1. Get an array of all names
const allNames = characters.map( char => char.name);
console.log(allNames)
// 2. Get an array of all heights
const allHeights = characters.map( char => char.height);
console.log(allHeights)
// 3. Get an array of objects with just name and height properties
const allNameHeight = characters.map( char => ({name: char.name, height: char.height}));
console.log(allNameHeight)
// 4. Get an array of all first names
const allFirstNames = characters.map( char => char.name.split(' ')[0]);
console.log(allFirstNames)

// ## REDUCE

// 1. Get the total mass of all characters
const totalMass = characters.reduce((acc, curr) => acc+parseInt(curr.mass), 0)
console.log(totalMass)
// 2. Get the total height of all characters
const totalHeight = characters.reduce((acc, curr) => acc+parseInt(curr.height), 0)
console.log(totalHeight)
// 3. Get the total number of characters in all the character names
const totalCharsInName = characters.reduce((acc, curr) => acc+curr.name.length, 0)
console.log(totalCharsInName)
// 4. Get the total number of characters by eye color (hint. a map of eye color to count)
const totalCharsByEyeColor = characters.reduce((acc, curr) => {
    const color = curr.eye_color;
    acc[color] = acc[color] ? acc[color] += 1 : 1
    return acc;
}, {})
console.log(totalCharsByEyeColor)

// ## FILTER

// 1. Get characters with mass greater than 100
const charsMassOver100 = characters.filter( char => parseInt(char.mass) > 100 )
console.log(charsMassOver100)
// 2. Get characters with height less than 200
const charsHeightLess200 = characters.filter( char => parseInt(char.height) < 200 )
console.log(charsHeightLess200)
// 3. Get all male characters
const allMale = characters.filter( char => char.gender === 'male' )
console.log(allMale)
// 4. Get all female characters
const allFemale = characters.filter( char => char.gender === 'female' )
console.log(allFemale)

// ## SORT

// 1. Sort by name
const copyArray1 = [...characters]
const sortedByName = copyArray1.sort( (a, b) => {
    const aName= a.name.toUpperCase()
    const bName= b.name.toUpperCase()
    if (aName === bName) {
        return 0;
    }    
    return aName < bName ? -1 : 1
})
console.log('by NAME', sortedByName)
// 2. Sort by mass
const copyArray2 = [...characters]
const byMass = copyArray2.sort( (a, b) => a.mass - b.mass)
console.log('by MASS', byMass)
// 3. Sort by height
const copyArray3 = [...characters]
const byHeight = copyArray3.sort( (a, b) => a.height - b.height)
console.log('by HEIGHT', byHeight)
// 4. Sort by gender
const copyArray4 = [...characters]
const byGender = copyArray4.sort( (a, b) => {
    const aGender= a.gender.toUpperCase()
    const bGender= b.gender.toUpperCase()
    if (aGender === bGender) {
        return 0;
    }    
    return aGender < bGender ? -1 : 1
})
console.log('by GENDER', byGender)

// ## EVERY

// 1. Does every character have blue eyes?
console.log(characters.every( char => char.eye_color === "blue"))
// 2. Does every character have mass more than 40?
console.log(characters.every( char => parseInt(char.mass) > 40))
// 3. Is every character shorter than 200?
console.log(characters.every( char => parseInt(char.height) < 200))
// 4. Is every character male?
console.log(characters.every( char => char.gender === "male"))

// ## SOME
console.log('-------------')

// 1. Is there at least one male character?
console.log(characters.some( char => char.gender === "male"))
// 2. Is there at least one character with blue eyes?
console.log(characters.some( char => char.eye_color === "blue"))
// 3. Is there at least one character taller than 200?
console.log(characters.some( char => parseInt(char.height) > 200))
// 4. Is there at least one character that has mass less than 50?
console.log(characters.some( char => parseInt(char.mass) < 50))