import React, {Component} from 'react'
import styles from './ContainerApp.module.css'

import Aux from '../../Hoc/Hoc'
import Budget from '../Budget/Budget'

class ContainerApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            optionValue: '+',
            earn: [
                {text: 'Bo', numb: 14},
                {text: 'Bo2', numb: 11},
                {text: 'Bo3', numb: 20}
            ],
            earnTot: null,
            exp: [
                {text: 'Bo2', numb: 18},
                {text: 'Bo34', numb: 1},
                {text: 'Bo12', numb: 2}
            ],
            expTot: null,
            total: null
        }
        this.changeOption = this.changeOption.bind(this)
        this.renderEarn = this.renderEarn.bind(this);
        this.renderExp = this.renderExp.bind(this);
        this.renderTot = this.renderTot.bind(this);
    }

    changeOption(){
        if(this._inputElement.value === '+'){
            this.setState({optionValue: '+'})
        } else if (this._inputElement.value === '-'){
            this.setState({optionValue: '-'})
        }
    }

    componentDidMount(){
        this.renderEarn();
        this.renderExp();
        setTimeout(() => {
            if((this.state.earnTot > 0) && this.state.expTot > 0){
                this.renderTot();
            } else {
                alert('Not enough')
            }
        }, 1000)
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

    renderEarn(){
        let earnCount = this.state.earn;
        let sum = 0;
        earnCount.forEach(el => {
            sum += el.numb;
            this.setState({
                earnTot: sum
            })
        })
    }

    renderExp(){
        let expCount = this.state.exp;
        let sum = 0;
        expCount.forEach(el => {
            sum += el.numb;
            this.setState({
                expTot: sum
            })
        })
    }

    renderTot(){
        let earn = parseInt(this.state.earnTot);
        let exp = parseInt(this.state.expTot);
        let Total = parseInt(earn - exp);
        this.setState({
            total: Total
        })
    }

    render(){
        // eslint-disable-next-line
        let classes = [];

        return(
            <Aux>
                <Budget earning={this.state.earnTot} expenses={this.state.expTot} total={this.state.total} />
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