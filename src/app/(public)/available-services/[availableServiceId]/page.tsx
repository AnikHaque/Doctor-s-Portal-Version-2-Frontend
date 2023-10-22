import React from "react";

const SingleAvailableServicePublic = async ({
  params: { availableServiceId },
}: {
  params: {
    availableServiceId: string;
  };
}) => {
  const availableServices = await fetch(
    `http://localhost:5000/api/v1/available-services/${availableServiceId}`,
    {
      next: {
        revalidate: 24 * 60 * 60, // time based revalidation
        //on demand revalidation
        tags: ["single-available-services"],
      },
      // cache: "no-cache",
    }
  );
  const availableDoctors = await fetch(
    `http://localhost:5000/api/v1/available-services/${availableServiceId}`,
    {
      next: {
        revalidate: 24 * 60 * 60, // time based revalidation
        //on demand revalidation
        tags: ["single-available-services"],
      },
      // cache: "no-cache",
    }
  );

  const { data } = await availableServices.json();
  return <div>{data.service.name}
  
  </div>;
};

export default SingleAvailableServicePublic;
