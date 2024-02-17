import React from "react";
// import { Card } from "antd";
import Image from "next/image";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
const Card = React.lazy(() => import("antd/es/card"));

type IProps = {
    key?: number;
    src: string;
    title: string;
    description?: string;
    height?: string;
};
const AntdCard = ({ src, title, description, key, height }: IProps) => {
    console.log(key);

    return (
        <Link href={`/products/${key}`}>
            <Card
                key={key}
                hoverable
                style={{ width: "100%", height: height }}
                cover={
                    <Image alt="example" src={src} width={100} height={100} />
                }
            >
                <Meta title={title} description={description} />
            </Card>
        </Link>
    );
};

export default AntdCard;
