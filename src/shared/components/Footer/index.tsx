"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    AlertIcon,
    HeartIcon,
    SearchIcon,
    ShoppingCard,
} from "@/shared/components/Icons";
import classes from "./Footer.module.scss";
import { Col, Divider, Row, Typography } from "antd";

const Footer = () => {
    const [show, setShow] = useState(false);

    const handleToggleShow = () => {
        setShow((prevShow) => !prevShow);
    };
    return (
        <div>
            <div className={classes.box__mainFooter}>
                <Row>
                    <Col flex={2}>
                        <div>
                            <h1>Furnito.</h1>
                            <span>
                                400 University Drive Suite 200 Coral Gables, FL
                                33134 USA
                            </span>
                        </div>
                    </Col>
                    <Col flex={3}>
                        <Row>
                            <Col span={8}>
                                {" "}
                                <div className={classes.box__aboutUs}>
                                    <h4>Links</h4>
                                    <ul>
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/products">
                                                Products
                                            </Link>
                                        </li>
                                    </ul>
                                    <div
                                        className={classes.box__discoverMobile}
                                    >
                                        <h1>Help</h1>
                                        <ul>
                                            <Link href="/explore-projects">
                                                <li>Payment Options</li>
                                            </Link>
                                            <Link href="partners">
                                                <li>Returns</li>
                                            </Link>

                                            <Link href="/contributors">
                                                <li>Privacy</li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className={classes.box__discoverDesktop}>
                                    <h4>Newsletter</h4>
                                    <ul>
                                        <li>
                                            {" "}
                                            <Link href="/explore-projects">
                                                {" "}
                                            </Link>
                                            Projects
                                        </li>

                                        <li>
                                            <Link href="partners">
                                                Affiliates
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/contributors">
                                                Contributors
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div>
                                    <h4>Other links</h4>
                                    <ul>
                                        <li>
                                            <Link href="/news">News</Link>
                                        </li>

                                        <li>Video tutoriol</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Divider />
                <Typography.Text strong>
                    2023 furino. All rights reverved
                </Typography.Text>
            </div>
        </div>
    );
};

export default Footer;
