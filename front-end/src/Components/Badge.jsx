import React from 'react'

 const  Badge= ({children,statusId}) => {
    let classes=[];
    classes[1]='bg-green-100 text-green-800';
    classes[0]='bg-pink-100 text-pink-800';
    classes[2]='bg-yellow-100 text-yellow-800';


  return (
    <div className={"px-3 leading-wide font-bold text-xs rounded-full shadow-sm text-center "+classes[statusId]} >{children}</div>
  )
}
export default Badge;