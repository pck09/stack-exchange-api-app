import { SearchOutlined } from "@ant-design/icons";
import { Col, Layout, Menu, Row } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { ItemType } from "antd/es/menu/hooks/useItems";
import React, { useMemo } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./PageLayout.module.scss";

const PageLayout = () => {
  const menuItems = useMemo<ItemType[]>(
    () => [
      {
        key: "/",
        icon: <SearchOutlined />,
        label: <Link to="/">Search</Link>,
      },
    ],
    []
  );

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Row justify="center">
          <Col xl={16} span={24}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["/"]}
              items={menuItems}
            />
          </Col>
        </Row>
      </Header>
      <Content className={styles.content}>
        <Row justify="center">
          <Col xl={16} span={24}>
            <Outlet />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default PageLayout;
