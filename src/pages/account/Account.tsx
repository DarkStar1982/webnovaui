import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading } from "../../components/webnova";
import AccountSettingsInputdark from "../../components/webnova/AccountSettingsInputdark";
import Footer from "../../components/webnova/Footer";
import Header from "../../components/webnova/Header";

export default function Account() {
    return (
        <>
            <Helmet>
                <title>WebNOVA II - Space App Hackathon1</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-black-900">
                <Header className="flex items-center justify-center border-b border-solid border-blue_gray-900 bg-gray-900 p-2" />
                <div className="flex flex-col items-start">
                    <div className="flex h-[308px] items-start self-stretch bg-black-900 bg-[url(/public/images/img_image.png)] bg-cover bg-no-repeat py-[58px] pl-[58px] pr-14 md:h-auto md:p-5">
                        <div className="mb-[105px] ml-[21px] flex md:ml-0">
                            <div className="flex flex-col items-start">
                                <Heading size="xl" as="h1" className="!text-[48.89px] !text-white-A700">
                                    Account settings
                                </Heading>
                                <Heading size="lg" as="h2">
                                    Exodus Orbitals Hackaton
                                </Heading>
                            </div>
                        </div>
                    </div>
                    <div className="relative ml-10 mt-[-99px] flex w-[48%] flex-col gap-8 rounded-md border-t border-solid border-blue_gray-900 bg-gray-900 p-[39px] md:ml-0 md:w-full sm:p-5">
                        <div className="flex flex-col gap-[7px]">
                            <AccountSettingsInputdark className="flex flex-col items-start gap-1" />
                            <AccountSettingsInputdark caption="Email" className="flex flex-col items-start gap-1" />
                            <AccountSettingsInputdark caption="Password" className="flex flex-col items-start gap-1" />
                        </div>
                        <div className="flex gap-4">
                            <Button color="white_A700" size="md" variant="outline" shape="round" className="w-full font-bold sm:px-5">
                                Cancel
                            </Button>
                            <Button size="md" shape="round" className="w-full font-bold sm:px-5">
                                Save changes
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer className="mt-[104px] flex items-center justify-center p-5" />
            </div>
        </>
    );
}