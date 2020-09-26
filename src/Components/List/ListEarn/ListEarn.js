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
    color: rgb(19, 190, 19);;
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 5%;
`

const ListEarn = (props) => {
    let earning = props.earnings.map((el, id) => {
        return <ListEl key={id}>{el.text} - {el.numb} €</ListEl>
    });

    return (
        <Aux>
            <List>
                {earning}
            </List>
        </Aux>
    )
}

export default ListEarn;