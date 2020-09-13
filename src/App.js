import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginView from './Component/Views/LoginView';
import DashboardView from './Component/Views/DashboardView';
import NavBar from './Component/Navbar/Navbar';
import CreateTask from './Component/Tasks/CreateTask';
import TasksList from './Component/Tasks/TasksList';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/' component={DashboardView} />
          <Route path='/dashboard' component={DashboardView} />
          <Route path='/login' component={LoginView} />
          <Route path='/tasks' component={TasksList} />
          <Route path='/createTask' component={CreateTask} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
