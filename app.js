// var myEmptyArray = new Array(3); // Array vacio de 3 posiciones.
// console.log(myEmptyArray); // [empty × 3]

// //Rellenar todas las posiciones de un array con el mismo valor:
// var myArray = new Array(3); // Array vacio de 3 posiciones.
// myArray.fill("Hola");
// console.log(myArray); // ["Hola", "Hola", "Hola]

// randomBoolean = Math.random() >= 0.5;
// console.log(randomBoolean);

var WORK_HOURS = [
    "08:00" - "09:00",
    "09:00" - "10:00",
    "10:00" - "11:00",
    "11:00" - "12:00",
    "12:00" - "13:00",
    "13:00" - "14:00",
    
    "15:00" - "16:00",
    "16:00" - "17:00"
];

var myTeam = [
    {
        name: "María",
        availability: WORK_HOURS[0].fill(Math.random() >= 0.5),
        availability1: WORK_HOURS(1).fill(Math.random() >= 0.5),
        availability2: WORK_HOURS(2).fill(Math.random() >= 0.5),
        availability3: WORK_HOURS(3).fill(Math.random() >= 0.5),
        availability4: WORK_HOURS(4).fill(Math.random() >= 0.5),
        availability5: WORK_HOURS(5).fill(Math.random() >= 0.5),
        availability6: WORK_HOURS(6).fill(Math.random() >= 0.5),
        availability7: WORK_HOURS(7).fill(Math.random() >= 0.5),
        availability8: WORK_HOURS(8).fill(Math.random() >= 0.5)
    },
    {
        name: "Juan",
        availability: new Array(0).fill(Math.random() >= 0.5),
        availability: new Array(1).fill(Math.random() <= 0.5),
        availability: new Array(2).fill(Math.random() >= 0.5),
        availability: new Array(3).fill(Math.random() <= 0.5),
        availability: new Array(4).fill(Math.random() >= 0.5),
        availability: new Array(5).fill(Math.random() <= 0.5),
        availability: new Array(6).fill(Math.random() >= 0.5),
        availability: new Array(7).fill(Math.random() <= 0.5),
        availability: new Array(8).fill(Math.random() >= 0.5)
    },
    // {
    //     name: "Pedro",
    //     availability: WORK_HOURS.fill(randomBoolean)
    // },
    // {
    //     name: "Ana",
    //     availability: WORK_HOURS.fill(randomBoolean)
    // },
];

// console.log(myTeam);
console.log(myTeam[0],WORK_HOURS[0]);
console.log(myTeam[0],WORK_HOURS[1]);
console.log(myTeam[0],WORK_HOURS[2]);
console.log(myTeam[0],WORK_HOURS[3]);
console.log(myTeam[0],WORK_HOURS[4]);
console.log(myTeam[0],WORK_HOURS[5]);
console.log(myTeam[0],WORK_HOURS[6]);
console.log(myTeam[0],WORK_HOURS[7]); 
console.log(myTeam[0],WORK_HOURS[8]);


// console.log(myTeam[1].availability);
// console.log(myTeam[2].availability);
// console.log(myTeam[3].availability);

