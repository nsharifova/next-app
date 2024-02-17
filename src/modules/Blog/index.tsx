import { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import { Advantages, BlogItem, TopPage } from "@/shared/components";
import { IProps } from "./model";

import classes from "./Blog.module.scss";

const Index: FC<any> = ({ blog }) => {
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
              {blog?.map((item: any) => (
                <div className={classes.RecentPostsItemsItem}>
                  <div className={classes.RecentPostsItemsItemImage}>
                    <img src={item?.image} />
                  </div>
                  <div className={classes.RecentPostsItemsItemContent}>
                    <div className={classes.RecentPostsItemsItemContentTitle}>
                      {item?.title}
                    </div>
                    <div className={classes.RecentPostsItemsItemContentDate}>
                      {item?.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Advantages />
    </div>
  );
};

export default Index;
