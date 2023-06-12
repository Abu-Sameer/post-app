import { Outlet } from 'react-router-dom';
import NavBar from './Header/NavBar';

export default function Layout() {
  return (
    <main className="">
      <NavBar />
      <Outlet />
    </main>
  );
}
