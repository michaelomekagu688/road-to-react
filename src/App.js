
import React from "react";

//const title = 'Bitch'

// function getTitle(title){
//   return title
// }

// const numberss = [1,2,3,4,5];

//  const newNumbers = numberss.map(function(number){
//   return (
//     number
//   )
//  })

// const details = [
//   {
//     id: 0,
//     name: "michael omekagu",
//     age:34,
//     course:" Electrical Engineering"
//   },
//   {
//     id: 1,
//     name: "Titi Chukwu",
//     age:12,
//     course:" Nursing"
//   },
//   {
//     id: 2,
//     name: "Kiki Lade",
//     age:21,
//     course:" Medical Labourtory Science"
//   },
//   {
//     id: 3,
//     name: "Putu Chukwu",
//     age:30,
//     course:"Pilot"
//   },
// ]

// const detailDiv = details.map(function(soloDetail){
//   return(
//     <div key={soloDetail.id}> 
//       <div> Hey i am {soloDetail.name}, and i am {soloDetail.age} years old. </div>
//     </div>
//   )
// })


const stories = [
  {
    title: "React",
    url: 'https://reactjs.org/',
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redus",
    url: 'https://redus.js.org/',
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {

  const [firstValue, secondValue] = React.useState('');

  const handle = (event) => {
     secondValue(event.target.value);
  }


  return(
    <div>
      <h1> Grubbly </h1>
      <Search vals={firstValue} onSec={handle}/>
    </div>
  )
}

const Search = (props) => {

  return(
    <div>
      <label htmlFor="search"> Search </label>
      <input type="text" id="serch" onChange={props.onSec} />
      <div> Searching for {props.vals} </div>
    </div>
  )
  
}

export default App;
