import React, {FC} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";

const App: FC = () => {
  return (<div className="App">
      <Navbar/>
      <Layout.Content>
          <AppRouter/>
      </Layout.Content>
    </div>
  );
}

export default App;
