import Shop from "@/modules/Shop";
import React from "react";
import { ProductsType } from "../products/model";
async function getProducts() {
    try {
        const res = await fetch(`https://api.b-e.az/best-seller`);
        if (!res.ok) {
            throw new Error("Fail");
        }
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}
export default async function ShopPage() {
    const productData: ProductsType | null = await getProducts();
    return <Shop productData={productData} />;
}
