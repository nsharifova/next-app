import React from "react";

import ProductDetail from "@/modules/ProductDetail";
import { ProductDetailsType } from "./model";

const getProductDetail = async (slug: string) => {
    try {
        const res = await fetch(`https://api.b-e.az/product-details/${slug}`, {
            headers: {
                token: "test",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return await res.json();
    } catch (err) {}
};

const ProductDetailPage = async ({ params: { slug } }: any) => {
    const productDetails: ProductDetailsType | null = await getProductDetail(
        slug
    );

    return <ProductDetail productDetails={productDetails} />;
};

export default ProductDetailPage;
