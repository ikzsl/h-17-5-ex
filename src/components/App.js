import React from 'react';

class App extends React.Component {
  static defaultProps = {
    text: '',
  };

  handleUpdate = (e) => {
    e.preventDefault();
    const {dispatch, updateText} = this.props;
    dispatch(updateText(e.target.value));
  };

  handleReset = (e) => {
    e.preventDefault();
    const {dispatch, resetText} = this.props;
    dispatch(resetText());
  };

  render() {
    const { text } = this.props;
    const label = text ? <div>{text}</div> : null;
    return (
      <div>
        <form>
          <input type="text" value={text} onChange={this.handleUpdate} />
          <button type="button" onClick={this.handleReset}>
            Reset
          </button>
        </form>
        {label}
      </div>
    );
  }
}

export default App;
