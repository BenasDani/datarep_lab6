import React from 'react';

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
        // stops from calling sam ebutton multiple times
        e.preventDefault()
        alert("Movie: " + this.state.Title + " " + this.state.Year * " " + this.state.Poster);
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.Target.value
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

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
 {/* making the buttons and text box */}
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
                        value={this.onChangePoster}
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