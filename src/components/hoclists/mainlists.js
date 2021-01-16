import React, {Component} from 'react';
import hoclists from './hoclists';
import Stocklists from './stockslists';
import Userlists from './userslists';

const Mainlists = (props) =>{
    const StocksData = [
        {
            id: 1,
            name: 'TCS'
        },
        {
            id: 2,
            name: 'Infosys'
        },
        {
            id: 3,
            name: 'Reliance'
        }
      ];

    const UsersData = [
        {
            id: 1,
            name: 'Krunal'  
        },
        {
            id: 2,
            name: 'Ankit'
        },
        {
            id: 3,
            name: 'Rushabh'
        }
      ];

      const Stocks = hoclists(Stocklists, StocksData);
      const Users = hoclists(Userlists, UsersData); 

      return (
        <div>
            <Stocks />
            <br/><br/>
            <Users />
        </div>
      )
}

export default Mainlists
