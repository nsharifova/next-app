"use client";
import { Advantages, ProductItem, TopPage } from "@/shared/components";
import classes from "./Shop.module.scss";
import { useAddToCartMutation } from "@/redux/api/product";
import { ProductsType } from "@/app/products/model";
import { IProps } from "./models";

const Index: React.FC<IProps> = ({ productData }: any) => {
    const [addToCard] = useAddToCartMutation();

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
                        handleClick={() =>
                            addToCard({
                                product_slug: c?.slug,
                                quantity: c?.quantity,
                            })
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
