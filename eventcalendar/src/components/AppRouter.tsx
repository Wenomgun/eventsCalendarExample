import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RoutesName} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector((state) => state.authReducer);
    return (<>
            {isAuth ? <Switch>
                {privateRoutes.map((route) => {
                    return <Route path={route.path}
                                  key={route.path}
                            exact={route.exact}
                            component={route.component}/>
                })}
                <Redirect to={RoutesName.EVENT}/>
            </Switch> : <Switch>
                {publicRoutes.map((route) => {
                    return <Route path={route.path}
                                  key={route.path}
                                  exact={route.exact}
                                  component={route.component}/>
                })}
                <Redirect to={RoutesName.LOGIN}/>
            </Switch>}
        </>
    );
}

export default AppRouter;