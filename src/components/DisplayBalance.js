import React from 'react'
import { connect } from 'react-redux';

class displayBalance extends React.Component {
    renderList() {
        return this.props.balance.map((balance) => {
            return (
                <div className="item" key={balance.balance}>
                    <button>
                        Select
                    </button>
                    <div className="content">{balance.balance}</div>
                </div>
                
            )
        })
    }
    render(){

        return <div>{this.renderList()}</div>
        
    }
}

const mapStateToProps = state => {
    return { balance: state.balance }
}

export default connect(mapStateToProps)(displayBalance)
