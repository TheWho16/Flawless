import React from 'react';
import style from './Calculator.module.css'
import CalculatorComponent from './CalculatorComponent'

class Calculator extends React.Component {

    constructor() {
        super();
        this.state = {
            result: null,
            namber1: null,
            namber2: null
        };
        this.showResult = this.showResult.bind(this)
        this.handleNumber1Change = this.handleNumber1Change.bind(this)
        this.handleNumber2Change = this.handleNumber2Change.bind(this)
    }
    debugger;

    showResult(namber1, namber2) {
        this.setState({ result: namber1 + namber2 })

    }
    handleNumber1Change(e) {
        let num1= +e.currentTarget.value;
        this.setState({ namber1:  num1 })
        let namber2 = this.state;
        this.showResult(num1, namber2);

    }
    handleNumber2Change(e) {
        let num2= +e.currentTarget.value;

        this.setState({ namber2: num2 })
        let namber1 = this.state;
        this.showResult(namber1, num2);

    }

    render() {

        return <>
            <div className={style.calculator}>
                <div>
                    <input value={this.state.namber1} onChange={this.handleNumber1Change} />
                </div>
                <div>
                    <select name="" id="">
                        <option value="+"> + </option>
                        <option value="-"> - </option>
                    </select>
                </div>
                <div>
                    <input value={this.state.namber2} onChange={this.handleNumber2Change} />
                </div>
                <div>

                </div>

                <div className={style.result}>
                    Rezult: <span>{this.state.namber1}+{this.state.namber2}={this.state.result}</span>
                </div>
                <div>
                    <CalculatorComponent/>
                </div>
            </div>
        </>
    }
}




export default Calculator;