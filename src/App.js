import {Grid} from '@material-ui/core';
import Details from './components/Details/Details'
import Main from './components/Main/Main'
import { Provider } from './context/context'

import useStyles from './styles'
function App() {
  const classes = useStyles();
  return (
    <div>
      <Provider>
        <Grid className={classes.grid} container space={0} justify="center" alignItems="center" style={{height:'100vh'}}>
            <Grid item xs={12} sm={4}>
                <Details title="Income"/>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Main />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Details title="Expense"/>
            </Grid>
        </Grid>
      </Provider>
     
    </div>
  );
}

export default App;
