import React, {FC, useEffect} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

const App: FC = () => {
    const {setUser, setIsAuth} = useActions();
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('user')} as IUser);
            setIsAuth(true);
        }
    }, [])

  return (<div className="App" style={{height: '100%'}}>
      <Navbar/>
      <Layout.Content style={{height: '100%'}}>
          <AppRouter />
      </Layout.Content>
    </div>
  );
}

export default App;
