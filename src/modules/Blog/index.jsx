import Link from "next/link";
import Image from "next/image";

import { Advantages, BlogItem, TopPage } from "@/shared/components";

import classes from "./Blog.module.scss";

const Index = () => {
  return (
    <div className={classes.BlogPage}>
      <TopPage title="Blog" name="Blog" />

      <div className={classes.BlogPageWrapper}>
        <div className={classes.BlogPageWrapperLeftSide}>
          <div className={classes.BlogPageWrapperLeftSide}>
            <BlogItem />
          </div>
        </div>
        <div className={classes.BlogPageWrapperRightSide}>
          <div className={classes.RecentPosts}>
            <div className={classes.RecentPostsTitle}>Recent Posts</div>

            <div className={classes.RecentPostsItems}>
              <div className={classes.RecentPostsItemsItem}>
                <div className={classes.RecentPostsItemsItemImage}>
                  <img src="/images/blog-1.png" />
                </div>
                <div className={classes.RecentPostsItemsItemContent}>
                  <div className={classes.RecentPostsItemsItemContentTitle}>
                    Going all-in with millennial design
                  </div>
                  <div className={classes.RecentPostsItemsItemContentDate}>
                    03 Aug 2022
                  </div>
                </div>
              </div>

              <div className={classes.RecentPostsItemsItem}>
                <div className={classes.RecentPostsItemsItemImage}>
                  <img src="/images/blog-1.png" />
                </div>
                <div className={classes.RecentPostsItemsItemContent}>
                  <div className={classes.RecentPostsItemsItemContentTitle}>
                    Going all-in with millennial design
                  </div>
                  <div className={classes.RecentPostsItemsItemContentDate}>
                    03 Aug 2022
                  </div>
                </div>
              </div>

              <div className={classes.RecentPostsItemsItem}>
                <div className={classes.RecentPostsItemsItemImage}>
                  <img src="/images/blog-1.png" />
                </div>
                <div className={classes.RecentPostsItemsItemContent}>
                  <div className={classes.RecentPostsItemsItemContentTitle}>
                    Going all-in with millennial design
                  </div>
                  <div className={classes.RecentPostsItemsItemContentDate}>
                    03 Aug 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Advantages />
    </div>
  );
};

export default Index;
