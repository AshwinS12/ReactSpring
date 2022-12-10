import React, { Component } from 'react';
import ReactService from '../services/ReactService';

class ListReact extends Component {
    constructor(props){
        super(props)
        this.state={
            reacts:[]
        }
        this.addreact=this.addreact.bind(this);
        this.editreact = this.editreact.bind(this); 
        this.deletereact= this.deletereact.bind(this);
    }
    deletereact(id){
    ReactService.deleteReact(id).then ( res => {
    this.setState({reacts: this.state.reacts.filter(react => react.id !== id)});
      });
    }
    viewreact(id){
        this.props.history.push(`/viewreact/${id}`);
    }
    editreact(id){
        this.props.history.push(`/updatereact/${id}`);
    }

    componentDidMount(){
        ReactService.getReact().then((res)=> {
this.setState({reacts:res.data});
        });
    }
    addreact(){
        this.props.history.push('/addreact');
    }
    render() {
        return (
            
            <div>
                <div className="row">
                <h2 className="text-center">React List</h2>
                </div>
                <form>
                <div className="row">
                <button className="btn btn-primary" onClick={this.addreact}>Add React</button>
                </div>
                </form>
                <br></br>              
                <div className="row">
                    <table className= "table table-striped table-bordered">
                        <thead>
                            <tr>
                                 <th>Insurance Name</th>
                                 <th>Insurance Code</th>
                                 <th>Insurance Email</th>
                                 <th>Insurance Amount</th>
                                 <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.reacts.map(
                                    react=>
                                    <tr key = {react.id}>
                                        <td>{react.name}</td>
                                        <td>{react.code}</td>
                                        <td>{react.email}</td>
                                        <td>{react.amount}</td>
                                        <td>
                                            <form>
                                       <td> <button onClick={()=> this.editreact(react.id)} className="btn btn-info">Update</button> </td>
                                        <td><button  onClick={ ()=> this.viewreact(react.id)} className = "btn btn-info">View</button></td>
                                        </form>
                                        <button  onClick={ ()=> this.deletereact(react.id)} className = "btn btn-danger">Delete</button>
                                        </td> 
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
               
            </div>
           
        );
    }
}

export default ListReact;