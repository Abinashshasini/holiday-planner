import React from "react";
import OurPackagesClient from "./OurPackagesClient";
import type { SanityPackage } from "@/sanity/queries";

const OurPackages = ({ packages }: { packages?: SanityPackage[] }) => {
  return <OurPackagesClient packages={packages} />;
};

export default OurPackages;
