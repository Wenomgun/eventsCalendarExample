import React, {FC} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";

const App: FC = () => {
  return (<div className="App" style={{height: '100%'}}>
      <Navbar/>
      <Layout.Content style={{height: '100%'}}>
          <AppRouter />
      </Layout.Content>
    </div>
  );
}

export default App;
