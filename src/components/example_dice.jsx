import {Component} from 'react';
// import DiceCounter from "./dice_counter.jsx";
// import probability_chart from "./probability_chart.jsx";

const get_apiURL = 'http://localhost:5025/api/Roll'
const out_tag = 'example_output'
const trial_length = 100;

class ExampleDiceTable extends Component {



    render() {
        function get_example() {
            fetch(get_apiURL)
                .then((response) => {
                    if (!response.ok) throw new Error(
                        `HTTP error! status: ${response.status} - ${response.statusText}`
                    )
                    //console.log(response.json())
                    return response.json()
                })
                .then((data) => {
                    //console.log(data)
                    data.forEach((roll) => {
                        // for (const key in roll.diceSet) {
                        //     conso6le.log(`D${key.toString()}: ${roll.diceSet[key].toString()}`)
                        // }
                        console.log(run_trials(roll.diceSet()))
                        const li = document.createElement('li')
                        li.innerHTML = `${roll.id}: ${roll.diceSet}`

                        document.getElementById(out_tag).append(li)
                    })

                })
        }

        function run_trials(diceSet) {
            for (let i = 0; i < trial_length; i++)
            {
                let sum = 0;
                for (const key in diceSet) {
                    console.log(`D${key.toString()}: ${diceSet[key].toString()}`)
                }

            }
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        return (
            <div>
                <button type="button" onClick={get_example}>Roll Example Dice</button>
                <text id="example_output"/>
            </div>
        );
    }
}

export default ExampleDiceTable;