import React from 'react';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/bar2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.ocean';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

class PriceByIncomeChart extends React.Component {
  state = {
    dataList: []
  }
  
  componentDidUpdate(prevProps) {

  // Typical usage (don't forget to compare props):
  if (this.props.schoolInfo !== prevProps.schoolInfo && this.props.schoolInfo !== undefined) {
    this.setState({dataList: this.parseData(this.props.schoolInfo)});
  }
  }

  parseData = (schoolInfo) => {
    const dataList = [];
    
    Object.keys(schoolInfo).forEach(function(key, index) {
      
        if (key.includes("net_price")) {      
            if (schoolInfo[key] !== null && schoolInfo[key] > 0) {
              var incomeLevel = key.substring(key.lastIndexOf(".") + 1);              
              var section = {};
              section["income"] = parseInt(incomeLevel.substring(0, incomeLevel.indexOf('-')));
              section["label"] = '$' + incomeLevel.replace(/-/g, '-$');
              section["value"] = schoolInfo[key];
              dataList.push(section);
            }            
        }
    });
    dataList.sort(function(a, b) {
    	return a.income -b.income;
    });
    return dataList;
  }
  
  render() {    
  	if (this.props.schoolInfo !== undefined) { 
    const chartConfigs = {
      	type: 'bar2d',
  		width: "100%",
  		height: 400,
  		dataFormat: 'json',

      dataSource: {
      "chart": {
        "caption": "Average Net Price, by Family Income Level",		
		"xAxisName": "Income Level",
		"yAxisName": "Average Net Price",
		"numberPrefix": "$",
		"theme": "ocean"
      },
    	"data": this.state.dataList
    }
}        
      return (
      <ReactFC {...chartConfigs} />
      );
  } else {
  	return null;
  }
  }
}

export default PriceByIncomeChart;