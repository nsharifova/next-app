import React from "react";
import { IProps } from "./model";
import RenderIf from "@/shared/components/RenderIf";
import classes from "./Title.module.scss";

const Title: React.FC<IProps> = ({ note, description }) => {
    return (
        <>
            <h4 className={classes.title}>{note}</h4>
            <RenderIf condition={description}>
                <p className={classes.description}>{description}</p>
            </RenderIf>
        </>
    );
};

export default Title;
