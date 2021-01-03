import React,{ Component } from 'react';

import Sreach from "./Sreach"
import Sort from "./Sort"
class Control extends Component{
  render(){
    return (
      <div className="Control">
            <div className="d-flex flex-row" >
              <Sreach ></Sreach>
              <Sort ></Sort>
            </div>
      </div>
    );
}
}

export default Control;
