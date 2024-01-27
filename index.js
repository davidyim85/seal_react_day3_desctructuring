////////////////////////////////////////////
//destructure of arrays

const david = {
    lastName: 'yim',
    age: 40,
    favPokemon: 'gengar',
}

console.log(david) //{lastName: 'yim', age: 40, favPokemon: 'gengar', }

console.log(david.lastName)  //'yim'
console.log(david.age) //40
console.log(david.favPokemon) //'gengar'
console.log(david.propThatDoesntExist) //undefined

//if we destructure an object, 
//we can destrcture them by using the object's KEY
//if we console.log each of the variables that were destructured 
//(using the KEY)
//it will log the Key's VALUE
const { lastName, age, favPokemon, propThatDoesntExist } = david;

console.log(lastName)
console.log(age)
console.log(favPokemon)
console.log(propThatDoesntExist)

{/*
    in Component destructuring will look like this: 
    const ChildExample = ({ title, instructors, location, unitNum }) => {
        return (
            <div>
                <h1>{title}</h1>
                <p><b>instructors: </b> </p>
                <ul>
                    {instructors.map((v, i) => {
                        //lets destructure v also!
                        const { name } = v
                        return (<li key={i}>{name}</li>)
                    })}
                </ul>
                <p><b>location: </b>{location}</p>
                <p><b>unit: </b>{unitNum}</p>
            </div>
        )
    }
}


*/}


////////////////////////////////////////////
//destructure of arrays

const instructors = [
    { name: 'alex' },
    { name: 'david' },
    { name: 'joy' },
    { name: 'kyle' },
]
//set1 of console.logs
console.log(instructors[0]) //{ name: 'alex' }
console.log(instructors[1]) //{ name: 'david' }
console.log(instructors[2]) //{ name: 'joy' }
console.log(instructors[3]) //{ name: 'kyle' }

//example of destructure of array
const [a, b, c, d] = instructors //NOTICE HOW THE destructure of an array has SQAURE BACKETS (previous in object they were curly)

//set2 of console.logs SAME as set1
console.log(a) //{ name: 'alex' } a represents instructors[0]
console.log(b) //{ name: 'david' } b represents instructors[1]
console.log(c) //{ name: 'joy' } c represents instructors[2]
console.log(d) //{ name: 'kyle' } d represents instructors[3]

//example of destructure of array
const [whateverOne, whateverTwo, whateverThree, whateverFour] = instructors

//set3 of console.logs SAME as set1 and set2
//notice i can literally call the variables whatever i want!
console.log(whateverOne) //{ name: 'alex' } whateverOne represents instructors[0]
console.log(whateverTwo) //{ name: 'david' } whateverTwo represents instructors[1]
console.log(whateverThree) //{ name: 'joy' } whateverThree represents instructors[2]
console.log(whateverFour) //{ name: 'kyle' } whateverFourrepresents instructors[2]
// In conclusion:
// when you destructure an array in JavaScript, you create variables that correspond to the elements of the array (in the order of destructuring)
// Destructuring allows you to extract values from arrays or objects and assign them to variables as opposed to using the index of the array
