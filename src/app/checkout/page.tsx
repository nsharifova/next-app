"use client";
import React, { useState } from "react";
import classes from "./Checkout.module.scss";
import {
    Button,
    Col,
    Divider,
    Flex,
    Radio,
    RadioChangeEvent,
    Row,
    Space,
    Typography,
} from "antd";
import { Advantages, Input, TopPage } from "@/shared/components";

const Checkout = () => {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className={classes.checkMain}>
            <TopPage title="Checkout" name="Checkout" />
            <div className={classes.checkMainInner}>
                <Typography.Title>Billing details</Typography.Title>

                <Row gutter={[40, 0]} justify="space-between">
                    <Col className="gutter-row" span={12}>
                        <Row gutter={[16, 0]} justify="space-between">
                            <Col className="gutter-row" span={12}>
                                <Input
                                    type="text"
                                    name="firstName"
                                    label="Firstname"
                                    // control={methods.control}
                                    // errors={methods.formState.errors}
                                />
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Input
                                    type="text"
                                    name="lastName"
                                    label="Lastname"
                                    // control={methods.control}
                                    // errors={methods.formState.errors}
                                />
                            </Col>
                        </Row>
                        <Input
                            type="text"
                            name="companyName"
                            label="Company Name (Optional)"
                            // control={methods.control}
                            // errors={methods.formState.errors}
                        />
                        <Input
                            type="text"
                            name="country"
                            label="Country / Region"
                            // control={methods.control}
                            // errors={methods.formState.errors}
                        />
                        <Input
                            type="text"
                            name="address"
                            label="Street address"
                            // control={methods.control}
                            // errors={methods.formState.errors}
                        />
                        <Input
                            type="text"
                            name="city"
                            label="Town / City"
                            // control={methods.control}
                            // errors={methods.formState.errors}
                        />
                        <Input
                            type="text"
                            name="province"
                            label="Province"
                            // control={methods.control}
                            // errors={methods.formState.errors}
                        />
                        <Input
                            type="text"
                            name="code"
                            label="ZIP code"
                            // control={methods.control}
                            // errors={methods.formState.errors}
                        />
                        <Input
                            type="text"
                            name="phone"
                            label="Phone"
                            // control={methods.control}
                            // errors={methods.formState.errors}
                        />
                        <Input
                            type="text"
                            name="email"
                            label="Email address"
                            // control={methods.control}
                            // errors={methods.formState.errors}
                        />
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: "flex" }}
                        >
                            <Flex justify="space-between" align="center">
                                <Typography.Title level={2}>
                                    Product
                                </Typography.Title>
                                <Typography.Title level={2}>
                                    Subtotal
                                </Typography.Title>{" "}
                            </Flex>
                            <Flex justify="space-between" align="center">
                                <Typography.Text strong>
                                    Asgaard sofa <span>X 1</span>
                                </Typography.Text>
                                <span>Rs. 250,000.00</span>
                            </Flex>
                            <Flex justify="space-between" align="center">
                                <Typography.Text strong>
                                    Subtotal
                                </Typography.Text>
                                <span>Rs. 250,000.00</span>
                            </Flex>
                            <Flex justify="space-between" align="center">
                                <Typography.Text strong>Total</Typography.Text>
                                <Typography.Title level={3}>
                                    Rs. 250,000.00
                                </Typography.Title>
                            </Flex>
                            <Divider />
                            <Typography.Text type="secondary">
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order will not be shipped until
                                the funds have cleared in our account.
                            </Typography.Text>
                            <Radio.Group onChange={onChange} value={value}>
                                <Space direction="vertical">
                                    <Radio value={1}>
                                        Direct Bank Transfer
                                    </Radio>
                                    <Radio value={2}>Cash On Delivery</Radio>
                                </Space>
                            </Radio.Group>
                            <Typography.Text>
                                Your personal data will be used to support your
                                experience throughout this website, to manage
                                access to your account, and for other purposes
                                described in our <strong>privacy policy</strong>
                                .
                            </Typography.Text>
                            <Button>Default Button</Button>
                        </Space>
                    </Col>
                </Row>
            </div>
            <Advantages />
        </div>
    );
};

export default Checkout;
