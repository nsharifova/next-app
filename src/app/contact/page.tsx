"use client";
import React from "react";
import { Advantages, TopPage, Input } from "@/shared/components";
import classes from "./Contact.module.scss";
import { Button, Col, Divider, Flex, Row, Space, Typography } from "antd";
import {
    FieldTimeOutlined,
    HeatMapOutlined,
    PhoneOutlined,
} from "@ant-design/icons";

const Contact = () => {
    return (
        <div className={classes.contactMain}>
            <TopPage title="Contact" name="Contact" />
            <div className={classes.contactMainInner}>
                <div className={classes.contactMainInnerTop}>
                    <Typography.Title>Get In Touch With Us</Typography.Title>
                    <Typography.Text>
                        For More Information About Our Product & Services.
                        Please Feel Free To Drop Us An Email. Our Staff Always
                        Be There To Help You Out. Do Not Hesitate!
                    </Typography.Text>
                </div>
                <Row gutter={[40, 0]} justify="space-between">
                    <Col className="gutter-row" span={12}>
                        <Space direction="vertical" size="middle">
                            <Flex justify="space-between">
                                <HeatMapOutlined style={{ fontSize: "20px" }} />
                                <div
                                    className={
                                        classes.contactMainInnerCenterLeft
                                    }
                                >
                                    <Typography.Title level={4}>
                                        Subtotal
                                    </Typography.Title>{" "}
                                    <p>
                                        236 5th SE Avenue, New York NY10000,
                                        United States
                                    </p>
                                </div>
                            </Flex>
                            <Flex justify="space-between">
                                <PhoneOutlined style={{ fontSize: "20px" }} />
                                <div
                                    className={
                                        classes.contactMainInnerCenterLeft
                                    }
                                >
                                    <Typography.Title level={4}>
                                        Subtotal
                                    </Typography.Title>{" "}
                                    <p>
                                        236 5th SE Avenue, New York NY10000,
                                        United States
                                    </p>
                                </div>
                            </Flex>
                            <Flex justify="space-between">
                                <FieldTimeOutlined
                                    style={{ fontSize: "20px" }}
                                />
                                <div
                                    className={
                                        classes.contactMainInnerCenterLeft
                                    }
                                >
                                    <Typography.Title level={4}>
                                        Subtotal
                                    </Typography.Title>{" "}
                                    <p>
                                        236 5th SE Avenue, New York NY10000,
                                        United States
                                    </p>
                                </div>
                            </Flex>
                        </Space>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Space
                            className="w-100"
                            direction="vertical"
                            size="middle"
                        >
                            <Input
                                type="text"
                                name="companyName"
                                label="Your name"
                                // control={methods.control}
                                // errors={methods.formState.errors}
                            />
                            <Input
                                type="text"
                                name="companyName"
                                label="Email address"
                                // control={methods.control}
                                // errors={methods.formState.errors}
                            />
                            <Input
                                type="text"
                                name="companyName"
                                label="Subject"
                                // control={methods.control}
                                // errors={methods.formState.errors}
                            />
                            <Input
                                type="text"
                                name="companyName"
                                label="Message"
                                // control={methods.control}
                                // errors={methods.formState.errors}
                            />
                            <Button>Submit</Button>
                        </Space>
                    </Col>
                </Row>
            </div>
            <Advantages />
        </div>
    );
};

export default Contact;
