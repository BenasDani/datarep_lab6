import React from 'react';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component {

    render() {
        return (
            <div>
                {/* Printing out the title year and image of the poster */}
                {/* <h1>This is my movie component.</h1>
                <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster}></img> */}

                {/* Wouldn't compile for some reason code seems fine unless im missing something "Cannot read properties of undefined / Reading :Title and the Year and the Poster" */}

                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Title}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>




            </div>
        );
    }

}