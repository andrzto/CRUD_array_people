import { useState } from 'react'
import './App.css'
import { People } from './components/People';

function App() {
 
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Andrés Torres",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar5.png"
    },
    {
      id: 2,
      name: "Ronald Rios",
      role: "QA",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png"
    },
    {
     id: 3,
      name: "Natalia Rodriguez",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png"
    },
  ]);

  return (
    <div>
       <People
        people={people}
        setPeople={setPeople}
      />
    </div>
  )
}

export default App
