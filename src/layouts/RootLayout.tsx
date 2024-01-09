import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;