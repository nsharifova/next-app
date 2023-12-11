import React from 'react'
import {AlertIcon, HeartIcon, SearchIcon, ShoppingCard} from '@/shared/components/Icons'
import classes from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (

      <div className={classes.Header}>
            <div className={classes.HeaderLeft}>
                <Image src="/images/logo.png"
                  alt="logo"
                  width={50} 
                  height={50}
                  unoptimized
                />
                <h1>Furniro</h1>
          </div>
      
         <div className={classes.HeaderCenter}>
                <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/products">Products</Link></li>
                </ul>
          </div>
         <div className={classes.HeaderRight}>
                <div>
                    <ShoppingCard/>
                </div>
                  <div>
                    <AlertIcon/>
                </div>
                  <div>
                    <HeartIcon/>
                </div>
                  <div>
                    <SearchIcon/>
                </div>
            </div>
            </div>
      
  )
}

export default Header