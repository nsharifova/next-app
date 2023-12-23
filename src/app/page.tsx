"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Button, Col, Row, Space, Typography } from "antd";
import classes from "./Home.module.scss";
import { Card } from "@/shared/components";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./data/data";

export interface RoomTypes {
    id: string;
    title: string;
    category: string;
    image: any;
    index?: string;
}

const Title = React.lazy(() => import("@/shared/components/Title"));
export const roomData: RoomTypes[] = [
    {
        id: "1",
        title: "Inner Peace",
        category: "Bed Room",
        image: "images/home/image1.png",
        index: "1",
    },
    {
        id: "2",
        title: "Inner Peace",
        category: "Bed Room",
        image: "images/home/image2.png",
        index: "2",
    },
    {
        id: "3",
        title: "Inner Peace",
        category: "Bed Room",
        image: "images/home/image3.png",
        index: "3",
    },
];

const Page = () => {
    const [activeSlide, setActiveSlide] = useState<string>(roomData[0].id);

    return (
        <div className={classes.homeMain}>
            <div className={classes.homeMainTop}>
                <div className={classes.homeMainTopImage}>
                    <Image
                        src="/images/home/background.png"
                        layout="fill"
                        alt="Picture of the author"
                    />
                </div>
                <div className={classes.homeMainTopCard}>
                    <span>New Arrival</span>
                    <h4>Discover Our New Collection</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                    <Button>Buy Now</Button>
                </div>
            </div>
            <div className={classes.homeMainRange}>
                <Space
                    direction="vertical"
                    size="middle"
                    style={{ display: "flex" }}
                >
                    <Title
                        note="Browse The Range"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />

                    <Row gutter={[24, 16]}>
                        {data?.map((c) => (
                            <Col key={c?.id} className="gutter-row" span={8}>
                                <Card
                                    key={c?.id}
                                    src={c?.image}
                                    title={c?.name}
                                    height="480px"
                                />
                                <Typography.Title level={4}>
                                    {c?.name}
                                </Typography.Title>
                            </Col>
                        ))}
                    </Row>
                </Space>
            </div>
            <div className={classes.homeMainInspiration}>
                <Row>
                    <Col span={8}>
                        <div>
                            <Typography.Title level={1}>
                                50+ Beautiful rooms inspiration
                            </Typography.Title>
                            <p>
                                Our designer already made a lot of beautiful
                                prototipe of rooms that inspire you{" "}
                            </p>
                            <Button>Explore More</Button>
                        </div>
                    </Col>
                    <Col span={16}>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            navigation={{}}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className={classes.mySwiper}
                        >
                            {roomData?.map((slide) => (
                                <SwiperSlide key={slide?.id}>
                                    <div
                                        style={{ margin: "10px" }}
                                        className="w-full h-[530px]"
                                    >
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className={`${
                                                slide.id === activeSlide
                                                    ? "h-100"
                                                    : "h-90"
                                            }`}
                                            style={{
                                                width: "400px",
                                            }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Page;
