import React,{ Component } from 'react';
import { 
  Button, 
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap';

import { connect } from "react-redux";
import * as actions from '../Action/index'

class Sreach extends Component{
  constructor(props){
    super(props)
    this.state = ({
      key: ''
    })

  }
  onChange = (event) =>{
    var target = event.target
    var name = target.name
    var value = target.value
    this.setState({
      [name] : value
    })
    
  }
  onSubmit = (event) => {
    this.props.findName(this.state.key)
    // this.props.sreach(this.state.key)
    event.preventDefault()
  }
  
  render(){
    
    return (
      <form onSubmit ={this.onSubmit} className = "col-lg-4 " >
        <InputGroup >
            <Input placeholder="Nhập từ khóa..." name = "key" value = {this.state.key} onChange = {this.onChange}/>
            <InputGroupAddon addonType="append"><Button color="info" type = "submit">Tìm</Button></InputGroupAddon>
        </InputGroup>
      </form>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return{
    findName : (name) =>{
      dispatch(actions.findName(name))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sreach);
