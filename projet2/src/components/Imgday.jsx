import React, {component} from 'react';
import axios from 'axios';
import './mediaQueries.css';

export default class Imgday extends React.Component {

    state = {
        img: [],
    }

    componentDidMount() {
    
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=pwsZPr42vn2VKarhwghQj8hUdWebbdF53UMdLKlL`)
        .then(response => response.data)
        .then(res => {
            console.log(res);
            this.setState({img: res});
        });
    }

    render() {
        
        return(

            <div>

                <h2 className="tilte-img-day">Picture of the day</h2>

            <div className="block-img-day">

                <img className="img-day" src={this.state.img.hdurl}/>

            </div>

            </div>

        )


    }

}















