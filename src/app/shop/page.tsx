import Shop from "@/modules/Shop";
import React from "react";
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
    const productData: any | null = await getProducts();
    return <Shop productData={productData} />;
}
