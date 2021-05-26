import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form'
import List from './List/List'
import {useContext} from 'react';
import {ExpenseTrackerContext} from '../../context/context';

const Main = () => {
    const classes = useStyles();

    const {total} = useContext(ExpenseTrackerContext);
    const sign = total >= 0 ? '' : '-';
    
    return (
        <Card>
            <CardHeader title="Expense Manager" subheader=""/>
            <CardContent>
                <Typography align="center" variant="h5">
                     Total Balance {sign}${Math.abs(total).toFixed(2)}
                </Typography>
                <Divider style={{marginBottom: '20px'}}/>
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
}

export default Main
