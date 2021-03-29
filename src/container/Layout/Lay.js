import { Layout, Menu, Breadcrumb, Avatar } from "antd";

import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import "../../App.css";
import { UIView, UISref, UISrefActive } from "@uirouter/react";
const { Header, Content, Sider } = Layout;

const Lay = () => {
  return (
    <>
      <Layout>
        <Header className="header">
          <span className="tituloNavbar">Crud React</span>
          <Menu className="menu" theme="dark" mode="horizontal">
            <Avatar size="large" icon={<UserOutlined />} />
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
              <Menu.Item icon={<HomeOutlined />}>
                <UISref to="home">
                  <a>Home</a>
                </UISref>
              </Menu.Item>
              <Menu.Item icon={<HomeOutlined />}>
                <UISref to="about">
                  <a>About</a>
                </UISref>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>gy</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <UIView />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Lay;
