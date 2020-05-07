import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DisplayUser from './pages/displayUsers/DisplayUser'
import DisplayUser2 from './pages/displayUsers/DisplayUser2'
import DisplayUser3 from './pages/displayUsers/DisplayUser3'
import DisplayUser4 from './pages/displayUsers/DisplayUser4'
import DisplayUser5 from './pages/displayUsers/DisplayUser5'
import DisplayUser6 from './pages/displayUsers/DisplayUser6'
import HomePage  from './pages/homepage/HomePage';
import EditUser from './pages/edituser/EditUser';
import Searchbar from './components/searchbar/Searchbar';
import Navbar from './components/navbar/Navbar'
import { userData } from './data/Users';
import { getAllUsers } from './actions/getAction'
import { Provider } from 'react-redux';
import store from './store'


class App extends React.Component {

  componentDidMount = () => {
    store.dispatch(getAllUsers())
  }
  render() {
    return(
      <Provider store={store}>
      <div className="app-container"> 
          <Navbar />
          <Searchbar />
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/users1" component={DisplayUser} />
                <Route exact path="/users2" component={DisplayUser2} />
                <Route exact path="/users3" component={DisplayUser3} />
                <Route exact path="/users4" component={DisplayUser4} />
                <Route exact path="/users5" component={DisplayUser5} />
                <Route exact path="/users6" component={DisplayUser6} />
                <Route path="/edit/:id" component={EditUser} />
              </Switch>
            </BrowserRouter>
      </div>
      </Provider>
    ) 
  }
}

export default App;
