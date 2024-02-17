import React from "react";
import { Typography } from "antd";

// import { cartModalCloseIcon, closeIcon } from "../Icons";
// import { Button, Loading } from "@/shared/components";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setShopMenu } from "@/store/features/app/appSlice";
// import { Link } from "react-router-dom";
// import {
//     useDeleteCartItemMutation,
//     useGetCartQuery,
// } from "@/services/cartApi/cartApi";
// import { errorAlert, successAlert } from "@/utils/toaster";
import Link from "next/link";
import { data } from "./data";
import { CloseCircleFilled, LoadingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ModalType } from "../Header/models";
import classes from "./CardSideBar.module.scss";

// import { getValue } from "@/utils/storage";
export type IProps = {
    show: boolean;
    onHide: () => void;
};
const CardSideBar: React.FC<IProps> = ({ show, onHide }) => {
    // const dispatch = useAppDispatch();
    // const { shopMenu } = useAppSelector((state) => state.app);
    // const [deleteCartItem] = useDeleteCartItemMutation();

    // const isAuth = getValue("user")?.access_token ? true : false;
    // isAUth ? const { data: cartData, refetch: refetchCart } = useGetCartQuery() : null
    // const { data: cartData, isLoading } = useGetCartQuery();

    // Cart remove func
    // const handleDeleteCartItem = async (cartItemId: number) => {
    //     try {
    //         await deleteCartItem(cartItemId);
    //         successAlert("Product is removed from cart!");
    //     } catch (error: any) {
    //         errorAlert(error);
    //     }
    // };
    // Cart remove func

    React.useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }, [show]);
    // console.log(show === ModalType.SIDEBAR);

    return (
        <>
            <div
                className={
                    show
                        ? `${classes.ShopModal} ${classes.ShopModalActive}`
                        : `${classes.ShopModal}`
                }
            >
                <div className={classes.menuHeader}>
                    <h1 className="m-0">Shopping Cart</h1>
                    {/* <img
                        src={cartModalCloseIcon}
                        alt="Furniro"
                        className="cursor-pointer"
                        onClick={() => dispatch(setShopMenu(false))}
                        
                    /> */}
                    <CloseCircleFilled onClick={onHide} />
                </div>
                {data?.length ? (
                    <>
                        <div className={classes.menuBody}>
                            {data?.map((item) => (
                                <div
                                    className="shopping-cart d-flex align-items-center justify-content-between"
                                    key={item?.id}
                                >
                                    <div className="d-flex align-items-center w-100 justify-content-between">
                                        <div className="img-wrapper">
                                            <img
                                                src={item?.imageUrls[0]}
                                                alt="Furniro"
                                            />
                                        </div>
                                        <div className="cart-content">
                                            <Typography.Title level={4}>
                                                {item?.productName} (
                                                {item?.color})
                                            </Typography.Title>

                                            <h5 className="d-flex align-items-center m-0 gap-3">
                                                <span className="quantity">
                                                    {item?.quantity}
                                                </span>
                                                <span className="times">X</span>
                                                <span className="price">
                                                    Rs. {item?.price}
                                                </span>
                                            </h5>
                                        </div>
                                        <div
                                            className="close-icon cursor-pointer"
                                            // onClick={() =>
                                            //     handleDeleteCartItem(item?.id)
                                            // }
                                        >
                                            <CloseCircleFilled />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={classes.menuFooter}>
                            <div className="menu-footer-top d-flex align-items-center">
                                <Typography.Title level={2}>
                                    Subtoral: 123
                                </Typography.Title>
                            </div>
                            <div className="menu-footer-bottom d-flex align-items-center">
                                {/* <Button
                                    text="Cart"
                                    type="check-out"
                                    href="/cart"
                                    // onClick={() => dispatch(setShopMenu(false))}
                                />
                                <Button
                                    text="Checkout"
                                    type="check-out"
                                    href="/checkout"
                                    // onClick={() => dispatch(setShopMenu(false))}
                                /> */}
                            </div>
                        </div>
                    </>
                ) : (
                    <h1 className="empty-cart">
                        Cart is empty
                        <Link
                            href="/shop"
                            // onClick={() => dispatch(setShopMenu(false))}
                        >
                            Go To Shop Page
                        </Link>
                    </h1>
                )}
            </div>
        </>
    );
};

export default CardSideBar;
