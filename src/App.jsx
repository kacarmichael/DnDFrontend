// import { useState } from 'react'
import './App.css'
import DiceTable from "./components/dice_table.jsx";
//import probability_chart from "./components/probability_chart.jsx";
import ExampleDiceTable from "./components/example_dice.jsx";

function App() {
  // const [count, setCount] = useState(0)
    //const get_apiURL = 'http://localhost:5025/api/Roll';
    // const post_apiURL = 'http://localhost:5025/api/Roll';

    // function get_example() {
    //     fetch(get_apiURL)
    //     .then((response) => {
    //         if (!response.ok) throw new Error(
    //             `HTTP error! status: ${response.status} - ${response.statusText}`)
    //         return response.json()
    //     })
    //     .then((data) => {
    //         console.log(data)
    //         document.getElementById("example_output").innerHTML = ''
    //         data.forEach((roll) => {
    //             const li = document.createElement('li')
    //             li.innerHTML = `${roll.id}: ${roll.rollSum}`
    //             document.getElementById("example_output").appendChild(li)
    //             document.getElementById("example_output").appendChild(probability_chart(roll.diceSet, roll.rollSum))
    //         })
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }

    return (
        <>
            <div>
                <ExampleDiceTable/>
                <DiceTable/>
            </div>
        </>
    )
}

export default App
