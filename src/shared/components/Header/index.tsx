import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    AlertIcon,
    HeartIcon,
    SearchIcon,
    ShoppingCard,
} from "@/shared/components/Icons";
import classes from "./Header.module.scss";

const Header = () => {
    const pathname = usePathname();

    return (
        <div className={classes.Header}>
            <div className={classes.HeaderLeft}>
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                    unoptimized
                />
                <h1>Furniro</h1>
            </div>

            <div className={classes.HeaderCenter}>
                <ul>
                    <li>
                        <Link
                            scroll={true}
                            className={`link ${
                                pathname === "/" ? "active" : ""
                            }`}
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            scroll={true}
                            className={`link ${
                                pathname === "/about" ? "active" : ""
                            }`}
                            href="/about"
                        >
                            About
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            className={`link ${
                                pathname === "/products" ? "active" : ""
                            }`}
                            href="/products"
                        >
                            Products
                        </Link>
                    </li> */}
                    <li>
                        <Link
                            className={`link ${
                                pathname === "/shop" ? "active" : ""
                            }`}
                            href="/shop"
                        >
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`link ${
                                pathname === "/contact" ? "active" : ""
                            }`}
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={classes.HeaderRight}>
                <div>
                    <Link className="link" href="/cart">
                        <ShoppingCard />
                    </Link>
                </div>
                <div>
                    <AlertIcon />
                </div>
                <div>
                    <HeartIcon />
                </div>
                <div>
                    <SearchIcon />
                </div>
            </div>
        </div>
    );
};

export default Header;
