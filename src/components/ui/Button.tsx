"use-client";
import { Button as AntButton } from "antd";
import { revalidatePath, revalidateTag } from "next/cache";
import React from "react";

const Buttons = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props?: any;
}) => {
  return <AntButton 
  onClick={() =>{
    revalidateTag("avilable-service")
    revalidatePath("/available-services")
  }}
   {...props}>{children}</AntButton>;
};

export default Buttons;
