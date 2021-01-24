
module.exports.getDate=getDate;    //exporting the function & not calling it.

function getDate(){
var options={weekday:"long",month:"long",day:"numeric"};
let currentDate=new Date();            //currentDay is Date object
console.log(currentDate.getDate());       //Date value
console.log(currentDate.getDay());          //0-6
console.log(currentDate);
let day=currentDate.toLocaleDateString("en-US",options); 
return day;
}

module.exports.getDay=getDay;        //exporting the function

function getDay(){
    var options={weekday:"long"};
    let currentDate=new Date();            //currentDay is Date object
    
    let day=currentDate.toLocaleDateString("en-US",options); 
    return day;
    }

console.log(module);