import React from 'react';
import axios from 'axios';
import url from '../queryString.js';
import FileSaver from 'file-saver/FileSaver';

import Profile from '../Profile/Profile';
import ProgramsChart from '../Charts/ProgramsChart';
import PriceByIncomeChart from '../Charts/PriceByIncomeChart';
import RaceChart from '../Charts/RaceChart';
import SATChart from '../Charts/SATChart';
import './Main.css';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolInfo: {}
        }
    }
    
    componentDidMount() {
        this.loadSchoolInfo('240444');
    }

    componentDidUpdate(prevProps) {
        if (this.props.schoolId !== prevProps.schoolId && this.props.schoolId !== undefined && this.props.schoolId.length > 0) {
            this.loadSchoolInfo(this.props.schoolId);
        }
    }

    loadSchoolInfo = (schoolId) => {
        const requestUrl = url + '&id=' + schoolId;
        console.log(requestUrl);
        axios.get(requestUrl)
            .then(res => {
                const schoolInfo = res.data.results[0];
                console.log(schoolInfo);
                this.setState({
                    schoolInfo: schoolInfo
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    downloadData = (e) => {
        e.preventDefault();
        var blob = new Blob([JSON.stringify(this.state.schoolInfo)], {type: "application/json;charset=utf-8"});
        FileSaver.saveAs(blob, "data.text");
    }
    
    render() {
        return (
            <div className="main">               
                <Profile schoolInfo={this.state.schoolInfo} />
                <div className="chart">
                    <ProgramsChart schoolInfo={this.state.schoolInfo} />
                </div>
                <div className="row chart">
                    <div className="col">
                        <PriceByIncomeChart schoolInfo={this.state.schoolInfo} />
                    </div>
                    <div className="col">
                        <RaceChart schoolInfo={this.state.schoolInfo} />
                    </div>
                </div>
                <div className="chart">
                    <SATChart schoolInfo={this.state.schoolInfo} />
                </div>
                <div className="button">
                    <button className="btn btn-secondary btn-lg" onClick={this.downloadData}>Download Data</button>
                </div>             
            </div>
        );
    }
}
