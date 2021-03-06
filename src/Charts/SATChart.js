import React from 'react';
import ReactFC from 'react-fusioncharts';

class SATChart extends React.Component {
  state = {
    data: {}
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.schoolInfo !== prevProps.schoolInfo && this.props.schoolInfo !== undefined) {
      this.setState({data: this.parseData(this.props.schoolInfo)});
    }
  }

  parseData = (schoolInfo) => {
    var data = {};
    Object.keys(schoolInfo).forEach(function(key, index) {
      
        if (key.includes("writing")) {      
              if (key.includes("25th_percentile")) {
                data["25th percentile"] = schoolInfo[key];
              } else if (key.includes("midpoint")) {
                data["midpoint"] = schoolInfo[key];
              } else if (key.includes("75th_percentile")) {
                data["75th percentile"] = schoolInfo[key];
              }             
        }
    });
    return data;
  }
  
  render() {  
    if (this.props.schoolInfo !== undefined) {   
      const chartConfigs = {
      	type: 'hlineargauge',
  		  width: "100%",
  		  height: 150,
  		  dataFormat: 'json',

        dataSource: {
          "chart": {
            "caption": "SAT Writing Score",		
  		      "theme": "ocean"
          },
    	    "colorrange": {
            "color": [
              {
                "minvalue": 0,
                "maxvalue": this.state.data["25th percentile"],
                "label": "< 25th percentile",
                "code": "EBE1CE"
              },
              {
                "minvalue": this.state.data["25th percentile"],
                "maxvalue": this.state.data["midpoint"],
                "label": "25th-50th percentile",
                "code": "DCEFC1"
              },
              {
                "minvalue": this.state.data["midpoint"],
                "maxvalue": this.state.data["75th percentile"],
                "label": "50th-75th percentile",
                "code": "8FCDA0"
              },
              {
                "minvalue": this.state.data["75th percentile"],
                "maxvalue": 800,
                "label": "> 75th percentile",
                "code": "2786AB"
              }
            ]
          },
          "pointers": {
            "pointer": [
              {
                "value": this.state.data["25th percentile"]
              },
              {
                "value": this.state.data["midpoint"]
              },
              {
                "value": this.state.data["75th percentile"]
              }
            ]
          }
        }
      };        
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

export default SATChart;