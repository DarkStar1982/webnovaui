import React from "react";
import { Text, Button, Heading, Img } from "..";

interface Props {
  className?: string;
  adsbMonitoring?: string;
  adsbmonitoring1?: string;
  dataType?: string;
  rgb?: string;
  location?: string;
  sanfranciscobay?: string;
  startChallenge?: string;
  loremipsumdolor?: string;
}

export default function ChallengeListItem({
  adsbMonitoring = "images/img_airplane_yellow_800.svg",
  adsbmonitoring1 = "ADS-B Monitoring",
  dataType = "Data type:",
  rgb = "RGB",
  location = "Location:",
  sanfranciscobay = "San Francisco Bay Area",
  startChallenge = "Start challenge",
  loremipsumdolor = "Lorem ipsum dolor this is mission description that got a bit too long.",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="mx-auto flex w-full max-w-[1311px] flex-col self-stretch">
        <div className="flex items-center justify-between gap-5 pb-2 md:flex-col">
          <div className="flex items-center gap-[15px]">
            <Img src={adsbMonitoring} alt="adsb_monitoring" className="h-[40px] w-[40px]" />
            <Heading size="xl" as="h1" className="self-end !font-mulish">
              {adsbmonitoring1}
            </Heading>
          </div>
          <div className="flex w-[42%] items-center justify-between gap-5 md:w-full sm:flex-col">
            <div className="flex gap-6">
              <div className="flex flex-wrap items-center gap-1">
                <Text size="s" as="p" className="self-end">
                  {dataType}
                </Text>
                <Text size="s" as="p" className="self-start !text-yellow-800">
                  {rgb}
                </Text>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <Text size="s" as="p" className="self-start">
                  {location}
                </Text>
                <Text size="s" as="p" className="self-end !text-yellow-800">
                  {sanfranciscobay}
                </Text>
              </div>
            </div>
            <Button shape="round" className="min-w-[170px] font-mulish font-black sm:px-5">
              {startChallenge}
            </Button>
          </div>
        </div>
        <div className="flex self-start">
          <Text size="md" as="p">
            {loremipsumdolor}
          </Text>
        </div>
      </div>
    </div>
  );
}
