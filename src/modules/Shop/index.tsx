"use client";
import { Advantages, ProductItem, TopPage } from "@/shared/components";
import classes from "./Shop.module.scss";

const Index = ({ productData }: any) => {
    console.log(productData);

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
                        description={c?.description}
                    />
                ))}
            </div>

            <Advantages />
        </div>
    );
};

export default Index;
