import React from 'react'

interface Iprops{
    children: React.ReactNode
    className?: string
}

const Button = ({children , className , ...rest}:Iprops) => {
  return (
    <button className={`${className} rounded-md px-4 py-2 w-full text-white`} {...rest}>{children}</button>
  )
}

export default Button