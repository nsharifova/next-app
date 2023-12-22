import Link from "next/link";
import Image from "next/image";

import { Advantages, ProductItem, TopPage } from "@/shared/components";

import classes from "./Shop.module.scss";

const Index = () => {
  return (
    <div className={classes.ShopPage}>
      <TopPage title="Shop" name="Shop" />

      <div className={classes.ShopPageFilterSpecifications}>Filter</div>

      <div className={classes.ShopPageProducts}>
        <ProductItem />
      </div>

      <Advantages />
    </div>
  );
};

export default Index;
