"use client";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Doctors Portal &copy; {new Date().getFullYear()} Created by Programming Hero
    </Footer>
  );
};

export default FooterComponent;
