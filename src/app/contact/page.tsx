"use client";
import React from "react";
import { TopPage } from "@/shared/components";
import classes from "./Contact.module.scss";
import { Col, Input, Row, Typography } from "antd";

const Contact = () => {
    return (
        <div className={classes.contactMain}>
            <TopPage title="Contact" name="Contact" />
            <div className={classes.contactMainInner}>
                <Typography.Title>Get In Touch With Us</Typography.Title>
                <Typography.Text>
                    For More Information About Our Product & Services. Please
                    Feel Free To Drop Us An Email. Our Staff Always Be There To
                    Help You Out. Do Not Hesitate!
                </Typography.Text>
                <Row gutter={[40, 0]} justify="space-between">
                    <Col className="gutter-row" span={12}>
                        {/* <Space
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
                        </Space> */}
                    </Col>
                    <Col className="gutter-row" span={12}></Col>
                </Row>
            </div>
        </div>
    );
};

export default Contact;
