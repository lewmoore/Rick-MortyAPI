import React from 'react';

class Form extends React.Component{
  render() {
    return (
      <form>
        <label>Character
        <input type='text' name='character' />
        <br/>
        </label>
        <input type='submit' value='search' />
      </form>
    )
  }
};

export default Form;
