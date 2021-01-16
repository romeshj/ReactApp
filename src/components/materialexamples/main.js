import React, {Component} from 'react';

import PrimarySearchAppBar from './header';

import RegistrationForm from './registration';

 

import {Route} from 'react-router-dom';

 

 

const MainComp = () => {

 

   

 

    return(

 

        <div>

            <PrimarySearchAppBar />

            <div>

                <Route path="/materialui/registration" component={RegistrationForm} />

            </div>

        </div>

    )

 

}

 

export default MainComp

