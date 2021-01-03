import React,{ Component } from 'react';
import { 
  Table
} from 'reactstrap';
import  TaskItem  from "./TaskItem";
import { 
  Button, 
} from 'reactstrap';
import { connect } from "react-redux";
import * as actions from '../Action/index'

class TaskList extends Component{
  constructor(props){
    super(props)
    this.state = {
      filterName : '',
      filterStatus : -1
    }
  }
  onChange = (event) =>{
    var target = event.target
    var name = target.name
    var value = target.value
    this.props.filterTable({
      name : name === 'filterName' ? value : this.state.filterName,
      status : name === 'filterStatus' ? value : this.state.filterStatus
    })
    this.setState({
      [name] : value
    })
  }
  ClearFiler = () =>{
    this.setState({
      filterName : '',
      filterStatus : -1
    })
    this.props.filterTable({
      name : "",
      status : -1
    })
  }
  render(){
    const {filterName, filterStatus} = this.state
    var {tasks,filter,findName,sortTask} = this.props;
    if(filter){
      if(filter.name){
        tasks = tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filter.name) !== -1
        })
        
      }
      tasks = tasks.filter((task) =>{
        if(filter.status === -1){
          return task
        }
        else{//neu else if(filter.status) !== null, !== undifi , !== 0
          return task.status === (filter.status === 0 ? true : false)
        }
      })
    }
    // find Name
    if(findName){
      tasks = tasks.filter((task)=>{
        return task.name.toLowerCase().indexOf(findName) !== -1
      })
    }
    // sort
    if(sortTask.by === "name"){
      tasks.sort((a,b) => {
        if(a.name > b.name) return sortTask.value
        if(a.name <b.name) return -sortTask.value
        else return 0
      })
    
    }
    else if (sortTask.by === "status"){
      tasks.sort((a,b) => {
        if(a.status > b.status) return sortTask.value
        if(a.status <b.status) return -sortTask.value
        else return 0
      })
    
    }
    const elmTasks = tasks.map((task,index) => {
      return <TaskItem 
                key={task.id} 
                index = {index} 
                task={task}
              ></TaskItem>
    })
    return (
        <Table className = "mt-4" borderless>
            <thead>
            <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Trạng Thái</th>
                <th>Hành động</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                  <Button 
                    color="info"
                    onClick = {this.ClearFiler}
                    >
                      Clear Filter
                  </Button>
                </td>
                <td>
                  <input name ="filterName" value = {filterName} onChange = {this.onChange}>
                  </input>
                </td>
                <td>
                  <select 
                    name="filterStatus" 
                    value = {filterStatus} 
                    onChange = {this.onChange}>
                      <option value={-1} >All</option>
                      <option value={0}>Kich hoat</option>
                      <option value={1}>An</option>
                  </select>
                </td>
            </tr>
            {elmTasks}
            </tbody>
        </Table>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    tasks : state.tasks,
    filter : state.filter,
    findName : state.findName,
    sortTask : state.sortTask
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return{
    filterTable : (filter) =>{
      dispatch(actions.fliterTable(filter))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
