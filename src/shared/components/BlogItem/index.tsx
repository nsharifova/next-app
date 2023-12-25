import React from "react";
import Image from "next/image";

import {
  CustomerSupportIcon,
  GuaranteeIcon,
  ShippingIcon,
  TrophyIcon,
} from "../Icons";
import RenderIf from "../RenderIf";

import classes from "./BlogItem.module.scss";

type BlogsItem = {
  id?: number;
  image: string;
  role: string;
  date: string;
  tag: string;
  title: string;
  description: string;
};

type BlogsData = BlogsItem[];

const Index = () => {
  const blogsData: BlogsData = [
    {
      id: 1,
      role: "Admin",
      date: "14 Oct 2022",
      tag: "Wood",
      image: "/images/blog-1.png",
      title: "Going all-in with millennial design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      id: 1,
      role: "Admin",
      date: "14 Oct 2022",
      tag: "Wood",
      image: "/images/blog-2.png",
      title: "Exploring new ways of decorating",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      id: 1,
      role: "Admin",
      date: "14 Oct 2022",
      tag: "Wood",
      image: "/images/blog-1.png",
      title: "Handmade pieces that took time to make",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
  ];

  return (
    <>
      <RenderIf condition={blogsData?.length}>
        {blogsData?.map((item) => (
          <div className={classes.BlogItem} key={item?.id}>
            <div className={classes.BlogItemImage}>
              <Image src={item?.image} alt="" width={285} height={300} />
            </div>

            <div className={classes.BlogItemSpecifications}></div>

            <div className={classes.BlogItemTitle}>
              Going all-in with millennial design
            </div>

            <div className={classes.BlogItemDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </div>
          </div>
        ))}
      </RenderIf>
    </>
  );
};

export default Index;
