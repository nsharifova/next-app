import React from "react";

import { ProductItem } from "@/shared/components";

import classes from "./ProductDetail.module.scss";

const Index = () => {
  return (
    <div className={classes.ProductDetailPage}>
      <div className={classes.ProductDetails}>
        <div className={classes.ProductDetailsImage}>
          <img src="/images/shop-product-1.png" alt="" />
        </div>
        <div className={classes.ProductDetailsProperties}>
          <div className={classes.ProductDetailsPropertiesName}>
            Asgaard sofa
          </div>
          <div className={classes.ProductDetailsPropertiesPrice}>
            Rs. 250,000.00
          </div>
          <div className={classes.ProductDetailsPropertiesRating}>
            {/* <div className={classes.ProductDetailsPropertiesRatingStars}></div> */}
            <div className={classes.ProductDetailsPropertiesRatingReview}>
              5 Customer Review
            </div>
          </div>
          <div className={classes.ProductDetailsPropertiesInformation}>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </div>
          <div className={classes.ProductDetailsPropertiesSize}>
            <div className={classes.ProductDetailsPropertiesSizeTitle}>
              Size
            </div>
            <div className={classes.ProductDetailsPropertiesSizeBox}>
              <div className={classes.ProductDetailsPropertiesSizeBoxItem}>
                L
              </div>
              <div className={classes.ProductDetailsPropertiesSizeBoxItem}>
                XL
              </div>
              <div className={classes.ProductDetailsPropertiesSizeBoxItem}>
                XS
              </div>
            </div>
          </div>
          <div className={classes.ProductDetailsPropertiesColors}>
            <div className={classes.ProductDetailsPropertiesColorsTitle}>
              Color
            </div>
            <div className={classes.ProductDetailsPropertiesColorsBox}>
              <div
                className={classes.ProductDetailsPropertiesColorsBoxItem}
              ></div>
              <div
                className={classes.ProductDetailsPropertiesColorsBoxItem}
              ></div>
              <div
                className={classes.ProductDetailsPropertiesColorsBoxItem}
              ></div>
            </div>
          </div>

          <div className={classes.AddToCart}>
            <div className={classes.AddToCartCount}>
              <div className={classes.AddToCartCountIncrement}>-</div>
              <div className={classes.AddToCartCountInput}>1</div>
              <div className={classes.AddToCartCountDecrement}>+</div>
            </div>
            <div className={classes.AddToCartBtn}>Add To Cart</div>
          </div>
        </div>
      </div>

      <div className={classes.RelatedSection}>
        <div className={classes.RelatedSectionTitle}>Related Products</div>
        <div className={classes.RelatedSectionProducts}>
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default Index;
