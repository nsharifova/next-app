"use server";
import React from "react";
import { TopPage } from "@/shared/components";
import classes from "./Cart.module.scss";
import { Col, Row, Space, Table, Tag } from "antd";
import { DataType } from "./models";
import { ColumnsType } from "antd/es/table";
import { data } from "./data";
const columns: ColumnsType<DataType> = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        // render: (text) => <a>{text}</a>,
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        // render: (_, { tags }) => (
        //     <>
        //         {tags.map((tag) => {
        //             let color = tag.length > 5 ? "geekblue" : "green";
        //             if (tag === "loser") {
        //                 color = "volcano";
        //             }
        //             return (
        //                 <Tag color={color} key={tag}>
        //                     {tag.toUpperCase()}
        //                 </Tag>
        //             );
        //         })}
        //     </>
        // ),
    },
    {
        title: "Action",
        key: "action",
        // render: (_, record) => (
        //     <Space size="middle">
        //         <a>Invite {record.name}</a>
        //         <a>Delete</a>
        //     </Space>
        // ),
    },
];

const Cart = () => {
    return (
        <div className={classes.cartMain}>
            <TopPage title="Cart" name="Cart" />
            <div className={classes.cartMainInner}>
                <Row>
                    <Col span={14}>
                        <Table columns={columns} dataSource={data} />
                    </Col>
                    <Col span={10}>a</Col>
                </Row>
            </div>
        </div>
    );
};

export default Cart;
