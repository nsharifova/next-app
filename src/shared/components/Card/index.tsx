import React from "react";
// import { Card } from "antd";
import Image from "next/image";
import Meta from "antd/es/card/Meta";
const Card = React.lazy(() => import("antd/es/card"));

type IProps = {
    key?: number;
    src: string;
    title: string;
    description?: string;
    height?: string;
};
const AntdCard = ({ src, title, description, key, height }: IProps) => {
    return (
        <Card
            key={key}
            hoverable
            style={{ width: "100%", height: height }}
            cover={<Image alt="example" src={src} layout="fill" />}
        >
            <Meta title={title} description={description} />
        </Card>
    );
};

export default AntdCard;
