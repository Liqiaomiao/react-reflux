import Reflux from 'reflux';
import React from  'react';
import ReactDom from 'react-dom'; 
const action=Reflux.createActions(['test']);
const store = Reflux.createStore({
    listenables:action,
    init(){
        this.num = 0 ;
    },
    onTest(){
        this.trigger(++this.num,'click');

    }
});

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num:0};
    }
    // getInitialState () {
    //     return {num:0}
    // }
    onStatusChange (num,type) {
        this.setState({
            num
        })
    }
    componentDidMount () {
        const self=this;
       store.listen(self.onStatusChange.bind(self));
       this.handleclick=this.handleclick
    }
    handleclick(){
        action.test()
    }
    componentWillUnmount () {

    }
    render () {
        return (
            <div>
                {this.state.num}
                <button onClick={this.handleclick}> + </button>
            </div>
        )
    }
}
ReactDom.render(<Status/>,document.getElementById('test'));