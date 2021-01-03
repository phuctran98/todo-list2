import './App.css';
import React,{ Component } from 'react';
import { 
  Button, 
} from 'reactstrap';
import TaskForm from "./Component/TaskForm";
import Control from "./Component/Control";
import TaskList from "./Component/TaskList";

import * as actions from "./Action/index";
import { connect } from "react-redux";
// import demo from "./train/demo"


class App extends Component{
  onToggleForm = ()=>{
    var {editItem} = this.props
    if(editItem.id){
      this.props.onOpenForm()
    }
    else{
      this.props.onToggleForm()
    }
    this.props.onClear({
      id : '',
      name:'',
      status:false
    })
  }
  render(){
    var {isDisplayFrom} = this.props
    return (
      <div className="App">
        <h2>Quản lý công việc</h2>
        <div className= "row">
          <div className = {isDisplayFrom ? 'col-sm-4 col-lg-4' : ''}>
            {
              isDisplayFrom && <TaskForm onSubmit={this.onSubmit}></TaskForm>
            }   
          </div>
          <div className= {isDisplayFrom ? 'col-sm-8 col-lg-8' : 'col-sm-12 col-lg-12'} >
            <div className="d-flex justify-content-start m-2 ml-3">
              <Button color="info" onClick={this.onToggleForm}>Thêm công việc</Button>
            </div>
            <Control>
            </Control>
            <TaskList>
            </TaskList>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{ 
    editItem : state.editItem,
    isDisplayFrom : state.isDisplayFrom
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return{
    onToggleForm : () =>{
      dispatch(actions.toggleForm())
    },
    onOpenForm : () => {
      dispatch(actions.openForm())
    },
    onCloseForm : () => {
      dispatch(actions.closeForm())
    },
    onClear : (task)=>{
      dispatch(actions.editItem(task))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
