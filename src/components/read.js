import React from 'react';
import { Movies } from './movies';
import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

export class read extends React.Component {

    //adding the list of movies and their details
    state = {

        movies: [

        ]
    };

    componentDidMount() {
        // adding movies using json
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
            .then((response) => {
                this.setState({ movies: response.data.movies })
            })

            .catch((error) => {
                console.log(error)

            }

            );


    }



    render() {
        return (
            <div>
                {/* */}
                <h1>This is my read component</h1>
                <Movies movies={this.state.movies}>

                </Movies>
            </div>
        );
    }

}