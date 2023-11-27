import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

 
interface LayoutProps {
    children: React.ReactNode
}
const MainHomePage:React.FC<LayoutProps>=({children})=> {
  return (
    <>
      <NavBar />
        {children}
      <Footer />
    </>
  );
}

export default MainHomePage;
