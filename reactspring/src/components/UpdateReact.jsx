import React, { Component } from 'react';
import ReactService from '../services/ReactService';

class UpdateReact extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            name:'',
            code:'',
            email:''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changecodeHandler= this.changecodeHandler.bind(this);
        this.changeemailHandler=this.changeemailHandler.bind(this);
        this.updatereact = this.updatereact.bind(this);
    
    }
    componentDidMount(){
        ReactService.getreactbyid(this.state.id).then((res)=>{
            let react = res.data;
            this.setState({ name: react.name,
            code: react.code, email: react.email});
        });
    }
    updatereact = (e)=>{
        e.preventDefault();
        let react = { name: this.state.name, code: this.state.code, email: this.state.email};
        console.log('react => '+ JSON.stringify(react));
        ReactService.updatereact(react,this.state.id).then(res=>{
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
    cancel(){
        this.props.history.push("/react");
    }
    render() {
        return (
            <div>
               
                <div className="container">
                    <div className = "row">
                        <div className= "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Update React</h3>
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
                                    <button className="btn btn-success" onClick={this.updatereact}>Save</button>
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

export default UpdateReact;