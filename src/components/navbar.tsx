'use client'
import React, { useEffect, useRef } from "react";
//import runAnimations, { allLinks, allFunctions } from "../../scripts";
import texts from "../../public/texts";
//import images from "../../public/images";

const LandingPageComponent = ({
  companyBrandName = texts.companyBrandName,
  homeNavigationLink = texts.homeNavigationLink,
  productNavigationLink = texts.productNavigationLink,
  pricingNavigationLink = texts.pricingNavigationLink,
  contactNavigationLink = texts.contactNavigationLink,
  loginButtonText = texts.loginButtonText,
  joinUsButtonText = texts.joinUsButtonText,
  welcomeSubtitle = texts.welcomeSubtitle,
  mainHeadline = texts.mainHeadline,
  subHeadlineDescription = texts.subHeadlineDescription,
  getQuoteNowButtonText = texts.getQuoteNowButtonText,
  learnMoreButtonText = texts.learnMoreButtonText,
  trainingCoursesTitle = texts.trainingCoursesTitle,
  trainingCoursesDescription = texts.trainingCoursesDescription,
  onlineCoursesTitle = texts.onlineCoursesTitle,
  onlineCoursesDescription = texts.onlineCoursesDescription,
  trainingCoursesTitle1 = texts.trainingCoursesTitle1,
  trainingCoursesDescription1 = texts.trainingCoursesDescription1,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="w-[1440px] min-h-[1132px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden bg-[#252b42ff]">
        {/* container1 */}
        <section className="w-[1322px] h-[91px] top-[0px] left-[59px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
          <div className="w-[1322px] h-[91px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
            <div className="w-[187px] h-[58px] top-[17px] left-[136px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
              <div className="w-[152px] h-[32px] top-[13px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="text-[24px] font-[Montserrat] font-[700] no-underline none tracking-[0.10000000149011612px] leading-[32px] whitespace-pre-wrap text-[#ffffffff]">
                  {companyBrandName}
                </span>
              </div>
            </div>

            <div className="w-[24px] h-[13.71px] top-[39px] left-[1298px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden absolute">
              <div className="w-[24px] h-[13.71px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute"></div>
            </div>

            <div className="w-[815px] h-[58px] top-[16px] left-[364px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden absolute">
              <div className="max-w-[275px] w-full box-border min-h-[24px] top-[17px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-start items-center gap-[21px] p-[0px_0px_0px__0px] absolute">
                <div className="w-[43px] h-[24px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
                  <div className="w-[43px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
                    <div className="w-[43px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] absolute">
                      <span className="text-[14px] font-[Montserrat] font-[700] no-underline none tracking-[0.20000000298023224px] leading-[24px] whitespace-pre-wrap text-[#ffffffff]">
                        {homeNavigationLink}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-[59px] h-[24px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden">
                  <div className="w-[59px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
                    <div className="w-[59px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] absolute">
                      <span className="text-[14px] font-[Montserrat] font-[700] no-underline none tracking-[0.20000000298023224px] leading-[24px] whitespace-pre-wrap text-[#ffffffff]">
                        {productNavigationLink}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-[52px] h-[24px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden">
                  <div className="w-[52px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
                    <div className="w-[52px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] absolute">
                      <span className="text-[14px] font-[Montserrat] font-[700] no-underline none tracking-[0.20000000298023224px] leading-[24px] whitespace-pre-wrap text-[#ffffffff]">
                        {pricingNavigationLink}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-[58px] h-[24px] opacity-[1] z-[3]  rotate-[0deg]   overflow-hidden">
                  <div className="w-[58px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
                    <div className="w-[58px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] absolute">
                      <span className="text-[14px] font-[Montserrat] font-[700] no-underline none tracking-[0.20000000298023224px] leading-[24px] whitespace-pre-wrap text-[#ffffffff]">
                        {contactNavigationLink}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[189px] min-h-[52px] top-[3px] left-[626px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[45px] p-[0px_0px_0px__0px] absolute">
                <div className="w-[41px] h-[22px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
                  <div className="w-[41px] h-[22px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
                    <div className="w-[41px] h-[22px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   text-right leading-[0px] absolute">
                      <span className="text-[14px] font-[Montserrat] font-[700] no-underline none tracking-[0.20000000298023224px] leading-[22px] whitespace-pre-wrap text-[#ffffffff]">
                        {loginButtonText}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-[214px] h-[52px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden">
                  <div className="max-w-[110px] w-full box-border min-h-[52px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-start items-center gap-[15px] p-[15px_25px_15px__25px] rounded-tl-[5px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[5px] bg-[#23a6f0ff] absolute">
                    <div className="max-w-[60px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                      <span className="text-[14px] font-[Montserrat] font-[700] no-underline none tracking-[0.20000000298023224px] leading-[22px] whitespace-nowrap text-[#ffffffff]">
                        {joinUsButtonText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* container2 */}
        <section className="w-[1046px] min-h-[1028px] top-[104px] left-[197px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-center gap-[80px] p-[80px_0px_80px__0px] absolute">
          <div className="w-[701px] min-h-[496px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-center p-[0px_0px_0px__0px]">
            <div className="w-[699px] min-h-[496px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-center gap-[40px] p-[40px_0px_40px__0px]">
              <div className="max-w-[77px] w-full box-border min-h-[24px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[16px] font-[Montserrat] font-[700] no-underline none tracking-[0.10000000149011612px] leading-[24px] whitespace-nowrap text-[#23a6f0ff]">
                  {welcomeSubtitle}
                </span>
              </div>

              <div className="w-[542px] h-[160px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
                <span className="text-[58px] font-[Montserrat] font-[700] no-underline none tracking-[0.20000000298023224px] leading-[80px] whitespace-pre-wrap text-[#ffffffff]">
                  {mainHeadline}
                </span>
              </div>

              <div className="max-w-[536px] w-full box-border min-h-[60px] opacity-[1] z-[2]  rotate-[0deg]   text-center leading-[0px]">
                <span className="text-[20px] font-[Montserrat] font-[400] no-underline none tracking-[0.20000000298023224px] leading-[30px] whitespace-pre-wrap text-[#ffffffff]">
                  {subHeadlineDescription}
                </span>
              </div>

              <div className="max-w-[365px] w-full box-border min-h-[52px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-nowrap justify-start items-start gap-[10px] p-[0px_0px_0px__0px]">
                <div className="max-w-[193px] w-full box-border min-h-[52px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-center gap-[10px] p-[15px_0px_15px__0px] rounded-tl-[5px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[5px] bg-[#23a6f0ff]">
                  <div className="max-w-[113px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]">
                    <span className="text-[14px] font-[Montserrat] font-[700] no-underline none tracking-[0.20000000298023224px] leading-[22px] whitespace-nowrap text-[#ffffffff]">
                      {getQuoteNowButtonText}
                    </span>
                  </div>
                </div>

                <div className="max-w-[162px] w-full min-h-[52px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-center gap-[10px] p-[15px_0px_15px__0px] rounded-tl-[5px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[5px] box-border border-l-[1px] border-l-[#23a6f0ff] border-r-[1px] border-r-[#23a6f0ff] border-t-[1px] border-t-[#23a6f0ff] border-b-[1px] border-b-[#23a6f0ff]">
                  <div className="max-w-[82px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]">
                    <span className="text-[14px] font-[Montserrat] font-[700] no-underline none tracking-[0.20000000298023224px] leading-[22px] whitespace-nowrap text-[#23a6f0ff]">
                      {learnMoreButtonText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1046px] w-full box-border min-h-[292px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[30px] p-[0px_0px_0px__0px]">
            <div className="w-[328px] min-h-[292px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px]">
              <div className="w-[328px] min-h-[292px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start gap-[20px] p-[35px_40px_35px__40px] bg-[#ffffffff] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07000000029802322)]">
                <div className="max-w-[70px] w-full box-border min-h-[76px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-center items-center gap-[10px] p-[22px_0px_22px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#ffdcd1ff]"></div>

                <div className="max-w-[135px] w-full box-border min-h-[24px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[16px] font-[Montserrat] font-[700] no-underline none tracking-[0.10000000149011612px] leading-[24px] whitespace-nowrap text-[#252b42ff]">
                    {trainingCoursesTitle}
                  </span>
                </div>

                <div className="w-[50px] h-[2px] opacity-[1] z-[2]  rotate-[0deg]   bg-[#e74040ff]"></div>

                <div className="max-w-[222px] w-full box-border min-h-[60px] opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[14px] font-[Montserrat] font-[400] no-underline none tracking-[0.20000000298023224px] leading-[20px] whitespace-pre-wrap text-[#737373ff]">
                    {trainingCoursesDescription}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[329px] min-h-[292px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px]">
              <div className="w-[328px] min-h-[292px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start gap-[20px] p-[35px_40px_35px__40px] bg-[#ffffffff] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07000000029802322)]">
                <div className="max-w-[70px] w-full box-border min-h-[76px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-center items-center gap-[10px] p-[22px_0px_22px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#b9eaa8ff]"></div>

                <div className="max-w-[168px] w-full box-border min-h-[24px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[16px] font-[Montserrat] font-[700] no-underline none tracking-[0.10000000149011612px] leading-[24px] whitespace-nowrap text-[#252b42ff]">
                    {onlineCoursesTitle}
                  </span>
                </div>

                <div className="w-[50px] h-[2px] opacity-[1] z-[2]  rotate-[0deg]   bg-[#e74040ff]"></div>

                <div className="max-w-[222px] w-full box-border min-h-[60px] opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[14px] font-[Montserrat] font-[400] no-underline none tracking-[0.20000000298023224px] leading-[20px] whitespace-pre-wrap text-[#737373ff]">
                    {onlineCoursesDescription}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[329px] min-h-[292px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px]">
              <div className="w-[328px] min-h-[292px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start gap-[20px] p-[35px_40px_35px__40px] bg-[#23a6f0ff] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07000000029802322)]">
                <div className="max-w-[70px] w-full box-border min-h-[76px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-center items-center gap-[10px] p-[22px_0px_22px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#ffffffff]"></div>

                <div className="max-w-[135px] w-full box-border min-h-[24px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[16px] font-[Montserrat] font-[700] no-underline none tracking-[0.10000000149011612px] leading-[24px] whitespace-nowrap text-[#ffffffff]">
                    {trainingCoursesTitle1}
                  </span>
                </div>

                <div className="w-[50px] h-[2px] opacity-[1] z-[2]  rotate-[0deg]   bg-[#ffffffff]"></div>

                <div className="max-w-[222px] w-full box-border min-h-[60px] opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[14px] font-[Montserrat] font-[400] no-underline none tracking-[0.20000000298023224px] leading-[20px] whitespace-pre-wrap text-[#ffffffff]">
                    {trainingCoursesDescription1}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default LandingPageComponent;
