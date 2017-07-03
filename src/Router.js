import React from 'react';
import { Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeAdd from './components/EmployeeAdd';

const RouterComponent = () => {
    return (
        //sceneStyle applies to all scenes in the app
        //scene ordering is important, 1st scene is 1st dispayed
       <Router sceneStyle={{ paddingTop: 64 }}>
           <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" />
           </Scene>
           
           <Scene key="main">
                <Scene 
                key="employeeList" 
                component={EmployeeList} 
                title="Employees" 
                rightTitle="Add"
                onRight={() => Actions.employeeAdd()}
                />
                <Scene 
                key="employeeAdd"
                component={EmployeeAdd}
                title="Add Employee"
                />
           </Scene>
           
       </Router>
    );
};

export default RouterComponent;
