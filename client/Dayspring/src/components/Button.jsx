import React from 'react'
import { Link } from "react-router-dom";


function Button({to,onClick,disabled,children,type}) {
    const base = " uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-400 transition ease-in-out duration-200"
    const styles ={
        primary:base+" px-4 py-3 md:px-6 md:py-4"
        ,
        secondary:base+" px-4 py-2 md:px-5 md:py-2.5 text-xs"

        ,tertiary:base+ " px-4 py-2 md:px-5 md:py-2.5 text-xs"
    }
    if (to)
        return (
          <Link to={to} className={styles[type]}>
            {children}
          </Link>
        );
       
        if(onClick)
            return (<button disabled={disabled} className={styles[type]} onClick={onClick}>
                {children}
              </button>
            )
  return (
   <button className={styles[type]}>{children}</button>
  )
}

export default Button