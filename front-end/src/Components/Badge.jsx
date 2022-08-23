import React from 'react'

 const  Badge= ({children,statusId}) => {
    let classes=[];
    classes[2]='bg-green-100 text-green-800';
    classes[3]='bg-red-200 text-red-800';
    classes[1]='bg-yellow-100 text-yellow-800';
    classes[4]='bg-sky-100 text-sky-800';


  return (
    <div className={"px-3 leading-wide font-bold text-xs rounded-full shadow-sm text-center "+classes[statusId]} >{children}</div>
  )
}
export default Badge;