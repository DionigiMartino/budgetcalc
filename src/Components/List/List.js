import React from 'react';
import Aux from '../../Hoc/Hoc';

// List Element

import ListEarn from './ListEarn/ListEarn'
import ListExp from './ListExp/ListExp'


import listStyle from './List.module.css'

const List = (props) => {
    return(
        <Aux>
            <div className={listStyle.ListCont}>
                <ListEarn earnings={props.earnings} />
                <ListExp expenses={props.expenses} />
            </div>
        </Aux>
    )
}

export default List;