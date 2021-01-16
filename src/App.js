import React , {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Posts from './components/posts';
import Userform from './components/userform';
import CompA from './components/hoc/compA';
import CompB from './components/hoc/compB';
import Stateslists from './components/statecities';
import Startdate from './components/datepicker';
import SelectA from './components/downshift/select';
import MainComp from './components/materialexamples/main';
import RegistrationForm from './components/materialexamples/registration';
import PostsHooks from './components/postshooks';
import Dog from './components/dog';
import Form from './components/form';
import Welcome from './components/welcome';
import OlympicWinnersSagaComp from './components/olympicwinners';
import OlympicWinnersHooksSagaComp from './components/olympicwinnershooks';
import OlympicWinnersUseReducersSagaComp from './components/olympicwinners-usereducers';
import Outer from './components/nestedrouting/outer';
import Main from './components/channelnews/main';
import Mainlists from './components/hoclists/mainlists';

import Users from './components/routeparams/users';
import UserInfo from './components/routeparams/userinfo';
import Userfield from './components/routeparams/userfield';
import Addnewuser from './components/routeparams/addnewuser';

import News from './components/newsapi/news';
import NewsA from './components/newsapihooks/news';
import Parent from './components/childparent/parent';
import ParentA from './components/childparentbuttontoggle/parent';

import MainApp from './components/createcontext/main';
import MainAppA from './components/createcontextA/main';

import MainPage from './components/createcontexthooks/mainPage';
import Demo from './components/protectedroutes/app';
import LandingPage from './components/protectedroutes/landingpage';
import AppLayout from './components/protectedroutes/applayout';
import ProtectedRoutes from './components/protectedroutes/protectedroutes';
import Authors from './components/xmldata/xml1'
import MainLists from './components/usecallback/mainlists'
import MainListsA from './components/usememo/mainlists'
import MainNewsPage from './components/newsapixml/main'
import ABNNews from './components/newsapixml/news';
import NewsDetails from './components/newsapixml/newsdetails';

import MainDashboard from './components/newsapixmlreduxsaga/dashboard';

import Employees from './components/shouldcomponentupdate/employees';
import Links from './components/links/links';
import CustomForm from './components/customforms/form';

import UsersPage from './components/searchfilter_users/userspage';
import UsersPageR from './components/searchfilter_users_reducers/userspageR';
import Olympics from './components/aggrid-_searchFilter/olympics';

import PersonName from './components/regexinput'
import CustomSelect from './components/custom-dropdown/select-icon'
import SimpleGrid from './components/simpleaggrid';

class App extends Component{
  render(){
      return(
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
			  <Route path="/posts" component={Posts} />
			  <Route exact path="/userform" component={Userform} />
			  <Route exact path="/compa" component={CompA} />
              <Route exact path="/compb" component={CompB} />
			  <Route exact path="/statescities" component={Stateslists}/>
              <Route exact path="/rdtpicker" component={Startdate}/>
			  <Route path="/postshooks" component={PostsHooks} />​
			  <Route path="/downshiftone" component={SelectA} />​
			  <Route exact path="/materialui" component={MainComp}></Route>
              <Route exact path="/materialui/registration" component={MainComp}></Route>
			  <Route exact path="/dog" component={Dog} />
			  <Route exact path="/form" component={Form} />
			  <Route exact path="/welcome" component={Welcome} />
			  <Route exact path="/olympicwinners" component={OlympicWinnersSagaComp} />
			  <Route exact path="/olympicwinnershooks" component={OlympicWinnersHooksSagaComp} />
			  <Route exact path="/olympicwinnersusereducers" component={OlympicWinnersUseReducersSagaComp} />
			  <Route exact path="/nestedrouting" component={Outer} />
			  <Route exact path="/channelnews" component={Main} />
			  <Route exact path="/hocmainlists" component={Mainlists} />			  
			  <Route exact path="/users" component={Users} />
              <Route exact path="/users/:userId" component={UserInfo} />
              <Route exact path="/userfield" component={Userfield} />
			  <Route exact path="/addnewuser" component={Addnewuser} />
			  <Route exact path="/news" component={News} />
			  <Route path="/newshooks" component={NewsA} />​
			  <Route path="/childparent" component={Parent} />​
			  <Route path="/childparentbuttontoggle" component={ParentA} />​
			  <Route path="/context" component={MainApp} />​
			  <Route path="/contexta" component={MainAppA} />​
			  <Route path="/contexthooks" component={MainPage} />​
			  <Route exact path="/protectedroutes" component={Demo} />​
			  <ProtectedRoutes exact path="/protectedroutes/landingpage" component={LandingPage} />
			  <ProtectedRoutes exact path="/protectedroutes/applayout" component={AppLayout} />
			  <Route exact path="/authors" component={Authors} /> 
			  <Route exact path="/usecallback" component={MainLists} />​
			  <Route exact path="/usememo" component={MainListsA} />​
			  
			  
			  <Route exact path="/newsapixml" component={MainNewsPage} />
			  <Route exact path="/newsapixml/:category" component={ABNNews} />
			  <Route exact path="/newsapixml/:category/:index" component={NewsDetails} />
			  
			  <Route exact path="/abnnewsxml" component={MainDashboard} />
			  <Route exact path="/shouldcomponentupdate" component={Employees} />
			  <Route exact path="/links" component={Links} />
			  <Route exact path="/customforms" component={CustomForm} />
			  <Route exact path="/searchfilter" component={UsersPage} />
			  <Route exact path="/searchfilterreducers" component={UsersPageR} />
			  <Route exact path="/agridsearch" component={Olympics} />
			  <Route exact path="/regex" component={PersonName} />
			  <Route exact path="/customselect" component={CustomSelect} />
			  <Route exact path="/simplegrid" component={SimpleGrid} />
			  
            </Switch>
          </Router>
        </div>
      )
  }
}
export default App;
