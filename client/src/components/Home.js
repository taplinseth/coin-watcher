import React, {Component} from 'react';
import '../App.css';
import StickyHeadTable from './Table';

const axios = require('axios');



export default class App extends Component {
    constructor() {
        super();
        this.state = {
            BTC_Array: []
        }
    }

    componentDidMount = () => {
        this.getBTC();
    }

    getBTC = () => {
        axios.get('http://localhost:4000/')
            .then((response) => {
                const BTC_Array = response.data
                this.setState({ BTC_Array })
                console.log(response);
            })
            .catch((error) => {
                console.log("error");
            })
    }

    render() {
        return (
            <div>
                {/* <ol>
                    {this.BTC_Array.map((coin, index) => {
                        return (
                            <Coincard key={index} ask={coin.ask} />
                        )
                    })}
                </ol> */}
                <div className="BTC-data">
                </div>
            </div>
        )
    }}
