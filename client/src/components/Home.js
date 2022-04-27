import React, {Component} from 'react';
import '../App.css';
import Hometable from './Hometable';

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
        axios.get('https://cryptic-headland-94862.herokuapp.com/https://gleaming-modem-343016.uc.r.appspot.com/users')
            .then((response) => {
                const BTC_Array = response.data
                this.setState({ BTC_Array })
                console.log(BTC_Array)
            })
            .catch((error) => {
                console.log("error");
            })
    }

    render() {
        return (
            <div>
                <Hometable />
            </div>
        )
    }}
