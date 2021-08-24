import React from "react";
import './App.css';

import { Switch, withRouter, Redirect } from 'react-router-dom';
import { Routes } from 'Routes/Routes';
import MainLayout from "hoc/Layout/Layout";
import Dashboard from 'screens/Dashboard/Dashboard';
import PublicRoute from "Routes/public.routes";
import PrivateRoute from "Routes/private.routes";

const NftWallet = (props) => {

  const { history: { location } } = props;

  return(

    <Switch>

      { location?.pathname === "/" && <Redirect exact to={`/${Routes.wallet}`} /> }
      <MainLayout isLogin={true}>        
        <PrivateRoute exact={true} path={`/${Routes.wallet}`} 
          component={Dashboard} restricted={true} auth={{ loginAuth: true }}
        />
      </MainLayout>
    </Switch>

  );

}

export default withRouter(NftWallet);
