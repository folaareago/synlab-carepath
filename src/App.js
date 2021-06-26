import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Retrive from './component/Retrive';

function App () {
    return(
     
         <Router>
             <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/verify/synlab/:id' component={Retrive}/>
            <Route path='/ola' component={() => {return(
		<p>Homepage</p>
	);}}/>
             </Switch>
         </Router> 
   
        
    ) 
}


export default App 