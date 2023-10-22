import PublicCard from "@/components/view/Public/PublicCard";
import Link from "next/link";

const AvailableServicePublic = async () => {
  const res = await fetch("http://localhost:5000/api/v1/available-services", {
    // cache: "no-cache",
    next: {
      revalidate: 24 * 60 * 60, // time based revalidation
      //on demand revalidation
      tags: ["available-services"],
    },
  });
  //doctor => cache / store
  //service => cache / store
  //available doctor => no cache / no store
  //available service => no cache / no store
  const { data } = await res.json();
  console.log(data);
  return (
    <div>
      {data.map((availableService: any) => {
        return (
          <Link
            key={data.id}
            href={`/available-services/${availableService.id}`}
          >
            <PublicCard title={availableService.service.name} hoverable>
              {availableService.slotDate}
            </PublicCard>
          </Link>
        );
      })}
    </div>
  );
};

export default AvailableServicePublic;
