import React from 'react';
import styled from 'styled-components';
import Aux from '../../../Hoc/Hoc'

const List = styled.ul `
    width: 35vw;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-inline-start: 0px;
    list-style: none;
`

const ListEl = styled.li `
    color: rgb(184, 32, 32);
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 5%;
`

const ListEarn = (props) => {
    let expenses = props.expenses.map((el, id) => {
        return <ListEl key={id}>{el.text} - {el.numb} €</ListEl>
    });

    return (
        <Aux>
            <List>
                {expenses}
            </List>
        </Aux>
    )
}

export default ListEarn;