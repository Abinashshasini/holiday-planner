import React from "react";

const Heading = ({
  textOne,
  textTwo,
  as: Tag = "h2",
}: {
  textOne: string;
  textTwo?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}) => {
  return (
    <Tag className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-6">
      {textOne}{" "}
      {textTwo && (
        <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
          {textTwo}
        </span>
      )}
    </Tag>
  );
};

export default Heading;
