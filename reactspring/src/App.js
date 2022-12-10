import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListReact from './components/ListReact';
import CreateReact from './components/CreateReact';
import UpdateReact from './components/UpdateReact';
import ViewReact from './components/ViewReact';

function App() {
  return ( 
    <div>
      <Router>
           <HeaderComponent />
            <div className="container">
              <Switch> 
                <Route exact path = "/" component = {ListReact}></Route>
                <Route path = "/react" component = {ListReact}></Route>
                <Route path = "/addreact/" component = {CreateReact}></Route>
                <Route path = "/updatereact/:id" component = {UpdateReact}></Route>
                <Route path = "/viewreact/:id" component = {ViewReact}></Route>
             </Switch>
            </div>
           <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
