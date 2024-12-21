"use client";

import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="text-4xl bg-green-50">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex space-x-2">
          <Link
            href={"./posts/view"}
            className="font-bold hover:scale-110 transition-transform"
          >
            View
          </Link>
          <span>Or</span>
          <Link
            href={"./posts/createpost"}
            className="font-bold hover:scale-110 transition-transform"
          >
            Create
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
