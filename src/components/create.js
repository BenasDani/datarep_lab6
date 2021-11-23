import React from 'react';
import axios from 'axios';

export class Create extends React.Component {

    constructor() {
        super();
        // binds them together
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    onSubmit(e) {
        // stops from calling same button multiple times
        e.preventDefault()
        alert("Movie: " + this.state.Title + " " + this.state.Year * " " + this.state.Poster);
        
        const newMovie= {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        };
        axios.post('http://localhost:4000/api/movies',newMovie)
        .then((res)=>{
           console.log(res);
        })

        .catch((err)=>{
            console.log(err);
        })
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });

        

    }

    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });

    }
//making buttons and text box
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Year: </label>
                        <input type='text'
                        className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                        

                    </div>

                    <div className='form-group'>
                        <label>Movies Poster: </label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}></textarea>

                    </div>
                    <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'>

                        </input>

                </form>




            </div>
        );
    }

}