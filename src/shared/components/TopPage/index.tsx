import Link from "next/link";
import React from "react";
import { IProps } from "./models";
import classes from "./TopPage.module.scss";
import Image from "next/image";
import arrow from "public/images/Right2.png";
import logo from "public/images/furnitoLogo.png";

const TopPage = ({ title, name }: IProps) => {
    return (
        <div className={classes.sectionMain}>
            <Image alt="name" className={classes.sectionMainLogo} src={logo} />
            <h2 className={classes.sectionMainTitle}>{title}</h2>
            <div className={classes.sectionMainInner}>
                <Link href="/">Home</Link>
                <Image alt={name} src={arrow} />
                <p>{name}</p>
            </div>
        </div>
    );
};

export default TopPage;
