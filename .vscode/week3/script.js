const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

const akanNames = {
m: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
f:['Akosua','Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

};
function calculateDayOfWeek(year, month, day) {
  const CC = Math.floor(year/100) ;
  const YY = year % 100;
  const  d = Math.floor((CC/4) - 2 * CC + YY + Math.floor(YY / 4) + Math.floor((26 * (month + 1)) / 10) + day) % 7;
  return (d + 7) % 7;
  
}
function getAkanName(year, month, day, gender) {
    if (month < 1 || month > 12) {
    return "Invalid month!Enter valid month (1-12)";    
    }
if (day < 1 || day > 31) {
    return "Invalid Day!Enter valid day (1-31)";
}
function calculateDayOfWeek(year, month, day, gender) {
    const dayOfWeek = calculateDayOfWeek(year, month, day);
    if (gender ==='m') return akanNames.m[dayOfWeek];
        
    if (gender === "f") return akanNames.f[dayOfWeek];
            return "Invalid gender";
        }
    }


const form = document.getElementById("akanForm");
form.addEventListener("submit", function (event){
    event.preventDefault();

    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const day = parseInt(document.getElementById("day").value);
    const gender = document.querySelector('input[name="gender"]:checked')
    if(!gender) {
        document.getElementById("result").innerText = "Please select a gender";
        return;
    }
    const result = getAkanName(year, month, day, gender.value);
    
   document.getElementById("result").innerText = result;
 });
console.log(`Year: ${year}, Month: ${month}, Day: ${day}, Gender: ${gender}`);
console.log(`Calculated day of the week: ${dayOfWeek}`);

rl.question("Enter your year of birth: ", (year)=> {
    rl.question("Enter your month of birth (1-12): ", (month) => {
        rl.question("Enter your day of birth (1-31): ", (day)=>{
            rl.question("Enter your gender(m/f): ", (gender) => {
                const akanName = getAkanName(parseInt(year), parseInt(month), parseInt(day), gender.toLowerCase());
                console.log(`Your Akan name is: ${akanName}`);
                rl.close();

            });
            });
        });
    });
