import React from "react";
// import { Card } from "antd";
import Image from "next/image";
import Meta from "antd/es/card/Meta";
const Card = React.lazy(() => import("antd/es/card"));

type IProps = {
  id: number;
  name: string;
  slug: string;
  price: string;
  discount: string;
  perMonth: string;
  quantity: number;
  reviewCount: number;
  published: string;
  rate: null;
  image: string;
  brand: string;
  color: number;
  categories: number[];
  properties: number[];
  is_basket: boolean;
  is_favorite: boolean;
  is_compare: boolean;
};
const AntdCard = ({ id, name, image }: IProps) => {
  return (
    <Card
      key={id}
      hoverable
      style={{ width: "100%", height: "200px" }}
      // cover={<Image alt="example" src={image} layout="fill" />}
      cover={
        <img
          alt="example"
          src={image}
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
      }
    >
      <Meta title={name} />
    </Card>
  );
};

export default AntdCard;
