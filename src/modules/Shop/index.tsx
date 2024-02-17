"use client";
import { Advantages, ProductItem, TopPage } from "@/shared/components";
import classes from "./Shop.module.scss";

const Index = ({ productData }: any) => {
    console.log(productData);
    const handleAdd = (event: any, slug: string, quantity: number) => {
        event.preventDefault();
        fetch("https://api.b-e.az/addbasket", {
            method: "POST",
            headers: {
                token: "test",
            },
            body: JSON.stringify({ product_slug: slug, quantity: quantity }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className={classes.ShopPage}>
            <TopPage title="Shop" name="Shop" />

            <div className={classes.ShopPageFilterSpecifications}>Filter</div>

            <div className={classes.ShopPageProducts}>
                {productData?.map((c: any) => (
                    <ProductItem
                        key={c?.id}
                        name={c?.name}
                        price={c?.price}
                        image={c?.image}
                        handleClick={(event: any) =>
                            handleAdd(event, c?.slug, c?.quantity)
                        }
                        description={c?.description}
                    />
                ))}
            </div>

            <Advantages />
        </div>
    );
};

export default Index;
