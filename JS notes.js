//moduel2 T&F

numberOfRunnersForTeam1 = 5;
numberOfRunnersForTeam2 = 0;
numberOfRunnersForTeam3 = undefined;

let doesTeam1HaveRunners = Boolean(numberOfRunnersForTeam1);
//doesTeam1HaveRunners will be true beacuse 5 is truthy

let doesTeam2HaveRunners = Boolean (numberOfRunnersForTeam2);
//doesTeam2HaveRunners will be false because 0 is falsy

let doesTeam3HaveRunners = Boolean (numberOfRunnersForTeam3);
//doesTeam3HaveRunners will be false because undefined is falsy

team1.name ='Team Warriors';
team2.name = '';

let isTeam1NameValid = Boolean(team1.name);
//this will be true beacause 'Team Warriors' is truthy
let isTeam2NameValid = Boolean(team2.name);
//this will be false beacause an empty string is falsy

//using ! before something means 'Not' 
let isTeamCheckedIn = false;
let shouldShowProgressBar = !isTeamCheckedIn;
//because isTeamCheckedIn is false shouldShowProgessBar will evaluate to true because of '!' making it evaluate the opposite

/*The check-in system should perform a final check at the end to ensure all the team has met the requirements. This is the last chance to check for errors, so we want to be thorough. To successfully check-in, a team should have the following:

a team name
successfully paid
the number of runners is greater than 0 and less than 12
To check all of these values, we can do the following: */

let teamName= "Weekend Warriors";
let teamHasPaid = true;
let teamRunnerCount= 8;

let isTeamCheckedIn = teamName && teamHasPaid && (teamRunnerCount > 0) && (teamRunnerCount<=12)
//evaluates to true if all conditions are truthy

let extraProductPackage = undefined // the team did not purchase a package
extraProductPackage = extraProductPackage || "None" // results in "none" since extraProductPackage is falsy

//complex OR statements\
let teamCount = 6;
let averageMileTimeInMinutes = 6.5;

let isTeamRunnerCountSufficient = (averageMileTimeInMinutes < 7 && teamCount >=6) || (averageMileTimeInMinutes >=7 && teamCount >= 12);
//this will be true because the first OR is truthy
let teamCount= 8;
let averageMileTimeInMinutes = 10;
let isTeamRunnerCountSufficient = (averageMileTimeInMinutes <7 && teamCount >= 6 )||(averageMileTimeInMinutes >= 7 && teamCount >= 12);
//this will result in false because the averagemiletimeinminutes is above 7 but teamCount is not over 12

let teamCount = 10;

if (teamCount < 12) {
    //in this case the statment would be true and the code vlock will run
    console.log("Inform the team that they are not a full team.");
}

let name = "";
if (!name) {console.log("Ask the team captain to update the runners name.");
}

//using if statement to set a value

let oldestAge = 17
if (oldestAge < 18 ) {
    teamDivision = 'junior' ;
}
console.log(teamDivision); //always prints 'undefined' 
//to fix the code place the declaration of teamDivision was inside the if statement

let oldestAge = 17
let teamDivision;//prints junior bc of this line
if (oldestAge < 17 ){
    teamDivision='junior';
}
console.log(teamDivision); //prints junior bc of line 78

//if else statements
let oldestAge = 17;
let youngestAge = 16;
let teamDivision;

if (oldestAge<18) {
    teamDivision='junior';
} else if (youngestAge < 40) {
    teamDivision = 'open';
}
else {
    teamDivision='master';
}
console.log(teamDivision);//prints junior

let oldestAge = 17; // this is a junior division team...
let youngestAge = 16; 
let teamDivision;

if (youngestAge < 40) { // ...but we check this condition too early
  teamDivision = 'open'; 
} else if (oldestAge < 18) { 
	teamDivision = 'junior'; // 💥 ALERT: this line NEVER runs, since all values less than 18 are also less than 40
} else {
	teamDivision = 'master';
}

console.log(teamDivision); // prints 'open', but it is a junior team

let teamCount = 6;
let averageMileTimeInMinutes = 6.5;

if (averageMileTimeInMinutes < 7) {
    if (teamCount < 6) {
        console.log ("inform the team that they are not a full team.");
    
} else {
    console.log("This is a full team. Move onto the next step.");
}
} else {
    if (teamCount < 12) {
        console.log("Inform the team that they are not a full team");
    } else {
    console.log("This is a full team. Move onto the next step.");
    }
}




