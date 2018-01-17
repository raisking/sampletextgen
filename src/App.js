import React, { Component } from 'react';
import './App.css';
import Output from './Components/Output';
import Select from './Components/Controls/Select';
import Text from './Components/Controls/Text';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: ''
    }
  }
  
  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get('http://hipsterjesus.com/api?paras='+ this.state.paras + '&html' + this.state.html)
      .then((response) =>{
        this.setState({text: response.data.text}, function(){
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

showHtml(x){
  this.setState({html: x}, this.getSampleText);
}
changeParas(number){
  this.setState({paras: number}, this.getSampleText);
}

  render() {
    return (
      <div className="App container">
      <h1>React JS Sample Text Generator</h1>
      <hr />
      <form class="form-inline">
         
          <div class="form-group">  
            <label>Paragraphs: </label>
            <Text value={this.state.paras}  onChange ={this.changeParas.bind(this)}/>
            <option value ="true">Yes</option>
            <option value ="false">No</option>
          </div>
          <div class="form-group">  
            <label>IncludeHTML: </label>
            <Select value={this.state.html}  onChange ={this.showHtml.bind(this)}/>
            <option value ="true">Yes</option>
            <option value ="false">No</option>
          </div>
      </form>
     <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
