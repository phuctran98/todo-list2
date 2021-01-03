import React,{ Component } from 'react';
import './TaskItem.css';
import classNames from "classnames";
import { 
  Button, 
} from 'reactstrap';
import { connect } from "react-redux";
import * as actions from '../Action/index'


class TaskItem extends Component{
  onUpdateStatus = ()=>{
    this.props.changeStatusItem(this.props.task.id)
  }
  onDeleteItem = () =>{
    this.props.deleteStatusItem(this.props.task.id)
    this.props.onCloseForm()
  }
  onUpdate = () =>{
    this.props.onOpenForm()
    this.props.onEditItem(this.props.task)
  }
  render(){
    var {task,index} = this.props
    return (
        <tr>
            <th scope="row">{index+1}</th>
            <td>{task.name}</td>
            <td 
              onClick = {this.onUpdateStatus}
              className = {classNames({active : task.status === true} , { unactive:  task.status === false })}>{task.status ? 'kich hoat' : 'an'}</td>
            <td>
              <Button color="info" onClick = {this.onUpdate}>Sửa</Button>
              <Button color="danger" className="ml-2" onClick={this.onDeleteItem}>Xóa</Button>
            </td>
        </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return{ 
    editItem : state.editItem
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return{
    changeStatusItem : (id) =>{
      dispatch(actions.changeStatusItem(id))
    },
    deleteStatusItem : (id) =>
    {
      dispatch(actions.deleteStatusItem(id))
    },
    onCloseForm : () =>{
      dispatch(actions.closeForm())
    },
    onOpenForm : () =>{
      dispatch(actions.openForm())
    },
    onEditItem : (task) =>{
      dispatch(actions.editItem(task))
    },
    onClear : (task)=>{
      dispatch(actions.editItem(task))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);
