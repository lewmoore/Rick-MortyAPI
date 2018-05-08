import React from 'react';

class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    console.log('Success' + this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Character
        <input className='name' type='text' name='character' value={this.state.value} onChange={this.handleChange}/>
        <br/>
        </label>
        <input type='submit' value='search' />
      </form>
    )
  }
};

export default Form;
