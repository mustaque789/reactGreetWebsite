import React from "react";


function App() {
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
let currDate = new Date(2020, 5, 2, 15);
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};

if (currDate > 1 && currDate < 12) {
greeting = "Good Morning";
cssStyle.color = "#00b894";
} else if (currDate >= 12 && currDate < 20) {
greeting = "Good Afternoon";
    cssStyle.color = "orange";
} else if (currDate >= 20 && currDate <= 24) {
greeting = "Good Night";
  cssStyle.color = "black";
}

return (
    <>
    <div>
    <h1> Hello sir, <span style={cssStyle}> {greeting} </span>
    </h1>
    </div>
    </>
    );
    
}

export default App;



// const date= new Date(2023, 8, 5, 12);  // year month day hour
// const hour= date.getHours();
// const inline={
//   color:"Green"
// }

// function time(a){
// if(a>=1&& a<12){
//   return 'Good Morning';

// }
// else if(a >=12 && a<20){
//   return 'Good Afternoon';

// }
// else{
//   return 'Good Night';
 
// }
// }

// function App(){
//   return(
//     <>
//   <h1> Hello, <span style={inline}>{(time(hour))}</span></h1>
//     </>
//   )
// }
