import React from "react";

import { Button, Img, Line, Text } from "components";
import TelehealthOneRowframeone from "components/TelehealthOneRowframeone";

const EbooksOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-jejuhallasan items-center justify-end mx-auto w-full">
        <div className="bg-blue_gray-100 flex flex-col md:gap-10 gap-[72px] items-center justify-end pt-[107px] w-full">
          <TelehealthOneRowframeone className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full" />
          <div className="h-[213px] max-w-[1279px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-indigo-900 underline"
                  size="txtJejuHallasan50"
                >
                  My Store
                </Text>
                <div className="bg-amber-A200_87 h-[91px] rounded-bl-[46px] rounded-br-[45px] rounded-tl-[46px] rounded-tr-[45px] w-full"></div>
              </div>
            </div>
            <Text
              className="absolute h-full inset-[0] justify-center m-auto text-[19px] text-center text-indigo-900 w-[99%] sm:w-full"
              size="txtJejuHallasan19"
            >
              <>
                We take mental health seriously, and that&#39;s why we&#39;ve
                created a range of insightful e-books and resources designed to
                help you navigate the challenges of depression and find your
                path to wellness. Our team of experts has poured their knowledge
                and experience into these e-books, ensuring that each one offers
                a valuable roadmap to overcoming depression.
              </>
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-cardo items-center justify-start max-w-[1299px] mt-[130px] mx-auto md:px-5 w-full">
          <div className="md:gap-10 gap-[70px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center max-w-[1299px] min-h-[auto] w-full">
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="bg-gray-50_05 flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
                <div className="bg-gray-50_06 border-4 border-gray-300_01 border-solid flex flex-col items-center justify-start pt-1 px-1 shadow-bs1 w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[396px] items-center justify-start p-[19px] w-full"
                    style={{ backgroundImage: "url('images/img_group34.svg')" }}
                  >
                    <div className="flex flex-col items-start justify-start my-0.5 w-full">
                      <Text
                        className="leading-[120.00%] ml-0.5 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-amber-A200 text-center tracking-[-0.80px] w-[97%] sm:w-full"
                        size="txtJejuHallasan40AmberA200"
                      >
                        <>
                          UNLOCK
                          <br />
                          HAPPINESS
                        </>
                      </Text>
                      <Img
                        className="h-[195px] md:h-auto md:ml-[0] ml-[18px] mt-1.5 object-cover w-[195px]"
                        src="images/img_image12.png"
                        alt="imageTwelve"
                      />
                      <Text
                        className="md:ml-[0] ml-[67px] mt-[17px] text-center text-indigo-900 text-xs tracking-[1.20px] uppercase"
                        size="txtInterBold12"
                      >
                        JOHN ABRAHAM
                      </Text>
                      <div className="font-inter md:h-6 h-[9px] mt-[15px] relative w-full">
                        <Text
                          className="m-auto text-[7px] text-center text-indigo-900 tracking-[1.75px]"
                          size="txtInterLight7"
                        >
                          ********************** **********************
                        </Text>
                        <div className="absolute bg-amber-A200 h-2 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[25px] items-start justify-start w-[401px] sm:w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start w-[401px] sm:w-full">
                  <div className="flex flex-col items-center justify-start w-[401px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 tracking-[-0.64px] w-auto"
                      size="txtCardoBold32"
                    >
                      <span className="text-indigo-900 font-cardo text-left font-bold">
                        Unlock Happiness{" "}
                      </span>
                      <span className="md:text-xl sm:text-lg text-amber-A200 font-cardo text-left text-[22px] font-bold">
                        RM23.89
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter gap-6 items-start justify-start w-[401px] sm:w-full">
                    <Text
                      className="leading-[180.00%] max-w-[401px] md:max-w-full text-[19px] text-gray-500_05 tracking-[-0.19px]"
                      size="txtInterRegular19"
                    >
                      Offers a roadmap to a happier and more fulfilling life
                    </Text>
                    <div className="flex flex-row font-cardo gap-[13px] items-center justify-start w-[31%] md:w-full">
                      <div className="bg-amber-A200 h-4 my-2 rounded-[50%] w-4"></div>
                      <Text
                        className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl tracking-[-0.24px]"
                        size="txtCardoBold24"
                      >
                        E-Books
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[208px] text-[19px] text-center tracking-[0.38px]"
                  shape="square"
                  color="amber_A200"
                  size="2xl"
                  variant="outline"
                >
                  Order Now
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-inter gap-5 items-center justify-start w-full">
              <div className="bg-gray-50_05 flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
                <div className="bg-gray-50_06 border-4 border-gray-300_01 border-solid flex flex-col items-center justify-start pt-1 px-1 shadow-bs1 w-full">
                  <div className="h-[396px] relative w-full">
                    <div className="h-[396px] m-auto w-full">
                      <Img
                        className="h-[396px] m-auto object-cover w-full"
                        src="images/img_image_396x292.png"
                        alt="image"
                      />
                      <div className="absolute bottom-[5%] flex flex-col md:gap-10 gap-[108px] inset-x-[0] justify-start mx-auto w-[87%]">
                        <Img
                          className="h-[214px] md:h-auto md:ml-[0] ml-[7px] object-cover w-[87%]"
                          src="images/img_image14.png"
                          alt="imageFourteen"
                        />
                        <div className="h-[9px] relative w-full">
                          <Text
                            className="m-auto text-[7px] text-center text-indigo-900 tracking-[1.75px]"
                            size="txtInterLight7"
                          >
                            ********************** **********************
                          </Text>
                          <div className="absolute bg-amber-A200 h-2 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[9%] flex flex-col gap-[34px] inset-x-[0] items-center justify-start mx-auto">
                      <Text
                        className="leading-[125.00%] sm:text-4xl md:text-[38px] text-[40px] text-amber-A200 text-center tracking-[4.00px] uppercase w-full"
                        size="txtJejuHallasan40AmberA200"
                      >
                        HEALING HEARTS
                      </Text>
                      <Text
                        className="text-amber-A200 text-center text-xs tracking-[1.20px] uppercase"
                        size="txtInterBold12AmberA200"
                      >
                        JOHN ABRAHAM
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-cardo gap-[25px] items-start justify-start w-[401px] sm:w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start w-[401px] sm:w-full">
                  <div className="flex flex-col items-center justify-start w-[401px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 tracking-[-0.64px] w-[398px]"
                      size="txtCardoBold32"
                    >
                      <span className="text-indigo-900 font-cardo text-left font-bold">
                        Healing Hearts{" "}
                      </span>
                      <span className="md:text-xl sm:text-lg text-amber-A200 font-cardo text-left text-[22px] font-bold">
                        RM23.89
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter gap-6 items-start justify-start w-[401px] sm:w-full">
                    <Text
                      className="leading-[180.00%] max-w-[401px] md:max-w-full text-[19px] text-gray-500_05 tracking-[-0.19px]"
                      size="txtInterRegular19"
                    >
                      Encouragement for individuals to mend their emotional
                      well-being and find hope in life
                    </Text>
                    <div className="flex flex-row font-cardo gap-[13px] items-center justify-start w-[31%] md:w-full">
                      <div className="bg-amber-A200 h-4 my-2 rounded-[50%] w-4"></div>
                      <Text
                        className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl tracking-[-0.24px]"
                        size="txtCardoBold24"
                      >
                        E-Books
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[208px] text-[19px] text-center tracking-[0.38px]"
                  shape="square"
                  color="amber_A200"
                  size="2xl"
                  variant="outline"
                >
                  Order Now
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-jejuhallasan gap-5 items-center justify-start w-full">
              <div className="h-[500px] relative w-full">
                <div className="h-[500px] m-auto w-full">
                  <div className="h-[500px] m-auto w-full">
                    <div className="bg-gray-50_05 h-[500px] m-auto w-full"></div>
                    <div className="absolute bg-gray-50_06 border-4 border-gray-300_01 border-solid h-[400px] inset-[0] justify-center m-auto shadow-bs1 w-3/4"></div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[2%] flex flex-col h-[396px] inset-x-[0] items-center justify-end mx-auto p-5 w-[73%]"
                    style={{ backgroundImage: "url('images/img_group34.svg')" }}
                  >
                    <div className="flex flex-col items-center justify-start mb-[42px] mt-[156px] w-full">
                      <Text
                        className="leading-[125.00%] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[4.00px] uppercase w-[93%] sm:w-full"
                        size="txtJejuHallasan40WhiteA700"
                      >
                        EMBRACE LIFE
                      </Text>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-center text-indigo-900 text-xs tracking-[1.20px] uppercase"
                          size="txtInterBold12"
                        >
                          JOHN ABRAHAM
                        </Text>
                        <Text
                          className="italic mt-[3px] text-center text-lime-700 text-sm tracking-[-0.28px]"
                          size="txtCardoItalic14"
                        >
                          JOHN ABRAHAM
                        </Text>
                      </div>
                      <div className="font-inter md:h-[19px] h-[9px] mt-2.5 relative w-full">
                        <Text
                          className="m-auto text-[7px] text-center text-indigo-900 tracking-[1.75px]"
                          size="txtInterLight7"
                        >
                          ********************** **********************
                        </Text>
                        <div className="absolute bg-amber-A200 h-2 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[235px] inset-x-[0] mx-auto object-cover top-[10%] w-[56%]"
                  src="images/img_image15.png"
                  alt="imageFifteen"
                />
              </div>
              <div className="flex flex-col font-cardo gap-[25px] items-start justify-start w-[401px] sm:w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start w-[401px] sm:w-full">
                  <div className="flex flex-col items-center justify-start w-[401px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 tracking-[-0.64px] w-auto"
                      size="txtCardoBold32"
                    >
                      <span className="text-indigo-900 font-cardo text-left font-bold">
                        Embrace Life{" "}
                      </span>
                      <span className="md:text-xl sm:text-lg text-amber-A200 font-cardo text-left text-[22px] font-bold">
                        RM23.89
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter gap-6 items-start justify-start w-[401px] sm:w-full">
                    <Text
                      className="leading-[180.00%] max-w-[401px] md:max-w-full text-[19px] text-gray-500_05 tracking-[-0.19px]"
                      size="txtInterRegular19"
                    >
                      Serves as a companion on the path to mental well-being and
                      a brighter future
                    </Text>
                    <div className="flex flex-row font-cardo gap-[13px] items-center justify-start w-[31%] md:w-full">
                      <div className="bg-amber-A200 h-4 my-2 rounded-[50%] w-4"></div>
                      <Text
                        className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl tracking-[-0.24px]"
                        size="txtCardoBold24"
                      >
                        E-Books
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[208px] text-[19px] text-center tracking-[0.38px]"
                  shape="square"
                  color="amber_A200"
                  size="2xl"
                  variant="outline"
                >
                  Order Now
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="bg-gray-50_05 md:h-[398px] h-[500px] p-12 md:px-10 sm:px-5 relative w-full">
                <div className="absolute bg-gray-50_06 border-4 border-gray-300_01 border-solid flex flex-col h-max inset-[0] items-center justify-center m-auto pt-1 px-1 shadow-bs1 w-3/4">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[396px] items-center justify-start p-3 w-full"
                    style={{ backgroundImage: "url('images/img_group34.svg')" }}
                  >
                    <div className="flex flex-col gap-[49px] items-center justify-start mb-[9px] w-[96%] md:w-full">
                      <Img
                        className="h-[108px]"
                        src="images/img_name.svg"
                        alt="name"
                      />
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="italic leading-[130.00%] text-center text-indigo-900 text-xs tracking-[-0.24px] w-full"
                          size="txtCardoItalic12"
                        >
                          A long established fact that a reader normal as well
                          distribution of letters
                        </Text>
                        <Img
                          className="h-[86px] mt-[15px]"
                          src="images/img_name.svg"
                          alt="trees"
                        />
                        <Text
                          className="mt-4 text-center text-indigo-900 text-xs tracking-[1.20px] uppercase"
                          size="txtInterBold12"
                        >
                          JOHN ABRAHAM
                        </Text>
                        <Text
                          className="italic mt-0.5 text-center text-lime-700 text-sm tracking-[-0.28px]"
                          size="txtCardoItalic14"
                        >
                          A supreme packages and web page editors.
                        </Text>
                        <div className="font-inter md:h-[19px] h-[9px] mt-2.5 relative w-[99%]">
                          <Text
                            className="m-auto text-[7px] text-center text-indigo-900 tracking-[1.75px]"
                            size="txtInterLight7"
                          >
                            ********************** **********************
                          </Text>
                          <div className="absolute bg-amber-A200 h-2 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white-A700 border-[12px] border-gray-300_02 border-solid flex flex-col h-max inset-[0] items-center justify-center m-auto p-2.5 shadow-bs2 w-3/4">
                  <div className="bg-gray-50_07 flex flex-col items-center justify-start p-0.5 w-full">
                    <div className="font-inter md:h-52 sm:h-[236px] h-[292px] mt-3 relative w-[97%]">
                      <div className="absolute h-56 md:h-[196px] left-[0] top-[0] w-[93%]">
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[36%] w-[99%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="leading-[180.00%] text-[10px] text-center text-gray-500_05 tracking-[-0.10px] w-full"
                              size="txtInterRegular10"
                            >
                              Instills hope by providing a guide to overcoming
                              depression
                            </Text>
                            <div className="flex flex-row items-start justify-center w-[24%] md:w-full">
                              <Line className="bg-indigo-900 h-px my-1 w-[32%]" />
                              <Text
                                className="ml-[7px] text-[8px] text-center text-indigo-900 tracking-[1.20px] uppercase"
                                size="txtInterExtraBold8"
                              >
                                *
                              </Text>
                              <Line className="bg-indigo-900 h-px ml-[7px] my-1 w-[32%]" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col md:gap-10 gap-[68px] h-full inset-[0] justify-center m-auto w-[98%]">
                          <div className="flex font-lexend h-20 justify-end ml-2 md:ml-[0] relative w-[97%]">
                            <div className="flex flex-col gap-[26px] h-full items-center justify-start mb-[7px] mt-auto mx-auto w-[87%]">
                              <div className="bg-amber-A200 h-[13px] w-full"></div>
                              <div className="bg-amber-A200 h-[13px] w-[63%]"></div>
                            </div>
                            <Text
                              className="absolute h-full inset-[0] justify-center leading-[110.00%] m-auto sm:text-[31px] md:text-[33px] text-[35px] text-center text-indigo-900 tracking-[1.75px] w-full"
                              size="txtLexendExtraBold35"
                            >
                              HOPE RESTORED
                            </Text>
                          </div>
                          <Text
                            className="leading-[200.00%] text-[10px] text-center text-indigo-900 tracking-[1.50px] uppercase w-[47%] sm:w-full"
                            size="txtInterExtraBold10"
                          >
                            Your guide to beat depression
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[180px] object-cover right-[0] w-[63%]"
                        src="images/img_image16.png"
                        alt="imageSixteen"
                      />
                    </div>
                    <Text
                      className="mt-6 text-[15px] text-center text-indigo-900"
                      size="txtCardoBold15"
                    >
                      -John Abraham-
                    </Text>
                    <Text
                      className="italic mb-2.5 text-[10px] text-center text-indigo-900 tracking-[-0.10px]"
                      size="txtCardoItalic10"
                    >
                      The majority have suffered alteration in some form.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[25px] items-start justify-start w-[402px] sm:w-full">
                <div className="flex flex-col font-inter gap-[9px] items-start justify-start w-[402px] sm:w-full">
                  <div className="flex flex-row gap-[99px] items-center justify-start w-[402px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 tracking-[-0.64px] w-auto"
                      size="txtCardoBold32"
                    >
                      Hope Restored
                    </Text>
                    <Text
                      className="text-[22px] text-amber-A200 sm:text-lg text-right md:text-xl tracking-[-0.22px] w-auto"
                      size="txtInterBold22"
                    >
                      RM23.89
                    </Text>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-[401px] sm:w-full">
                    <Text
                      className="leading-[180.00%] max-w-[401px] md:max-w-full text-[19px] text-gray-500_05 tracking-[-0.19px]"
                      size="txtInterRegular19"
                    >
                      Instills hope by providing a guide to overcoming
                      depression
                    </Text>
                    <div className="flex flex-row font-cardo gap-[13px] items-center justify-start w-[31%] md:w-full">
                      <div className="bg-amber-A200 h-4 my-2 rounded-[50%] w-4"></div>
                      <Text
                        className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl tracking-[-0.24px]"
                        size="txtCardoBold24"
                      >
                        E-Books
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold font-cardo min-w-[208px] text-[19px] text-center tracking-[0.38px]"
                  shape="square"
                  color="amber_A200"
                  size="2xl"
                  variant="outline"
                >
                  Order Now
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-jejuhallasan gap-5 items-center justify-start w-full">
              <div className="bg-gray-50_05 flex flex-col items-center justify-end p-12 md:px-10 sm:px-5 w-full">
                <div className="bg-white-A700 border-[12px] border-gray-300_02 border-solid flex flex-col items-center justify-start mt-1 p-[9px] shadow-bs2 w-[99%] md:w-full">
                  <div className="bg-gray-50_06 flex flex-col items-center justify-start shadow-bs1 w-full">
                    <div className="bg-gray-50_07 md:h-[206px] h-[380px] pb-[11px] relative w-full">
                      <div className="flex flex-col m-auto w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[163px] items-center justify-start mx-auto p-6 sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group43.svg')",
                          }}
                        >
                          <Text
                            className="leading-[125.00%] mb-2.5 mt-[5px] sm:text-4xl md:text-[38px] text-[40px] text-center text-indigo-900 tracking-[4.00px] w-full"
                            size="txtJejuHallasan40Indigo900"
                          >
                            MIND MATTERS
                          </Text>
                        </div>
                        <div className="font-cardo md:h-[206px] h-[276px] ml-auto mt-[-70px] w-[72%] z-[1]">
                          <Img
                            className="h-[276px] m-auto object-cover w-full"
                            src="images/img_image17.png"
                            alt="imageSeventeen"
                          />
                          <Text
                            className="absolute bottom-[6%] left-[1%] text-[15px] text-center text-indigo-900"
                            size="txtCardoBold15"
                          >
                            -John Abraham-
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[3%] flex flex-col md:gap-10 gap-[74px] justify-start left-[6%]">
                        <Text
                          className="leading-[200.00%] text-[10px] text-center text-indigo-900 tracking-[1.50px] uppercase w-1/2 sm:w-full"
                          size="txtInterExtraBold10"
                        >
                          A Blueprint for Managing Depression
                        </Text>
                        <Text
                          className="italic md:ml-[0] ml-[27px] text-[10px] text-center text-indigo-900 tracking-[-0.10px]"
                          size="txtCardoItalic10"
                        >
                          The majority have suffered alteration in some form.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[25px] items-start justify-start w-[401px] sm:w-full">
                <div className="flex flex-col font-inter gap-[9px] items-start justify-start w-[401px] sm:w-full">
                  <div className="flex flex-row gap-[99px] items-center justify-start w-[401px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 tracking-[-0.64px] w-auto"
                      size="txtCardoBold32"
                    >
                      Mind Matters
                    </Text>
                    <Text
                      className="text-[22px] text-amber-A200 sm:text-lg text-right md:text-xl tracking-[-0.22px] w-auto"
                      size="txtInterBold22"
                    >
                      RM23.89
                    </Text>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-[401px] sm:w-full">
                    <Text
                      className="leading-[180.00%] max-w-[401px] md:max-w-full text-[19px] text-gray-500_05 tracking-[-0.19px]"
                      size="txtInterRegular19"
                    >
                      Serves as a comprehensive blueprint for managing
                      depression effectively
                    </Text>
                    <div className="flex flex-row font-cardo gap-[13px] items-center justify-start w-[31%] md:w-full">
                      <div className="bg-amber-A200 h-4 my-2 rounded-[50%] w-4"></div>
                      <Text
                        className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl tracking-[-0.24px]"
                        size="txtCardoBold24"
                      >
                        E-Books
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold font-cardo min-w-[208px] text-[19px] text-center tracking-[0.38px]"
                  shape="square"
                  color="amber_A200"
                  size="2xl"
                  variant="outline"
                >
                  Order Now
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-cardo gap-5 items-center justify-start w-full">
              <div className="h-[500px] relative w-full">
                <div className="bg-gray-50_05 h-[500px] m-auto w-full"></div>
                <div className="absolute bg-gray-50_06 border-4 border-gray-300_01 border-solid flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs1 w-3/4">
                  <div className="bg-white-A700 border-[12px] border-gray-300_02 border-solid flex flex-col items-center justify-start p-2.5 shadow-bs2 w-full">
                    <div className="bg-gray-50_07 flex flex-col gap-4 items-end justify-end p-3 w-full">
                      <div className="bg-indigo-900 h-6 mr-[18px] mt-5 w-[86%]"></div>
                      <div className="bg-indigo-900 h-[17px] mr-[38px] w-[71%]"></div>
                      <div className="flex md:h-[212px] h-[263px] justify-end mr-[18px] relative w-[93%]">
                        <Text
                          className="absolute bottom-[0] italic right-[5%] text-[10px] text-center text-indigo-900 tracking-[-0.10px]"
                          size="txtCardoItalic10"
                        >
                          The majority have suffered alteration in some form.
                        </Text>
                        <Text
                          className="mb-3.5 ml-auto mr-[51px] mt-auto text-[15px] text-center text-indigo-900"
                          size="txtCardoBold15"
                        >
                          -John Abraham-
                        </Text>
                        <div className="absolute font-inter h-64 md:h-[212px] inset-[0] justify-center m-auto pl-[18px] py-[18px] w-full">
                          <Img
                            className="h-[212px] ml-auto my-auto object-cover"
                            src="images/img_lamp.png"
                            alt="lamp"
                          />
                          <Text
                            className="absolute bottom-[15%] leading-[200.00%] right-[0] text-[10px] text-center text-indigo-900 tracking-[1.50px] uppercase w-[41%] sm:w-full"
                            size="txtInterExtraBold10"
                          >
                            Strategies for a Brighter Mind
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[25px] items-start justify-start w-[401px] sm:w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start w-[401px] sm:w-full">
                  <div className="flex flex-col items-center justify-start w-[401px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 tracking-[-0.64px] w-auto"
                      size="txtCardoBold32"
                    >
                      <span className="text-indigo-900 font-cardo text-left font-bold">
                        Depression Toolkit{" "}
                      </span>
                      <span className="md:text-xl sm:text-lg text-amber-A200 font-cardo text-left text-[22px] font-bold">
                        RM23.89
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter gap-6 items-start justify-start w-[401px] sm:w-full">
                    <Text
                      className="leading-[180.00%] max-w-[401px] md:max-w-full text-[19px] text-gray-500_05 tracking-[-0.19px]"
                      size="txtInterRegular19"
                    >
                      Actionable tips to manage depression and cultivate a
                      brighter, more positive mindset
                    </Text>
                    <div className="flex flex-row font-cardo gap-[13px] items-center justify-start w-[31%] md:w-full">
                      <div className="bg-amber-A200 h-4 my-2 rounded-[50%] w-4"></div>
                      <Text
                        className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl tracking-[-0.24px]"
                        size="txtCardoBold24"
                      >
                        E-Books
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[208px] text-[19px] text-center tracking-[0.38px]"
                  shape="square"
                  color="amber_A200"
                  size="2xl"
                  variant="outline"
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[241px] p-[19px] w-full">
          <div className="bg-white-A700 flex md:flex-1 flex-row font-inter sm:gap-10 items-center justify-between mb-[94px] md:ml-[0] ml-[15px] md:mt-0 mt-[17px] p-[9px] md:px-5 w-[38%] md:w-full">
            <Text
              className="ml-[15px] text-[17px] text-gray-500_05 tracking-[-0.17px]"
              size="txtInterRegular17"
            >
              Search...
            </Text>
            <Img
              className="h-[43px] md:h-auto my-0.5 object-cover w-[42px]"
              src="images/img_image19.png"
              alt="imageNineteen"
            />
          </div>
          <Button
            className="cursor-pointer font-jejuhallasan mb-[99px] min-w-[157px] md:ml-[0] ml-[314px] md:mt-0 mt-4 rounded-[30px] sm:text-[31px] md:text-[33px] text-[35px] text-center tracking-[-0.35px]"
            color="indigo_900"
            size="md"
            variant="fill"
          >
            CART
          </Button>
          <div className="font-inter md:h-[46px] h-[69px] md:px-5 relative w-[6%] md:w-full">
            <Img
              className="absolute bottom-[0] h-[46px] left-[0]"
              src="images/img_cart.svg"
              alt="cart_One"
            />
            <Text
              className="absolute bg-amber-A200 h-[46px] justify-center pl-[11px] sm:pr-5 pr-6 py-4 right-[0] rounded-[23px] text-[10px] text-indigo-900 top-[0] tracking-[-0.10px] w-[47px]"
              size="txtInterExtraBold10"
            >
              01
            </Text>
          </div>
          <Text
            className="bg-indigo-900 h-[61px] justify-center mb-[98px] ml-7 md:ml-[0] md:mt-0 mt-[17px] pr-1.5 py-3.5 rounded-[30px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[-0.30px] w-[170px]"
            size="txtJejuHallasan30"
          >
            CHECK OUT
          </Text>
          <Img
            className="sm:flex-1 h-[74px] md:h-auto mb-[95px] ml-1.5 md:ml-[0] md:mt-0 mt-[7px] object-cover w-[75px] sm:w-full"
            src="images/img_image18.png"
            alt="imageEighteen"
          />
        </div>
      </div>
    </>
  );
};

export default EbooksOnePage;
