
'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { AlertIcon, HeartIcon, SearchIcon, ShoppingCard } from '@/shared/components/Icons';
import classes from './Footer.module.scss'

const Footer = () => {
 const [show, setShow] = useState(false);

  const handleToggleShow = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
        <div>
          <div className={classes.box__mainFooter}>
            <div>
              <h1>Contact us</h1>
              <ul>
                <li>
                  Tel: <a href="tel:+994124971333">+994124971333</a>
                </li>
                <li>
                  Fax: <a href="tel: +994124971091">+994124971091</a>
                </li>
                <li>
                  <a
                    href="mailto:csrplatform@amchamaz.org"
                    style={{
                      marginLeft: "0px",
                      color: "#1FC4DA",
                      textDecoration: "underline",
                    }}
                  >
                    csrplatform@amchamaz.org
                  </a>
                </li>
                <li>90A Nizami street, Landmark III, 13th floor</li>
              </ul>
            </div>
            <div className={classes.box__aboutUs}>
              <h1>About us</h1>
              <ul>
                <Link href="/about">
                  <li>About AmCham CSR Platform</li>
                </Link>
                <Link href="/ourTeam">
                  <li>Our team</li>
                </Link>
                <Link href="/ourValues">
                  <li>Our values</li>
                </Link>
              </ul>
              <div className={classes.box__discoverMobile}>
                <h1>Discover</h1>
                <ul>
                  <Link href="/explore-projects">
                    <li>Projects</li>
                  </Link>
                  <Link href="partners">
                    <li>Affiliates</li>
                  </Link>

                  <Link href="/contributors">
                    <li>Contributors</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className={classes.box__discoverDesktop}>
              <h1>Discover</h1>
              <ul>
                <Link href="/explore-projects">
                  <li>Projects</li>
                </Link>
                <Link href="partners">
                  <li>Affiliates</li>
                </Link>

                <Link href="/contributors">
                  <li>Contributors</li>
                </Link>
              </ul>
            </div>
            <div>
              <h1>Other links</h1>
              <ul>
                <Link href="/news">
                  <li>News</li>
                </Link>

                <li>Video tutoriol</li>
                <li>
                  <a
                    href="https://amcham.az"
                    target="_blank"
                    style={{ marginLeft: "0px", color: "#1FC4DA" }}
                  >
                    AmCham website
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Policies</h1>
              <ul>
                {/* <Link href="/communityGuidlines">
                  <li>Community guidlines</li>
                </Link> */}
                <Link href="/termsOfUse">
                  <li>Term of use</li>
                </Link>
                <Link href="privacyPolicy">
                  <li>GDPR</li>
                </Link>
                <Link href="/legal">
                  <li>Code of Conduct</li>
                </Link>
              </ul>
            </div>
          </div>
       
        </div>
  );

}

export default Footer