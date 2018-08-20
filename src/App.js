import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
    this.updateColor = this.updateColor.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
    
  }

  updateColor(val){
    this.setState({
      fontColor: val
    })

  

  }

  // updateSize
  updateSize(val){
    this.setState({
      fontSize: val
    })
  }

  // updateFamily
  updateFamily(val){
    this.setState({
      fontFamily: val
    })
  }

  // updateEditStatus
  updateEditStatus(val){
    this.setState({
      allowEdit: val
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle 
          updateEditStatus={this.updateEditStatus}/>
         <ColorChanger 
         updateColor={this.updateColor}
         updateEditStatus={this.state.allowEdit}/>
          <SizeChanger
          updateSize={this.updateSize}
          updateEditStatus={this.state.allowEdit}/>
          <FamilyChanger
          updateFamily={this.updateFamily}
          updateEditStatus={this.state.allowEdit}/>
        </div>
        <div className="textArea">
          <TextContainer
          color={this.state.fontColor}
          fontFamily={this.state.fontFamily}
          fontSize={this.state.fontSize}/>
        </div>
      </div>
    )
  }
}

export default App;
