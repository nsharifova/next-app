import React from "react";
import Image from "next/image";
import { Button } from "antd";
import classes from "./Home.module.scss";
import { data } from "./data";
import { Card } from "@/shared/components";
const Title = React.lazy(() => import("@/shared/components/Title"));
// const Card = React.lazy(() => import("@/shared/components/Card"));

const About = () => {
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
                <Title
                    note="Browse The Range"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                {data?.map((c) => (
                    <Card key={c?.id} src={c?.image} />
                ))}
            </div>
        </div>
    );
};

export default About;
