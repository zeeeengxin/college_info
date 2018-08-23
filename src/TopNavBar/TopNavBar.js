import React from 'react';

export class TopNavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			schoolid: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		console.log("form change");
		this.setState({
			schoolid: e.target.value
		});
	}

	handleSubmit(e) {		
		console.log("submit form");
		e.preventDefault();
		this.props.handleSearch(this.state.schoolid);
	}

	// <form onSubmit={this.handleSubmit}>
	// handleSubmit(e) {
	// 	e.preventDefault();
	// 	this.props.handleSearch(e.target[0].value);
	// }

    render() {
        return (
        	<div>
	            <nav className="navbar navbar-expand-lg navbar-light bg-light">
	            	<div className="container">	            		
					  	<a className="navbar-brand" href="#">College Score Card</a>
					  	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    	<span className="navbar-toggler-icon"></span>
					  	</button>
					  	<div className="collapse navbar-collapse" id="navbarSupportedContent">
					    	<ul className="navbar-nav mr-auto">
						      	<li className="nav-item active">
						        	<a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
						      	</li>
					      		<li className="nav-item">
					        		<a className="nav-link" href="#">Link</a>
					      		</li>			               
					    	</ul>	
							<form className="form-inline my-2 my-lg-0">
						      <input className="form-control mr-sm-2" type="search" placeholder="Search by id" name="schoolid" aria-label="Search" value={this.state.schoolid} onChange={this.handleChange} />
						      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSubmit}>Search</button>
						    </form>
					  	</div>
					</div>
				</nav>
			</div>
        );
    }
}