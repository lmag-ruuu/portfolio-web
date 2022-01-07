import { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Container: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Container;
