import React from 'react';
import FusionCharts from 'fusioncharts/core';
import Doughnut2d from 'fusioncharts/viz/doughnut2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.ocean';

ReactFC.fcRoot(FusionCharts, Doughnut2d, FusionTheme);

class ProgramsChart extends React.Component {
    state = {
        dataList: []
    }
  
    componentDidUpdate(prevProps) {
        if (this.props.schoolInfo !== prevProps.schoolInfo && this.props.schoolInfo !== undefined) {
            this.setState({dataList: this.parseData(this.props.schoolInfo)});
        }
    }

    parseData = (schoolInfo) => {
        const dataList = [];
        Object.keys(schoolInfo).forEach(function(key, index) { 
            if (key.includes("program_percentage")) {      
                if (schoolInfo[key] !== null && schoolInfo[key] > 0) {
                  var programName = key.substring(key.lastIndexOf(".") + 1);
                  var programPercentage = schoolInfo[key] * 100;
                  var section = {};
                  section["label"] = programName.replace(/_/g, ' ');
                  section["value"] = programPercentage;
                  dataList.push(section);
                }            
            }
        });
        return dataList;
    }
  
    render() {    
        if (this.props.schoolInfo !== undefined) { 
            const chartConfigs = {
                type: 'Doughnut2d',
                width: "100%",
                height: 400,
                dataFormat: 'json',
                dataSource: {
                    "chart": {
                        "caption": "Program Percentages",
                        "subCaption" : "Percentage of Degrees Awarded by Program",
                        "showValues":"1",
                        "showPercentInTooltip" : "0",
                        "numberSuffix" : "%",
                        "enableMultiSlicing":"1",
                        "theme": "ocean"
                    },
                    "data": this.state.dataList
                }
            }        
            return (
                <div>
                    <ReactFC {...chartConfigs} />
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ProgramsChart;