import React from "react";
import { Input, Heading } from "./..";

interface Props {
  className?: string;
  caption?: string;
}

export default function AccountSettingsInputdark({ caption = "Name", ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex px-4">
        <Heading size="s" as="h1" className="!text-[10.24px] uppercase tracking-[0.20px] !text-blue_gray-600">
          {caption}
        </Heading>
      </div>
      <Input shape="round" name="input_one" placeholder={`Przem Rud`} className="sm:pr-5" />
    </div>
  );
}
