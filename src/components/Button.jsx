import React from 'react'

function Button({name, className="", ...props}) {
  return (
    <button className={`bg-[#2f3c7e] p-1.5 px-5 rounded-md hover:cursor-pointer hover:underline ${className}`} {...props}>{name}</button>
  )
}

export default Button