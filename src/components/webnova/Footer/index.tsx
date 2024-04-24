import React from "react";
import { Img, Text } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-5 md:flex-col">
        <div className="flex flex-wrap items-center gap-4">
          <Text as="p" className="self-start">
            © 2024 ― Exodus Orbitals
          </Text>
          <a href="#">
            <Text as="p" className="!text-blue_gray-50 underline">
              Terms of service
            </Text>
          </a>
        </div>
        <div className="flex w-[23%] items-center justify-center gap-4 md:w-full">
          <Text as="p" className="mb-[5px] self-end text-right !font-mulish">
            Sponsors
          </Text>
          <div className="flex flex-1 items-center gap-4">
            <Img src="images/img_logo.png" alt="logo_one" className="h-[24px] w-[30%] object-cover" />
            <Img src="images/img_image_65.png" alt="imagesixtyfive" className="h-[32px] w-[70%] object-cover" />
          </div>
        </div>
      </div>
    </footer>
  );
}
