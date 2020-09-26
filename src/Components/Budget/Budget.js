import React from 'react';
import styles from './Budget.module.css'
import Aux from '../../Hoc/Hoc';

const Budget = props => {
    let earn = props.earning;
    let exp = props.expenses;
    let total = props.total;

    // eslint-disable-next-line
    let classes = []

    return(
        <Aux>
            <div className={styles.BudgetCont}>
                <h2>Budget Calculator</h2>

                <div className={styles.BudgetDisplay}>
                    <p className={styles.Earn}>Earnings: {earn}</p>

                    <p className={earn > exp ? classes = [styles.Total, styles.Good].join(' ') : classes = [styles.Total, styles.Bad].join(' ')}>Total: {total}</p>

                    <p className={styles.Exp}>Expenses: {exp}</p>
                </div>
            </div>
        </Aux>
    )
}

export default Budget;