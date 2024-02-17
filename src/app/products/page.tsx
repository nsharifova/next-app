import { Card } from "@/shared/components";
import React from "react";
type Post = {
    id: number;
    title: string;
};
// const getPosts = async (): Promise<Post[]> => {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const posts = await data.json();
//     return posts;
// };
async function getProducts() {
    try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        if (!res.ok) {
            throw new Error("Fail");
        }
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}

export default async function Products() {
    const productData: any | null = await getProducts();

    return (
        <div>
            Products
            <div className="row">
                {productData?.map((post: any) => (
                    <div key={post?.id} className="col-lg-3">
                        <Card
                            key={post?.id}
                            title={post?.title}
                            src={post?.image}
                            description={post?.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
