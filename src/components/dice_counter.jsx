import {Component} from 'react';
import PropTypes from "prop-types";

class DiceCounter extends Component {
    static propTypes = {
        sides: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired
    }
    render() {
        return (
            <div>
                <label>D{this.props.sides}</label>
                <input className="dice-input" type="text" id={`D${this.props.sides}_total`} name={`D${this.props.sides}`}/>
            </div>
        );
    }
}

export default DiceCounter;