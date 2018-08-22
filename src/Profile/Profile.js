import React from 'react';

import './Profile.css';

class Profile extends React.Component {
    render() {
        if (this.props.schoolInfo !== undefined) {
            return (
                <div className="profile">
                    <h1 className="display-4">{this.props.schoolInfo["school.name"]}</h1>
                    
                        <p className="lead"><i className="fas fa-map-marker-alt small-icon"></i> {this.props.schoolInfo["school.city"]}, {this.props.schoolInfo["school.state"]} {this.props.schoolInfo["school.zip"]}</p>
                        <p className="lead"><i className="fas fa-user-graduate small-icon"></i> {this.props.schoolInfo["2015.student.size"]} Undergraduate Students</p>
                        <p className="lead"><i className="fas fa-laptop"></i> <a href={'https://' + this.props.schoolInfo["school.school_url"]}>{this.props.schoolInfo["school.school_url"]}</a></p>
                    
                </div>
            ); 
        } else {
            return (
                <div className="alert alert-warning" role="alert">No school matches your search. Please try another one!</div>
            );       
        }
    }
}

export default Profile;