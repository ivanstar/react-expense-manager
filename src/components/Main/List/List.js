import React, {useContext} from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import {Delete, MoneyOff, AttachMoney} from '@material-ui/icons';

import useStyles from './styles';
import {ExpenseTrackerContext} from '../../../context/context'

const List = () => {
    const classes = useStyles();
    const {deleteTranscation, transactions } = useContext(ExpenseTrackerContext);
    
    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            {transaction.type === 'Income' ? 
                                <AttachMoney className={classes.avatarIncome}/> : 
                                <MoneyOff className={classes.avatarExpense}/>}
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTranscation(transaction.id)}>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
            
        </MUIList>
    )
}

export default List
