import React from "react";
import Image from "next/image";

import {
  CustomerSupportIcon,
  GuaranteeIcon,
  ShippingIcon,
  TrophyIcon,
} from "../Icons";
import RenderIf from "../RenderIf";

import classes from "./ProductItem.module.scss";

type ProductsItem = {
  id?: number;
  image: string;
  name: string;
  description: string;
  price: string;
};

type ProductsData = ProductsItem[];

const Index = () => {
  const productData: ProductsData = [
    {
      id: 1,
      image: "/images/shop-product-1.png",
      name: "Syltherine",
      description: "crafted from top materials",
      price: "Rp 2.500.000",
    },
    {
      id: 2,
      image: "/images/shop-product-1.png",
      name: "Syltherine",
      description: "crafted from top materials",
      price: "Rp 2.500.000",
    },
    {
      id: 3,
      image: "/images/shop-product-1.png",
      name: "Syltherine",
      description: "crafted from top materials",
      price: "Rp 2.500.000",
    },
    {
      id: 4,
      image: "/images/shop-product-1.png",
      name: "Syltherine",
      description: "crafted from top materials",
      price: "Rp 2.500.000",
    },
    {
      id: 5,
      image: "/images/shop-product-1.png",
      name: "Syltherine",
      description: "crafted from top materials",
      price: "Rp 2.500.000",
    },
  ];

  return (
    <>
      <RenderIf condition={productData?.length}>
        {productData?.map((item) => (
          <div className={classes.ProductsItem} key={item?.id}>
            <div className={classes.ProductsItemImage}>
              <Image src={item?.image} alt="" width={285} height={300} />
            </div>

            <div className={classes.ProductsItemContent}>
              <div className={classes.ProductsItemContentTitle}>
                {item?.name}
              </div>
              <div className={classes.ProductsItemContentDescription}>
                {item?.description}
              </div>
              <div className={classes.ProductsItemContentPrice}>
                {item?.price}
              </div>
            </div>

            <div className={classes.ProductOverlay}>
              <div className={classes.AddToCard}>Add to cart</div>
            </div>
          </div>
        ))}
      </RenderIf>
    </>
  );
};

export default Index;
