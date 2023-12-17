import React from "react";
// import { Card } from "antd";
import Image from "next/image";
import Meta from "antd/es/card/Meta";
const Card = React.lazy(() => import("antd/es/card"));

type IProps = {
    key: number;
    src: string;
    title?: string;
    description?: string;
};
const AntdCard = ({ src, title, description, key }: IProps) => {
    return (
        <Card
            key={key}
            hoverable
            style={{ width: 240 }}
            cover={<Image alt="example" src={src} layout="fill" />}
        >
            <Meta title={title} description={description} />
        </Card>
    );
};

export default AntdCard;
