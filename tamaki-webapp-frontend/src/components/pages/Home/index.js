import React, {Component} from 'react';
import './style.css';

class Home extends Component {

    constructor(props){
        super(props);

        var vals = [];
        for(let i=0; i < 100; i++){
            vals[i] = i;
        }

        this.vals = vals;

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1 className="App-title">Home</h1>
                    <h2>{this.props.message}</h2>

                    {
                        this.vals.map(val => {
                            return(<h1>{val}</h1>);
                        })
                    }

                </div>
            </div>
        );
    }

}

export default Home;

