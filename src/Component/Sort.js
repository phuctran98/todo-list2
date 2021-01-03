import React,{ Component } from 'react';
import { 
    UncontrolledDropdown,
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem
} from 'reactstrap';
import { connect } from "react-redux";
import * as actions from '../Action/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
class Sort extends Component{
    onClick = (sortBy, sortValue) =>{
       this.props.sort({
           by: sortBy,
           value : sortValue
       })
    }
  render(){ 
    const {sortTask} = this.props
    return (
        <UncontrolledDropdown>
            <DropdownToggle caret  color="info">
                Dropdown
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem className = "check" onClick={()=>this.onClick('name',1)}>
                    Tên A-Z
                    {
                        (sortTask.by === "name" && sortTask.value === 1) 
                            ? 
                            <FontAwesomeIcon 
                            className="ml-2" 
                            icon={faCheck}
                            > 
                        </FontAwesomeIcon> : ''
                    }
                    
                </DropdownItem>
                <DropdownItem onClick={()=>this.onClick('name',-1)} >Tên Z-A
                    {
                        (sortTask.by === "name" && sortTask.value === -1) 
                            ? 
                            <FontAwesomeIcon 
                            className="ml-2" 
                            icon={faCheck}
                            > 
                        </FontAwesomeIcon> : ''
                    }
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={()=>this.onClick('status',1)}>Trạng thái kích hoạt
                {
                        (sortTask.by === "status" && sortTask.value === 1) 
                            ? 
                            <FontAwesomeIcon 
                            className="ml-2" 
                            icon={faCheck}
                            > 
                        </FontAwesomeIcon> : ''
                }
                </DropdownItem>
                <DropdownItem onClick={()=>this.onClick('status',-1)}>Trạng thái ẩn
                {
                        (sortTask.by === "status" && sortTask.value === -1) 
                            ? 
                            <FontAwesomeIcon 
                            className="ml-2" 
                            icon={faCheck}
                            > 
                        </FontAwesomeIcon> : ''
                }
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        sortTask : state.sortTask
    }
  }
  const mapDispatchToProps = (dispatch,props) =>{
    return{
      sort : (sort) =>{
        dispatch(actions.sort(sort))
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Sort);

