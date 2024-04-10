import React from "react";
import { SelectBox, Img, Button, Heading } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props}>
      <div className="mx-auto flex w-full max-w-[1360px] justify-center">
        <div className="flex w-full items-center justify-center gap-10 py-2 md:flex-col">
          <Img src="images/img_vector.svg" alt="vector_one" className="h-[30px] w-[10%] md:w-full" />
          <div className="flex-1 px-[352px] md:self-stretch md:px-5">
            <div className="flex justify-between gap-5">
              <Button
                color="blue_gray_900"
                shape="round"
                leftIcon={<Img src="images/img_ticket.svg" alt="ticket" className="h-[13px] w-[13px]" />}
                className="w-full gap-2 font-semibold sm:pr-5"
              >
                Challenges
              </Button>
              <div className="flex items-center gap-2 py-1.5 pl-1.5">
                <Img src="images/img_airplane.svg" alt="airplane_one" className="h-[13px] w-[13px]" />
                <div className="flex flex-wrap items-center gap-2 self-end">
                  <Heading as="p" className="text-center !text-[12.8px]">
                    Deployments
                  </Heading>
                  <Heading
                    size="xs"
                    as="p"
                    className="flex h-[15px] w-[16px] items-center justify-center self-start rounded-[7px] bg-green-700 px-[5px] py-px !text-[8.19px] uppercase tracking-[1.00px] !text-white-A700"
                  >
                    3
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[13%] items-center justify-center gap-[7px] md:w-full">
            <Button color="black_900" className="min-w-[30px] rounded-[15px] font-semibold">
              PR
            </Button>
            <SelectBox
              shape="square"
              indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[16px] w-[15px]" />}
              name="przemyslaw"
              placeholder={`Przemyslaw Rudnik`}
              options={dropDownOptions}
              className="mb-[5px] flex-grow gap-px self-end font-semibold text-blue_gray-300 sm:pr-5"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
