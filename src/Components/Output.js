import React, {Component} from 'react';

class Output extends Component{
    constructor(){
        super(props);
        this.state = {
            value: props.value
        }
    }
    render(){
        return(
            <div className = "output">
                {this.props.value}
            </div>
        )
    }
}
export default Output;
