import React from "react";
import bgBanner from "../images/bg-header.jpg";
import SectionLayout from "../components/SectionLayout";
import PageBanner from "../components/PageBanner";
import bg from "../images/contact/ngt.jpg";
import { CircleIcon } from "../assets/icons";
import img6 from "../images/about-us/bg(6).jpg";
import img7 from "../images/about-us/bg(7).jpg";
import img8 from "../images/about-us/bg(8).jpg";
import img11 from "../images/about-us/bg(11).jpg";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <>
      <PageBanner
        isShowLink={true}
        pageName="Về chúng tôi"
        bg={bgBanner}
        title="Thông tin về chúng tôi !"
      />
      <div className="relative w-full">
        <SectionLayout className="mt-[-100px] xl:!px-[200px] 2xl:!px-[300px] md:px-20 !gap-0 2xl:!gap-0 justify-center items-center bg-white xl:rounded-[120px]">
          <div className="relative flex flex-col gap-[60px] xl:gap-20 w-full z-20">
            <div className="flex flex-col xl:flex-row xl:gap-[60px] items-center gap-7">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src={img6}
                alt=""
                className="xl:w-[420px] w-full h-full xl:h-[320px] object-contain rounded-2xl border border-dashed border-text p-1"
              />
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="big w-full xl:heading-6 text-secondary"
              >
                <span className="font-varela font-outline-yellow">
                  Bình An BT
                </span>{" "}
                là một công ty start-up đa dịch vụ, chuyên cung cấp ba dịch vụ
                chính là thuê tài xế lái xe và nền tảng tìm kiếm việc làm và
                giới thiệu các điểm du lịch. Với đội ngũ nhân viên giàu kinh
                nghiệm và sự đam mê với ngành du lịch, chúng tôi cam kết mang
                lại những giải pháp tiện ích và hiệu quả cho cả khách hàng và
                đối tác.
              </motion.p>
            </div>
            <div className="flex flex-col xl:flex-row xl:gap-20 items-center gap-10">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src={img7}
                alt=""
                className="xl:min-w-[420px] w-full h-full xl:h-[320px] object-cover rounded-2xl border border-dashed border-text p-1"
              />
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="big xl:heading-6 order-last xl:text-right xl:order-first text-secondary"
              >
                Dịch vụ thuê tài xế lái xe của chúng tôi được thiết kế để đáp
                ứng mọi nhu cầu di chuyển của khách hàng. Không chỉ là việc cung
                cấp một tài xế chuyên nghiệp và tin cậy, chúng tôi còn đảm bảo
                rằng luôn đáp ứng các tiêu chuẩn an toàn và thoải mái nhất.
                Khách hàng có thể dễ dàng đặt lịch trực tuyến và tận hưởng dịch
                vụ tiện lợi mà chúng tôi mang lại.
              </motion.p>
            </div>
            <div className="flex flex-col xl:flex-row xl:gap-20 items-center gap-10">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src={img8}
                alt=""
                className="xl:min-w-[420px] w-full h-full xl:h-[320px] object-cover rounded-2xl border border-dashed border-text p-1"
              />
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="big xl:heading-6 text-secondary"
              >
                Chúng tôi cũng là một nguồn thông tin đáng tin cậy về các điểm
                du lịch hàng đầu tại Bình Thuận. Chúng tôi cung cấp thông tin
                chi tiết về các địa điểm du lịch nổi tiếng, những điểm đến mới
                lạ và các hoạt động thú vị mà du khách có thể tham gia khi đến
                các điểm đó.
              </motion.p>
            </div>
            <div className="flex flex-col xl:flex-row xl:gap-20 items-center gap-10">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src={img11}
                alt=""
                className="xl:min-w-[420px] w-full h-full xl:h-[320px] object-cover rounded-2xl border border-dashed border-text p-1"
              />
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="big xl:heading-6 order-last xl:text-right xl:order-first text-secondary"
              >
                Ngoài ra, nền tảng tìm kiếm việc làm của chúng tôi cung cấp cơ
                hội cho những người muốn tìm kiếm việc làm. <br /> Với sứ mệnh
                tạo ra những trải nghiệm du lịch đáng nhớ và cung cấp các giải
                pháp tiện ích cho cộng đồng du lịch, chúng tôi hy vọng có thể
                đóng góp vào sự phát triển bền vững của ngành du lịch tại Bình
                Thuận và Việt Nam.
              </motion.p>
            </div>
          </div>
        </SectionLayout>
        <img
          src={bg}
          alt=""
          className="absolute xl:rounded-[120px] left-0 w-full max-h-[200px] top-[20%]"
        />
        <img
          src={bg}
          alt=""
          className="absolute xl:rounded-[120px] left-0 w-full max-h-[200px] top-[60%]"
        />
        <CircleIcon className="hidden xl:block absolute top-[5%] right-[10%]" />
        <CircleIcon className="hidden xl:block absolute top-[70%] left-[10%]" />
        <CircleIcon className="hidden xl:block absolute top-[90%] right-[10%]" />
      </div>
    </>
  );
};

export default AboutUs;
