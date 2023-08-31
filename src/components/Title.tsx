import React from "react"

const Title = ({children, title}: {children: React.ReactNode, title: string}) => {
  return (
    <div className="flex w-full items-center my-4 mx-0 rounded-md bg-[#f8f8f8] p-3">
      {children}
      <span className="ml-4 text-base">{title}</span>
    </div>
  )
}

export default Title