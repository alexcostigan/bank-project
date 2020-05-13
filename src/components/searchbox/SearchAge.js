import React, {Component} from 'react'
import { BsSearch } from "react-icons/bs"
import allUsers from '../../data/allUsers'

class SearchAge extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state={
          search: '',
          showUsers: false
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
            else if(data.Job.includes(this.state.search)){
                return data
            } 
           
          }).map(data => {
           return (
            <div className="user-list">
                <ul>
                  <li>{data.Name} -
                      {data.Job}
                  </li>
                 
                </ul>
            </div>
           )
          })

        return (
            <div>
                <div className="searchbox-age">
                    <div className="searchbox-display">
                        <input type="text" placeholder="Search by Job" className="searchbox-text" 
                         onChange={
                            this.handleChange
                            }
                        />
                        <a href="" className="searchbox-button">
                            <BsSearch />
                        </a>
                        {this.state.showUsers ? items : ''}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default SearchAge
