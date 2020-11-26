import React,{Component} from 'react'
import Counter from './Counter'

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
        this.state = { count: 0 };
        console.log('ControlPanel constructor ' + ' ' + this.state.count);
    }

    componentWillMount(){
        //this.updateParentValue(0,this.state.count);
        console.log('ControlPanel componentWillMount ' + ' ' + this.state.count);
    }

    componentDidMount(){
        console.log('ControlPanel componentDidMount ' + ' ' + this.state.count);
    }

    onUpdate(ov,nv){
        const diff = nv - ov;
        console.log('ControlPanel onUpdate ' + ' ' + this.state.count + ' ' + nv  + ' ' + ov);
        this.setState({count: this.state.count + diff});
    }

    render() {
        console.log('ControlPanel render ' + ' ' + this.state.count);
        return (
            <div>
                <Counter onUpdate={this.onUpdate} caption="first" initValue={0}></Counter>
                <Counter onUpdate={this.onUpdate} caption="Second" initValue={0}></Counter>
                <Counter onUpdate={this.onUpdate} caption="third" initValue={0}></Counter>
                <span>Panel: {this.state.count}</span>
            </div>
        );
    }
}

export default ControlPanel;