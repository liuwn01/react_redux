import React, {Component} from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.Add = this.Add.bind(this);
        this.Minus = this.Minus.bind(this);
        
        this.state = { count: this.props.initValue };

        console.log('Counter constructor ' + ' ' + this.state.count);
    }

    componentWillMount(){
        //this.updateParentValue(0,this.state.count);
        console.log('Counter componentWillMount ' + this.props.caption + ' ' + this.state.count);
    }

    componentDidMount(){
        console.log('Counter componentDidMount ' + this.props.caption + ' ' + this.state.count);
    }

    Add() {
        const ov = this.state.count;
        const nv = this.state.count +1;
        this.setState({count: nv});
        this.updateParentValue(ov,nv);
    }

    Minus(){
        const ov = this.state.count;
        const nv = this.state.count - 1;
        this.setState({count: nv});
        this.updateParentValue(ov,nv);
    }

    updateParentValue(ov,nv){
        this.props.onUpdate(ov,nv);
    }

    render() {
        console.log('Counter render ' + this.props.caption + ' ' + this.state.count);
        return (
            <div style={{margin:'20px'}}>
                <button style={{margin: '10px'}} onClick={this.Add}>+</button>
                <button style={{margin: '10px'}} onClick={this.Minus}>-</button>
                <span>count: {this.state.count}</span>
            </div>
        );
    }
}

export default Counter;