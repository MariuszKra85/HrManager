import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginView from './Component/Views/LoginView';
import DashboardView from './Component/Views/DashboardView';
import NavBar from './Component/Navbar/Navbar';
import CreateTask from './Component/Tasks/CreateTask';
import TasksList from './Component/Tasks/TasksList';
import TaskDetails from './Component/Tasks/TaskDetails';
import CreateNewUser from './Component/Users/CreateNewUser';
import UsersList from './Component/Users/UsersList';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/' component={DashboardView} />
          <Route path='/dashboard' component={DashboardView} />
          <Route path='/task/:id' component={TaskDetails} />
          <Route path='/login' component={LoginView} />
          <Route path='/tasks' component={TasksList} />
          <Route path='/newTask' component={CreateTask} />
          <Route path='/newUser' component={CreateNewUser} />
          <Route path='/usersList' component={UsersList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
