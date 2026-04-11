"use client";
import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m as motion,
  type Variants,
} from "framer-motion";
import { FaWhatsapp, FaUsers, FaTags } from "react-icons/fa";
import dynamic from "next/dynamic";
const RFQCard = dynamic(() => import("@/components/rfq-card"));
const WhyChooseUs = dynamic(() => import("@/components/why-choose"));
const GetInTouch = dynamic(() => import("@/components/get-in-touch"));
import useWhatsApp from "@/hooks/useWhatsApp";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const ServiceDetailsClient = ({ data }: { data: any }) => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  // Gather all unique row labels from the first car entry
  const rowLabels: string[] =
    data.type === "table" && data.tData?.length
      ? data.tData[0].data.map((d: any) => d.info)
      : [];

  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-bg-deepest pt-[65px]">
        {/* ── Hero ── */}
        <div className="relative h-[45vh] min-h-[380px] bg-bg-deepest flex items-center justify-center overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773410049/odisha-mobile_yhelr2.png"
            alt="Service Hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,10,19,0.4)] to-[rgba(6,10,19,0.92)] z-[1]" />
          <motion.div
            className="relative z-[2] text-center max-w-[1200px] w-full px-5 md:px-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-sm font-extrabold text-gold-400 uppercase tracking-[0.2em] mb-4">
              Our Services
            </span>
            <h1 className="font-[var(--font-main)] text-[clamp(2.5rem,8vw,4rem)] font-black text-white leading-[1.1] tracking-tight">
              {data.hTextOne}{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                {data.hTextTwo}
              </span>
            </h1>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-14">
          {/* ── Comparison Table (car rental pricing) ── */}
          {data.type === "table" && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 text-xs font-extrabold text-gold-300 uppercase tracking-[0.15em] bg-gold-400/10 px-4 py-1.5 rounded-full mb-4">
                  <FaTags /> Transparent Pricing
                </span>
                <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-text-primary tracking-tight mb-4">
                  Compare Our Rates
                </h2>
                <p className="text-base text-text-secondary max-w-[600px] mx-auto leading-relaxed">
                  All prices are inclusive of driver allowance. Extra km / hr
                  charges apply beyond the package limit.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-200 bg-bg-surface [-webkit-overflow-scrolling:touch]">
                <table className="w-full border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-5 px-6 text-left text-xs font-extrabold uppercase tracking-wider text-text-muted whitespace-nowrap w-[200px] min-w-[160px]">
                        Package / Rate
                      </th>
                      {data.tData.map((car: any) => (
                        <th
                          key={car.id}
                          className="py-5 px-6 text-center text-sm font-extrabold text-text-primary whitespace-nowrap border-l border-gray-200"
                        >
                          {car.carName}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rowLabels.map((label: string, rIdx: number) => (
                      <tr
                        key={label}
                        className={
                          rIdx % 2 === 0 ? "bg-bg-surface" : "bg-bg-elevated"
                        }
                      >
                        <td className="py-4 px-6 text-sm font-bold text-text-secondary whitespace-nowrap border-r border-gray-200">
                          {label}
                        </td>
                        {data.tData.map((car: any) => (
                          <td
                            key={car.id}
                            className="py-4 px-6 text-center text-base font-extrabold text-text-primary border-l border-gray-200 whitespace-nowrap"
                          >
                            {car.data[rIdx]?.price ?? "—"}
                          </td>
                        ))}
                      </tr>
                    ))}
                    {/* Book row */}
                    <tr className="bg-gold-400/[0.03] border-t-2 border-gray-200">
                      <td className="py-4 px-6 text-sm font-bold text-text-secondary whitespace-nowrap border-r border-gray-200">
                        Book
                      </td>
                      {data.tData.map((car: any) => (
                        <td
                          key={car.id}
                          className="py-4 px-5 text-center border-l border-gray-200"
                        >
                          <button
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-white text-sm font-extrabold border-none cursor-pointer whitespace-nowrap transition-all hover:-translate-y-0.5 hover:shadow-gold"
                            onClick={() =>
                              handleRedirectTheUserToWhatsApp({
                                messageType: "dynamic",
                                dynamicMessage: `Hi, I want to book ${car.carName}. Please share details.`,
                              })
                            }
                          >
                            <FaWhatsapp /> Book
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm text-text-muted italic text-center">
                * Prices may vary during peak season. Contact us for outstation
                / overnight rates.
              </p>
            </motion.div>
          )}

          {/* ── Image Fleet Grid ── */}
          {data.type === "images" && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 text-xs font-extrabold text-gold-300 uppercase tracking-[0.15em] bg-gold-400/10 px-4 py-1.5 rounded-full mb-4">
                  <FaUsers /> Available Fleet
                </span>
                <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-text-primary tracking-tight mb-4">
                  Our Vehicles
                </h2>
                <p className="text-base text-text-secondary max-w-[600px] mx-auto leading-relaxed">
                  Well-maintained, air-conditioned vehicles with professional
                  drivers across Odisha.
                </p>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {data.imageData?.map((element: any, idx: number) => (
                  <motion.div
                    key={`${element.id}-${idx}`}
                    variants={fadeUp}
                    className="group bg-bg-surface rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover hover:border-gold-400/30"
                  >
                    <div className="relative h-[200px] overflow-hidden bg-bg-elevated">
                      <Image
                        src={element.image}
                        alt={element.carName}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,10,19,0.35)] to-transparent" />
                    </div>
                    <div className="p-5 pb-6">
                      <h3 className="text-lg font-black text-text-primary mb-2 tracking-tight">
                        {element.carName}
                      </h3>
                      <p className="flex items-center gap-2 text-sm font-semibold text-text-secondary mb-5 [&>svg]:text-gold-400 [&>svg]:shrink-0">
                        <FaUsers /> {element.capacity}
                      </p>
                      <button
                        className="w-full py-3 px-4 rounded-full bg-bg-elevated text-gold-400 font-extrabold text-sm border border-gold-400/30 cursor-pointer flex items-center justify-center gap-2 transition-all hover:bg-gradient-to-r hover:from-gold-400 hover:to-gold-600 hover:text-white hover:border-transparent hover:shadow-gold"
                        onClick={() =>
                          handleRedirectTheUserToWhatsApp({
                            messageType: "dynamic",
                            dynamicMessage: `Hi, I'm interested in the ${element.carName}. Please share booking details.`,
                          })
                        }
                      >
                        <FaWhatsapp /> Enquire via WhatsApp
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>

        <WhyChooseUs />
        <RFQCard />
        <GetInTouch />
      </div>
    </LazyMotion>
  );
};

export default ServiceDetailsClient;
