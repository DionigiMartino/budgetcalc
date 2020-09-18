import React, {Component} from 'react'
import styles from './ContainerApp.module.css'

import Aux from '../../Hoc/Hoc'

class ContainerApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            optionValue: '+'
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

    render(){
        let classes = [];

        return(
            <Aux>
                <div className={styles.ContainerWhole}>
                    <form onSubmit={this.addCount} className={styles.FormCont}>
                        <select onChange={this.changeOption} ref={(a) => this._inputElement = a} className={this.state.optionValue === '+' ? classes = [styles.selectValue, styles.Green].join(' ') : classes = [styles.selectValue, styles.Red].join(' ')}>
                            <option>+</option>
                            <option>-</option>
                        </select>
                        <input name="inputValue" className={this.state.optionValue === '+' ? classes = [styles.inputValue, styles.Green].join(' ') : classes = [styles.inputValue, styles.Red].join(' ')} placeholder="Add the value..." />
                        <input type="submit" className={this.state.optionValue === '+' ? classes = [styles.ButtonSubmit, styles.Green].join(' ') : classes = [styles.ButtonSubmit, styles.Red].join(' ')} value="Add" />
                    </form>
                </div>
            </Aux>
        )
    }
}

export default ContainerApp;