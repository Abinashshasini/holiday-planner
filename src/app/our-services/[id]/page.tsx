import { notFound } from "next/navigation";
import { Metadata } from "next";
import { serviceDetailsData } from "@/utils";
import ServiceDetailsClient from "./ServiceDetailsClient";

export function generateStaticParams() {
  return [
    { id: "car-rental-and-booking" },
    { id: "luxury-car-wedding-car" },
    { id: "tempo-traveler-booking" },
  ];
}

const SITE_URL = "https://www.holidayplanners.co";

const serviceKeywords: Record<string, string[]> = {
  "car-rental-and-booking": [
    "car rental Bhubaneswar",
    "Odisha cab booking",
    "outstation taxi Bhubaneswar",
    "airport cab Bhubaneswar",
    "Innova rental Odisha",
    "Ertiga rent Bhubaneswar",
  ],
  "luxury-car-wedding-car": [
    "luxury car rental Bhubaneswar",
    "wedding car booking Odisha",
    "premium car hire Bhubaneswar",
    "marriage car decoration Odisha",
    "vintage car wedding Bhubaneswar",
  ],
  "tempo-traveler-booking": [
    "tempo traveller Bhubaneswar",
    "tempo traveller booking Odisha",
    "group tour vehicle Odisha",
    "17 seater tempo traveller Bhubaneswar",
    "12 seater tempo Odisha",
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  let data: any;
  if (id === "car-rental-and-booking") data = serviceDetailsData.carRental;
  else if (id === "luxury-car-wedding-car") data = serviceDetailsData.luxuryCar;
  else if (id === "tempo-traveler-booking")
    data = serviceDetailsData.tempoTraveler;

  if (!data) return { title: "Service Not Found" };

  const title = `${data.hTextOne} ${data.hTextTwo}`;

  return {
    title: `${title} in Bhubaneswar, Odisha`,
    description: `Professional ${title.toLowerCase()} services in Bhubaneswar, Odisha. Best rates, well-maintained vehicles, and experienced drivers. Book now with Holiday Planner.`,
    keywords: serviceKeywords[id] || [],
    alternates: { canonical: `/our-services/${id}` },
    openGraph: {
      title: `${title} | Holiday Planner Bhubaneswar`,
      description: `Premium ${title.toLowerCase()} services in Bhubaneswar. Trusted by 500+ customers across Odisha.`,
      url: `${SITE_URL}/our-services/${id}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} in Bhubaneswar, Odisha`,
      description: `Professional ${title.toLowerCase()} services in Bhubaneswar, Odisha. Best rates, well-maintained vehicles, and experienced drivers. Book now with Holiday Planner.`,
      images: ["/og-image.jpg"],
    },
  };
}

function ServiceJsonLd({ data, id }: { data: any; id: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${data.hTextOne} ${data.hTextTwo}`,
    description: `Professional ${data.hTextOne} ${data.hTextTwo} service in Bhubaneswar, Odisha.`,
    url: `${SITE_URL}/our-services/${id}`,
    provider: {
      "@type": "TravelAgency",
      name: "Holiday Planner",
      url: SITE_URL,
      telephone: "+91-9861151591",
    },
    areaServed: {
      "@type": "State",
      name: "Odisha",
    },
    serviceType: data.hTextOne + " " + data.hTextTwo,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function OurServicesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  let data: any;
  if (id === "car-rental-and-booking") data = serviceDetailsData.carRental;
  else if (id === "luxury-car-wedding-car") data = serviceDetailsData.luxuryCar;
  else if (id === "tempo-traveler-booking")
    data = serviceDetailsData.tempoTraveler;
  else return notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/our-services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${data.hTextOne} ${data.hTextTwo}`,
        item: `${SITE_URL}/our-services/${id}`,
      },
    ],
  };

  return (
    <>
      <ServiceJsonLd data={data} id={id} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiceDetailsClient data={data} />
    </>
  );
}
