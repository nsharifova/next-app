"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Advantages, TopPage } from "@/shared/components";
import classes from "./Cart.module.scss";
import {
    Button,
    Col,
    Flex,
    FlexProps,
    Radio,
    Row,
    Space,
    Table,
    Tag,
    Typography,
} from "antd";
import { DataType } from "./models";
import { ColumnsType } from "antd/es/table";
import { data } from "./data";
import { removeItemFromCart } from "@/redux/features/cart/cartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { DeleteOutlined } from "@ant-design/icons";
const columns: ColumnsType<DataType> = [
    {
        title: "Product",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Price",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Quantity",
        dataIndex: "address",
        key: "address",
    },

    {
        title: "Subtotal",
        key: "total",
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <DeleteOutlined />
            </Space>
        ),
    },
];

const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch<AppDispatch>();

    const handleRemoveItem = (id: string) => {
        dispatch(removeItemFromCart(id));
    };
    const calculateTotal = () => {
        return cartItems
            .reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0)
            .toFixed(2);
    };

    return (
        <div className={classes.cartMain}>
            <TopPage title="Cart" name="Cart" />
            <div className={classes.cartMainInner}>
                <Row justify="space-between">
                    <Col span={14}>
                        <Table columns={columns} dataSource={data} />
                    </Col>
                    <Col span={10}>
                        <div className={classes.cartMainInnerRight}>
                            <Typography.Title level={2}>
                                Cart Totals
                            </Typography.Title>
                            <div className={classes.cartMainInnerRightDiv}>
                                <Space
                                    direction="vertical"
                                    size="large"
                                    style={{ display: "flex" }}
                                >
                                    <Flex
                                        justify="space-between"
                                        align="center"
                                    >
                                        <Typography.Text strong>
                                            Ant Design (strong)
                                        </Typography.Text>
                                        <span>Rs. 250,000.00</span>
                                    </Flex>
                                    <Flex
                                        justify="space-between"
                                        align="center"
                                    >
                                        <Typography.Text strong>
                                            Total
                                        </Typography.Text>
                                        <span>Rs. 250,000.00</span>
                                    </Flex>
                                </Space>
                            </div>
                            <Button>Default Button</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Advantages />
        </div>
    );
};

export default Cart;
