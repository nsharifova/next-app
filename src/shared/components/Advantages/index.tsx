import React from "react";

import {
  CustomerSupportIcon,
  GuaranteeIcon,
  ShippingIcon,
  TrophyIcon,
} from "../Icons";
import RenderIf from "../RenderIf";

import classes from "./Advantages.module.scss";

type AdvantagesItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type AdvantagesData = AdvantagesItem[]

const Advantages = () => {
  const advantagesData: AdvantagesData = [
    {
      icon: <TrophyIcon />,
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      icon: <GuaranteeIcon />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <ShippingIcon />,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: <CustomerSupportIcon />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className={classes.Advantages}>
      <RenderIf condition={advantagesData?.length}>
        {advantagesData?.map((item, index) => (
          <div className={classes.AdvantagesSection} key={index}>
            <div className={classes.AdvantagesSectionIcon}>{item?.icon}</div>
            <div className={classes.AdvantagesSectionContent}>
              <div className={classes.AdvantagesSectionContentTitle}>
                {item?.title}
              </div>
              <div className={classes.AdvantagesSectionContentDescription}>
                {item?.description}
              </div>
            </div>
          </div>
        ))}
      </RenderIf>
    </div>
  );
};

export default Advantages;
