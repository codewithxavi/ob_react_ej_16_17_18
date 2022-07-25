import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/login">Login</Link> | {" "}
        <Link to="/register">Register</Link>
      </nav>

      <section>
        <Outlet />
      </section>


    </main>
  );
}

export default Layout;
