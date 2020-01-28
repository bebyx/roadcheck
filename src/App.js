import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Check miles</h1>
        <Calculator />
      </header>
    </div>
  );
}

function RoadCheck(props) {
	if (!props.km) {
		return <p>Please type your speed in km.</p>;
	} else if (props.km > 130) {
		return <p>Not allowed</p>;
	} else if (props.km > 50) {
		return <p>Allowed on Autobahns. Not allowed in cities.</p>;
	} else {
		return <p>Allowed.</p>;
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {km: ''};
	}

	handleChange(event) {
		this.setState({km: event.target.value});
	}

	render() {
		const km = this.state.km;
		return (
			<div>
				<input value={km} onChange={this.handleChange} />
				
				<RoadCheck km={parseInt(km)} />
			</div>
			);
	}

}


export default App;
