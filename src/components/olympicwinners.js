import React, { Component } from 'react';
import { connect } from "react-redux";
import {getOlympicWinners} from '../redux/actions/action-creators';
import { AgGridReact } from 'ag-grid-react';
import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class OlympicWinnersSagaComp extends Component{
    constructor(props){
        super(props);
        console.log(props);
		this.onGridReady = this.onGridReady.bind(this);
		this.getSelectedRowData = this.getSelectedRowData.bind(this);
		this.state = {
			gridApi : null,
			options : null
		}
	}
	
	componentDidMount() {
		const { onGetOlympicWinners } = this.props;
		onGetOlympicWinners();
		
	}
	
	onGridReady(params) {
		const gridapi = params.api;
		console.log(gridapi)
		gridapi.sizeColumnsToFit();
		gridapi.doLayout();
		this.setState({
			gridApi : params.api
		})
	}
	
	getSelectedRowData(){
		const { gridApi } = this.state;
		
		const row = gridApi.getSelectedRows()[0];
		const {gold, silver, bronze} = row;	
		const jsonData = [
			{
			  "label": "Gold",
			  "value": gold
			},
			{
			  "label": "Silver",
			  "value": silver
			},
			{
			  "label": "Bronze",
			  "value": bronze
			}
		];
		
		const series = Object.keys(jsonData[0])
		const options = {
			data: jsonData,
			series: [{
			  type: 'pie',
			  angleKey: series[1],
			  labelKey: series[0]
			}]
		}
		
		console.log(options)
		this.setState({
			options
		})
	}
	
    render(){
		const olymipicColumnDefs = [
			{
			  field: 'country'
			},
			{
			  field: 'year'
			},
			{
			  field: 'sport'
			},
			{
			  field: 'athlete'
			},
			{ field: 'gold' },
			{ field: 'silver' },
			{ field: 'bronze' },
			{ field: 'total' },
			{ field: 'age' },
			{
			  field: 'date'
			},
		]
		const { olympic_data } = this.props;
		const { options } = this.state;
		console.log( ' in render  ==== ', options)
        return (
            <div>
                <h3>FETCH DATA USING REDUX</h3>
				<div className="ag-theme-alpine" style={{height: '500px'}}>
					<AgGridReact
					columnDefs={olymipicColumnDefs}
					rowData={olympic_data}
					animateRows={true}
					onGridReady={this.onGridReady}
					pagination={true}
					 rowSelection={'single'}
					 onSelectionChanged={this.getSelectedRowData}
				  />
				</div>
				<div>
				{options ? <AgChartsReact options={ options } /> : null}
				</div>
			</div>
		)
    }
}

const mapStateToProps = state => {
  return {
	olympic_data: state.olympicreducer.olympicdata
  }
};

const mapDispatchToProps = dispatch => {
  return {
   onGetOlympicWinners: () => dispatch(getOlympicWinners())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OlympicWinnersSagaComp)