import React, { useState, useEffect, useReducer } from 'react';
import * as types from '../redux/actions/action-types';
import {getOlympicWinners} from '../redux/actions/action-creators';
import { AgGridReact } from 'ag-grid-react';
import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

let gridApi = null;

const OlympicWinnersUseReducersSagaComp = (props) => {
    
	
	const INITIAL_STATE = {
		olympicdata : [],
		fetching : false,
		error : null
	}
	
	useEffect(() => {
       let mounted = true;
		if(mounted){dispatch(getOlympicWinners()); }
		return () => mounted = false;
    }, [])

    const [state, dispatch] = useReducer((state = INITIAL_STATE, action) => {
		console.log(action)
		switch(action.type){
			case types.OLYMPIC_API_CALL_REQUEST:
				return {...state , fetching: true, error: null}
			case types.OLYMPIC_API_CALL_SUCCESS:
				return {...state , fetching: false, olympicdata: action.data}
			case types.OLYMPIC_API_CALL_FAILURE:
				return {...state , fetching: false, olympicdata: null, error: action.error}		
			default:
			return state
		}
  }, []);
  
	useEffect(() => {
       //let mounted = true;
		//if(mounted){
		dispatch(getOlympicWinners());
		dispatch({type : types.OLYMPIC_API_CALL_SUCCESS});		//}
		//return () => mounted = false;
    }, [])
	
	console.log(state)
  
	/*const olympic_data = useSelector(state => state.olympicreducer.olympicdata);	
    const [gridApi, setGridApi] = useState(null);
	const [chartOptions, setChartOptions] = useState(null);	
    const dispatch = useDispatch();
	
	useEffect(() => {
       let mounted = true;
		if(mounted){dispatch(getOlympicWinners())}
		return () => mounted = false;
    }, [])*/
	  
	  
	 /*const olymipicColumnDefs = [
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
	  
	  
	  const getSelectedRowData = () => {
		
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
		setChartOptions(options)
		console.log(options)
	  }
	  
	  
	  const onGridReady = params => {
		const gridapi = params.api;
		console.log(gridapi)
		gridapi.sizeColumnsToFit();
		gridapi.doLayout();
		setGridApi(params.api);
	  }*/
	
	return (
        <div>
		{console.log( "  ===== " )}
            <h3>FETCH DATA USING REDUX Hook (useSelector, useDispatch)</h3>
        </div>
	)
}

export default OlympicWinnersUseReducersSagaComp