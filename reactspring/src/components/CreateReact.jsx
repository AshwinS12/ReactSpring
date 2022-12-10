import React, { Component } from 'react';
import ReactService from '../services/ReactService';

class CreateReact extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            code:'',
            email:'',
            amount:''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changecodeHandler= this.changecodeHandler.bind(this);
        this.changeemailHandler=this.changeemailHandler.bind(this);
        this.changeamountHandler=this.changeamountHandler.bind(this);
        this.savereact = this.savereact.bind(this);
    
    }
    savereact = (e)=>{
        e.preventDefault();
        let react = { name: this.state.name, code: this.state.code, email: this.state.email, amount: this.state.amount};
        console.log('react => '+ JSON.stringify(react));
        ReactService.addreact(react).then(res =>{
            this.props.history.push('/react');
        });
    }
    changenameHandler=(event)=>{
        this.setState({name:event.target.value});
    }
    changecodeHandler=(event)=>{
        this.setState({code:event.target.value});
    }
    changeemailHandler=(event)=>{
        this.setState({email:event.target.value});
    }
    changeamountHandler=(event)=>{
        this.setState({amount:event.target.value});
    }
    cancel(){
        this.props.history.push("/react");
    }
    render() {
        return (
            <div> 
                <br></br>
                <div className="container">
                    <div className = "row">
                        <div className= "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Add Policy</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Name</label>
                                        <input placeholder = "Name" name = "name" className = "form-control"
                                        value = {this.state.name} onChange={this.changenameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Code</label>
                                        <input placeholder = "Code" name = "code" className = "form-control"
                                        value = {this.state.code} onChange={this.changecodeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Email Id</label>
                                        <input placeholder = "Email" name = "email" className = "form-control"
                                        value = {this.state.email} onChange={this.changeemailHandler}/>
                                    </div> 
                                    <div className = "form-group">
                                        <label>Amount</label>
                                        <input placeholder = "Amount" name = "amount" className = "form-control"
                                        value = {this.state.amount} onChange={this.changeamountHandler}/>
                                    </div><br></br>
                                   
                                    <button className="btn btn-success" onClick={this.savereact}style = {{marginLeft:"10px"}}>Save</button>
                                    <button className = "btn btn-danger" onClick={this.cancel.bind(this)}style = {{marginLeft:"10px"}}>Cancel</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateReact;