import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const LeftPanel = () => {
  const router = useRouter();
  const { wsSlug, dsSlug, version, brand } = router.query;

  const url = `/ws/${wsSlug}/ds/${dsSlug}/${version}`;

  return (
    <div className="flex flex-col w-14 h-screen bg-gray-300">
      <div className="py-4 text-center bg-gray-800 text-white">Logo</div>

      <div className="flex flex-col grow">
        <Link href={`${url}/content/${brand}/tokens/colors`}><div className="py-2 text-center">C</div></Link>
        <Link href={`${url}/documentation/editor`}><div className="py-2 text-center">D</div></Link>
        <div className="py-2 text-center">I</div>

        <div className="mt-auto">
          <div className="py-2 text-center">T</div>
          <div className="py-2 text-center">S</div>
        </div>
      </div>
    </div>
  );
};
