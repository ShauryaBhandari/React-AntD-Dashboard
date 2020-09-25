import React from "react";
import "./Home.css";
import { Layout, Menu, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import "../../App.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Cards from "../Cards/Cards";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const Home = () => {
  return (
    <div>
      <Layout>
        <Header className="header">
          <Title level={1} style={{ color: "white" }}>
            Ant Design
            <Avatar
              className="icon"
              size={44}
              shape="square"
              icon={<UserOutlined />}
            />
          </Title>
        </Header>
        <Layout>
          <Sider style={{ background: "#222" }}>
            <Menu
              theme="dark"
              style={{ background: "black" }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <MailOutlined />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                key="sub2"
                icon={<AppstoreOutlined />}
                title="Navigation Two"
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <SettingOutlined />
                    <span>Navigation Three</span>
                  </span>
                }
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{ background: "#fff", padding: 24, minHeight: 580 }}
                className="site-layout-content"
              >
                <Cards />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Created by Shaurya Bhandari
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
