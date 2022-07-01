//Convert celsius to the fahrenheit

const kelvin = 243;                                    //today's forecast in kelvin
const celsius = kelvin - 273;                        //convert kelvin to celsius

let fahrenheit = celsius * (9 / 5) + 32;             //calculate Fahrenheit
fahrenheit = Math.floor(fahrenheit);                 //to round up decimal number

console.log(`the temperature in ${fahrenheit} degrees Fahrenheit`);

//Convert celsius to the Newton scale

let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`the temperature in ${newton} degrees Fahrenheit`);