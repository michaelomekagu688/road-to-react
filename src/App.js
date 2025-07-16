import logo from './logo.svg';
import './App.css';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

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

const details = [
  {
    id: 0,
    name: "michael omekagu",
    age:34,
    course:" Electrical Engineering"
  },
  {
    id: 1,
    name: "Titi Chukwu",
    age:12,
    course:" Nursing"
  },
  {
    id: 2,
    name: "Kiki Lade",
    age:21,
    course:" Medical Labourtory Science"
  },
  {
    id: 3,
    name: "Putu Chukwu",
    age:30,
    course:"Pilot"
  },
]

const detailDiv = details.map(function(soloDetail){
  return(
    <div key={soloDetail.id}> 
      <div> Hey i am {soloDetail.name}, and i am {soloDetail.age} years old. </div>
    </div>
  )
})


function App() {

  return (
    <div className="App">
      <div> {detailDiv} </div>
      <div> Hello world </div>
        
      {/* how to comment */}
    </div>
  );
}

export default App;
