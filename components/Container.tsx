import { FC } from "react";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer";

const Container: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <hr />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Container;
