import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DisplayUser from './pages/displayUsers/DisplayUser'


class App extends React.Component {
  render() {
    return(
      <div className="container">
        {/* <BrowserRouter> */}
        <DisplayUser />
          {/* <Image src={} /> */}
          {/* <NavBar /> */}
          {/* <SearchBar /> */}
          {/* <Switch>
            <Route  exact path="/" render={ () => <HomePage src={}  />} />
            <Route  exact path="/users" component={DisplayUser} />
            <Route exact path="/edit" render={ () => <Edit User />}  />

          
          </Switch> */}
        {/* </BrowserRouter> */}
      </div>
    ) 
  }
}

export default App;
