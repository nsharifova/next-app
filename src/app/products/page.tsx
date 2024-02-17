import React from "react";
import Link from "next/link";
import { ProductsType } from "./model";
import { Card } from "antd";
import classes from "./Products.module.scss";

const getPosts = async () => {
    try {
        const res = await fetch("https://api.b-e.az/best-seller");

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return await res.json();
    } catch (error) {}
};

export default async function Products() {
    const products: ProductsType[] | null = await getPosts();

    return (
        <div className={classes.Products}>
            {products?.map((product: ProductsType) => (
                <Link key={product?.slug} href={`/products/${product?.slug}`}>
                    <div className={classes.ProductsItem} key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div>{product?.name}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
