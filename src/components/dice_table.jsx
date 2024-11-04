import {Component} from 'react';
import DiceCounter from "./dice_counter.jsx";

class DiceTable extends Component {
    render() {
        return (
            <div>
                <DiceCounter sides="4" value="0"/>
                <DiceCounter sides="8" value="0"/>
                <DiceCounter sides="10" value="0"/>
                <DiceCounter sides="12" value="0"/>
                <DiceCounter sides="20" value="0"/>
                <DiceCounter sides="100" value="0"/>
            </div>
        );
    }
}

export default DiceTable;