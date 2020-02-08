import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

//Layouts
import BaseLayout from './layouts/BaseLayout';
//Pages
import HomePages from './pages/HomePages';


function App() {
  return (
   <Router>
<BaseLayout>
<Switch>
  <Route path="/" component={HomePages} />
 
</Switch>
</BaseLayout>
   </Router>
      
   
  );
};


//Route properties
//path
//component
//exact
//render: element React
//children: react elements inside route


export default App;
