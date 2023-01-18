import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import Menut from '../Menus';
import { itemsList } from './list';
const { Header, Content, Footer } = Layout;
const { Sider } = Layout;

const ContenstTesxt = (params: any) => {
    return <Layout style={{ height: "100vh" }}>
        {/* <Header>
            <div className="logo" />
            12345
        </Header> */}
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout >
                <Sider width={200}>
                    <Menut
                        style={{ height: "100vh" }}
                        mode="inline"
                        itemsList={itemsList}
                    />
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    {params.children}
                </Content>
            </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
}
export default ContenstTesxt