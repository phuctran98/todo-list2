import React,{ Component } from 'react';
import { 
  Alert, 
  Button, 
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './TaskForm.css'
import { connect } from "react-redux";

import * as actions from "../Action/index";
class TaskForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      name: '',
      status : true
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount(){
    const taskEditItem  = this.props.editItem
    if(taskEditItem){
      this.setState({
        id: taskEditItem.id,
        name : taskEditItem.name,
        status : taskEditItem.status
      })
    }
  }
  componentWillReceiveProps(nextProps){
    console.log( nextProps)
    if(nextProps && nextProps.editItem){
      this.setState({
        
        id: nextProps.editItem.id,
        name : nextProps.editItem.name,
        status : nextProps.editItem.status
      })
    }else if(nextProps && nextProps.editItem === null){
      this.setState({
        id:'',
        name: '',
        status : true
      })
    }
  }
  onChange = (event) => {
    var target = event.target
    var name = target.name
    var value = target.value
    if(name === "status"){
      value = target.value === "true" ? true : false
    }
    this.setState({
      [name] : value
    })
  }
  onSubmit(event){
    event.preventDefault()
    this.props.onSaveTask(this.state)
    this.props.listAll()
    this.onClear()
    this.props.isCloseTaskForm()
  }
  onClear = () =>{
    // console.log("onclear")
    this.setState({
      name: '',
      status : false
    })
  }
  render(){
    var {editItem} = this.props
    console.log(editItem)
    return (
      <div className="TaskForm">
        <Alert color="primary" >
          {editItem.id !== "" ? "Cap nhap" : "Them cong viec"}
          <FontAwesomeIcon 
            className="ml-2" 
            icon={faTimes} 
            onClick={this.props.isCloseTaskForm}
            >
          </FontAwesomeIcon>
        </Alert>
            <form onSubmit={this.onSubmit}>
            <h6 >Tên:</h6>
            <input className="mb-2" 
              value={this.state.name} 
              onChange={this.onChange}
              name="name"
              >
            </input>
            <h6>Trạng thái:</h6>
            <select 
              className="status"
              name="status" 
              value={this.state.status} onChange={this.onChange}
            >
              <option value={true}>Kich hoat</option>
              <option value={false}>An</option>
            </select>
            <div className="m-3"> 
              <Button type="submit" className= "mx-2"color="success" >Lưu Lại</Button>
              <Button color="danger" onClick={this.onClear}>Hủy bỏ</Button>
            </div>
            </form>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    editItem : state.editItem
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return {// key va value
    onSaveTask : (task) => {
      dispatch(actions.saveTask(task))
    },
    listAll: () =>{
      dispatch(actions.listAll())
    },
    isCloseTaskForm : () =>{
      dispatch(actions.closeForm())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
