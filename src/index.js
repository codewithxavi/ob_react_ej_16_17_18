import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import LoginFormik from './LoginFormik';
import RegisterFormik from './RegisterFormik';
import TaskList from './TaskList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route path='login' element={<LoginFormik />}>

        </Route>

        <Route path='register' element={<RegisterFormik />}>

        </Route>

        <Route path='tasks' element={<TaskList />}>

        </Route>




        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);