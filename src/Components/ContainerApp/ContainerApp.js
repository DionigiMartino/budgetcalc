import React, {Component} from 'react'
import styles from './ContainerApp.module.css'

import Aux from '../../Hoc/Hoc'
import Budget from '../Budget/Budget'

class ContainerApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            optionValue: '+',
            earn: [14, 21, 214, 123 ],
            exp: [11, 5, 8, 91],
            total: null
        }
        this.changeOption = this.changeOption.bind(this)
    }

    changeOption(){
        if(this._inputElement.value === '+'){
            this.setState({optionValue: '+'})
        } else if (this._inputElement.value === '-'){
            this.setState({optionValue: '-'})
        }
    }

    componentDidMount(){
        this.updateBudget()
    }

    updateBudget(){
        let earning = this.state.earn.reduce((a, b) => {
            return a + b;
        });

        let expenses = this.state.exp.reduce((a, b) => {
            return a + b;
        })

        let totalBudget = earning - expenses;

        this.setState({
            total: totalBudget
        })
    }

    addCount(e){
        e.preventDefault();

        if(this._inputElement.value === '+'){
            console.log('Earnings: ' + this._inputNewValue.value + ' ' + this._inputNumber.value);
            this._inputNewValue.value = ''
        } else {
            console.log('Expenses: ' + this._inputNewValue.value + ' ' + this._inputNumber.value) 
        }
    }

    render(){
        // eslint-disable-next-line
        let classes = [];

        return(
            <Aux>
                <Budget earning={this.state.earn} expenses={this.state.exp} total={this.state.total}/>
                <div className={styles.ContainerWhole}>
                    <form onSubmit={(e) => this.addCount(e)} className={styles.FormCont}>
                        <select onChange={this.changeOption} ref={(a) => this._inputElement = a} className={this.state.optionValue === '+' ? classes = [styles.selectValue, styles.Green].join(' ') : classes = [styles.selectValue, styles.Red].join(' ')}>
                            <option>+</option>
                            <option>-</option>
                        </select>
                        <input ref={(a) => this._inputNewValue = a} className={this.state.optionValue === '+' ? classes = [styles.inputValue, styles.Green].join(' ') : classes = [styles.inputValue, styles.Red].join(' ')} placeholder="Add the value..." />
                        <input type="number" placeholder="Add Number..." ref={(a) => this._inputNumber = a} className={this.state.optionValue === '+' ? classes = [styles.numberValue, styles.Green].join(' ') : classes = [styles.numberValue, styles.Red].join(' ')}/>
                        <input type="submit" className={this.state.optionValue === '+' ? classes = [styles.ButtonSubmit, styles.Green].join(' ') : classes = [styles.ButtonSubmit, styles.Red].join(' ')} value="Add" />
                    </form>
                </div>
            </Aux>
        )
    }
}

export default ContainerApp;