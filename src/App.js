import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Check speed</h1>
        <Calculator />
      </header>
    </div>
  );
}

function RoadCheck(props) {
	if (!props.km) {
		return <p>Please type your speed in either unit.</p>;
	} else if (props.km > 130) {
		return <p>Not allowed</p>;
	} else if (props.km > 50) {
		return <p>Allowed on Autobahns. Not allowed in cities.</p>;
	} else {
		return <p>Allowed.</p>;
	}
}

const unitNames = {
	km: 'km',
	mi: 'mi'
}

function toKilometers(mi) {
	return mi * 1.609344;
}

function toMiles(km) {
	return km * 0.6213712;
}

function tryConvert(speed, convert) {
	const input = parseFloat(speed);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 10) / 10;
  	return rounded.toString();
}


class SpeedInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onSpeedChange(event.target.value);
	}

	render() {
		const speed = this.props.speed;
		const unit = this.props.unit;
		return (
			<div>
				<label>{unitNames[unit]}: </label>
				<input value={speed} onChange={this.handleChange} />
			</div>
			);
	}
}


class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleKilometersChange = this.handleKilometersChange.bind(this);
		this.handleMilesChange = this.handleMilesChange.bind(this);
		this.state = {speed: '', unit: 'km'};
	}

	handleKilometersChange(speed) {
		this.setState({unit: 'km', speed});
	}

	handleMilesChange(speed) {
		this.setState({unit: 'mi', speed});
	}

	render() {
		const unit = this.state.unit;
		const speed = this.state.speed;
		const kilometers = unit === 'mi' ? tryConvert(speed, toKilometers) : speed;
		const miles = unit === 'km' ? tryConvert(speed, toMiles) : speed;
		return (
			<div>
				<SpeedInput				
				 unit="km"
				 speed={kilometers}
				 onSpeedChange={this.handleKilometersChange} />
				<br/>
				<SpeedInput 
				 unit="mi"
				 speed={miles}
				 onSpeedChange={this.handleMilesChange} />

				<RoadCheck km={parseFloat(kilometers)} />
			</div>
			);
	}

}


export default App;
