import React, { Component } from 'react';
import ReactService from '../services/ReactService';

class ViewReact extends Component {
   
        constructor(props){
            super(props)
            this.state = {
                id: this.props.match.params.id,
                react: {}
            }
        }
        componentDidMount(){
            ReactService.getreactbyid(this.state.id).then(res => {
                this.setState({react :res.data});

            })
        }
        render() {
        return (
            <div>
                <br></br>
              <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center">View React Details</h3>
                <div className = "card-body">
                <div className = "row">
                    <label>React Name:</label>
                    <div>{this.state.react.name}</div>
                </div>
                <div className = "row">
                    <label>Code:</label>
                    <div>{this.state.react.code}</div>
                </div>
                <div className = "row">
                    <label>Email:</label>
                    <div>{this.state.react.email}</div>
                </div>
                <div className = "row">
                    <label>Amount:</label>
                    <div>{this.state.react.amount}</div>
                </div>
              </div>
              </div>
            </div>
        );
    }
}

export default ViewReact;