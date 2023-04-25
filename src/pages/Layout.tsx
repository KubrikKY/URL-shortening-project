import { Outlet } from 'react-router';
import Header from '../components/LayoutComponents/Header';
import Footer from '../components/LayoutComponents/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
