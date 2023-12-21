import Link from "next/link";

import {
  TrophyIcon,
  GuaranteeIcon,
  ShippingIcon,
  CustomerSupportIcon,
} from "@/shared/components/Icons";

import classes from "./Shop.module.scss";

const Index = () => {
  return (
    <div className={classes.ShopPage}>
      <div className={classes.ShopPageBanner}>
        <div className={classes.ShopPageBannerImage}>
          <img src="/images/shop-banner.png" alt="" />

          <div className={classes.ShopPageBannerImageCover}>
            <div className={classes.ShopPageBannerImageCoverPageName}>Shop</div>

            <div className={classes.ShopPageBannerImageCoverBreadcrumb}>
              <Link href="">Home</Link> &gt;
              <Link href="">Shop</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.ShopPageFilterSpecifications}>Filter</div>

      <div className={classes.ShopPageProducts}>
        <div className={classes.ShopPageProductsItem}>
          <div className={classes.ShopPageProductsItemImage}>
            <img src="/images/shop-product-1.png" />
          </div>

          <div className={classes.ShopPageProductsItemContent}>
            <div className={classes.ShopPageProductsItemContentTitle}>
              Syltherine
            </div>
            <div className={classes.ShopPageProductsItemContentDescription}>
              Stylish cafe chair
            </div>
            <div className={classes.ShopPageProductsItemContentPrice}>
              Rp 2.500.000
            </div>
          </div>

          <div className={classes.ProductOverlay}>
            <div className={classes.AddToCard}>Add to cart</div>
          </div>
        </div>

        <div className={classes.ShopPageProductsItem}>
          <div className={classes.ShopPageProductsItemImage}>
            <img src="/images/shop-product-1.png" />
          </div>

          <div className={classes.ShopPageProductsItemContent}>
            <div className={classes.ShopPageProductsItemContentTitle}>
              Syltherine
            </div>
            <div className={classes.ShopPageProductsItemContentDescription}>
              Stylish cafe chair
            </div>
            <div className={classes.ShopPageProductsItemContentPrice}>
              Rp 2.500.000
            </div>
          </div>

          <div className={classes.ProductOverlay}>
            <div className={classes.AddToCard}>Add to cart</div>
          </div>
        </div>

        <div className={classes.ShopPageProductsItem}>
          <div className={classes.ShopPageProductsItemImage}>
            <img src="/images/shop-product-1.png" />
          </div>

          <div className={classes.ShopPageProductsItemContent}>
            <div className={classes.ShopPageProductsItemContentTitle}>
              Syltherine
            </div>
            <div className={classes.ShopPageProductsItemContentDescription}>
              Stylish cafe chair
            </div>
            <div className={classes.ShopPageProductsItemContentPrice}>
              Rp 2.500.000
            </div>
          </div>

          <div className={classes.ProductOverlay}>
            <div className={classes.AddToCard}>Add to cart</div>
          </div>
        </div>

        <div className={classes.ShopPageProductsItem}>
          <div className={classes.ShopPageProductsItemImage}>
            <img src="/images/shop-product-1.png" />
          </div>

          <div className={classes.ShopPageProductsItemContent}>
            <div className={classes.ShopPageProductsItemContentTitle}>
              Syltherine
            </div>
            <div className={classes.ShopPageProductsItemContentDescription}>
              Stylish cafe chair
            </div>
            <div className={classes.ShopPageProductsItemContentPrice}>
              Rp 2.500.000
            </div>
          </div>

          <div className={classes.ProductOverlay}>
            <div className={classes.AddToCard}>Add to cart</div>
          </div>
        </div>

        <div className={classes.ShopPageProductsItem}>
          <div className={classes.ShopPageProductsItemImage}>
            <img src="/images/shop-product-1.png" />
          </div>

          <div className={classes.ShopPageProductsItemContent}>
            <div className={classes.ShopPageProductsItemContentTitle}>
              Syltherine
            </div>
            <div className={classes.ShopPageProductsItemContentDescription}>
              Stylish cafe chair
            </div>
            <div className={classes.ShopPageProductsItemContentPrice}>
              Rp 2.500.000
            </div>
          </div>

          <div className={classes.ProductOverlay}>
            <div className={classes.AddToCard}>Add to cart</div>
          </div>
        </div>
      </div>

      <div className={classes.ShopPageAdvantages}>
        <div className={classes.ShopPageAdvantagesSection}>
          <div className={classes.ShopPageAdvantagesSectionIcon}>
            <TrophyIcon />
          </div>
          <div className={classes.ShopPageAdvantagesSectionContent}>
            <div className={classes.ShopPageAdvantagesSectionContentTitle}>
              High Quality
            </div>
            <div
              className={classes.ShopPageAdvantagesSectionContentDescription}
            >
              crafted from top materials
            </div>
          </div>
        </div>

        <div className={classes.ShopPageAdvantagesSection}>
          <div className={classes.ShopPageAdvantagesSectionIcon}>
            <GuaranteeIcon />
          </div>
          <div className={classes.ShopPageAdvantagesSectionContent}>
            <div className={classes.ShopPageAdvantagesSectionContentTitle}>
              Warranty Protection
            </div>
            <div
              className={classes.ShopPageAdvantagesSectionContentDescription}
            >
              Over 2 years
            </div>
          </div>
        </div>

        <div className={classes.ShopPageAdvantagesSection}>
          <div className={classes.ShopPageAdvantagesSectionIcon}>
            <ShippingIcon />
          </div>
          <div className={classes.ShopPageAdvantagesSectionContent}>
            <div className={classes.ShopPageAdvantagesSectionContentTitle}>
              Free Shipping
            </div>
            <div
              className={classes.ShopPageAdvantagesSectionContentDescription}
            >
              Order over 150 $
            </div>
          </div>
        </div>

        <div className={classes.ShopPageAdvantagesSection}>
          <div className={classes.ShopPageAdvantagesSectionIcon}>
            <CustomerSupportIcon />
          </div>
          <div className={classes.ShopPageAdvantagesSectionContent}>
            <div className={classes.ShopPageAdvantagesSectionContentTitle}>
              24 / 7 Support
            </div>
            <div
              className={classes.ShopPageAdvantagesSectionContentDescription}
            >
              Dedicated support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
