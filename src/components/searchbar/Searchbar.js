import React, {Component}from 'react'
import './search.css'
import allUsers from '../../data/allUsers'


class Searchbar extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state={
      search: '',
      showUsers: false,
    };

  }

  handleChange(e){
    this.setState({
      search: e.target.value,
      showUsers : !this.state.showUsers
      });
  }
  
  

  render(){
    
    const items = allUsers.filter((data)=>{
      if(this.state.search === null)
          return data
      else if(data.Name.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      } 
     
    }).map(data => {
     return (

      <div>
        
          <ul>
            <li>{data.Name}</li>
          </ul>
        
      </div>
     )
    })
    console.log({items})

    return(
      <>
        <div className="searchbar-wrap">
          <div className="search-bar">
            <input type="text" 
              className="searchbar-text" 
              placeholder="What are you looking for?"  
              
              onChange={
              this.handleChange
              }/>
            
              <button type="submit" className="searchbar-Button"
              
              >
                <i className="fa fa-search"></i>
              </button>
              
            </div>
        </div>
      
            <div id="overlay">{this.state.showUsers ? items : ''}</div>
        
        
        
      </>
    )
  }
}

export default Searchbar
