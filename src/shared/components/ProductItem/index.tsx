import React from "react";
import Image from "next/image";
import classes from "./ProductItem.module.scss";

type ProductsItem = {
    image: string;
    name: string;
    description: string;
    price: string;
};

const Index = ({ image, name, description, price }: ProductsItem) => {
    return (
        <>
            {/* {productData?.map((item) => ( */}
            <div className={classes.ProductsItem}>
                <div className={classes.ProductsItemImage}>
                    <Image src={image} alt="" width={285} height={300} />
                </div>

                <div className={classes.ProductsItemContent}>
                    <div className={classes.ProductsItemContentTitle}>
                        {name}
                    </div>
                    <div className={classes.ProductsItemContentDescription}>
                        {description}
                    </div>
                    <div className={classes.ProductsItemContentPrice}>
                        {price}
                    </div>
                </div>

                <div className={classes.ProductOverlay}>
                    <div className={classes.AddToCard}>Add to cart</div>
                </div>
            </div>
            {/* ))} */}
        </>
    );
};

export default Index;
