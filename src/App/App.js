import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import {TopNavBar} from '../TopNavBar/TopNavBar';
import {Main} from '../Main/Main';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state= {
			schoolId: ''
		};
	}

	handleSearch = (schoolId) => {
		this.setState({
			schoolId: schoolId
		});
	}

  	render() {
    	return (
      		<div>
	        <TopNavBar handleSearch={this.handleSearch}/>
	        <div className="container app">
	        	<div>
	        		<Main ref={e1 => (this.componentRef = e1)} schoolId={this.state.schoolId} />
	        	</div>
	        	<div className="button">
	        		<ReactToPrint 
	        		trigger={() => <button type="button" className="btn btn-success btn-lg">Print/Save Page</button>}
	            	content = {()=>this.componentRef}/>
	            </div>
	      	</div>
	      </div>
    	);
  	}
}

export default App;
