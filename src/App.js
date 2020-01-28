import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Check miles</h1>
        <RoadCheck km={30} />
      </header>
    </div>
  );
}

function RoadCheck(props) {
	if (props.km > 130) {
		return <p>Not allowed</p>;
	} else if (props.km > 50) {
		return <p>Allowed on Autobahns. Not allowed in cities.</p>;
	} else {
		return <p>Allowed.</p>;
	}
}



export default App;
