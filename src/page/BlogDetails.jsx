import SectionLayout from "../components/SectionLayout";
import React from "react";
import bg from "../images/contact/ngt.jpg";
import banner from "../images/4.jpg";
import MoreBlog from "../components/BlogDetail/MoreBlog";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { SOCIAL_MEDIA } from "../components/Footer/data";
import Marquee from "react-fast-marquee";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import zl from "../images/footer-img/zalo.png";
import qrzl from "../images/footer-img/qrzalo.jpg";
import { motion } from "framer-motion";

const BlogDetails = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="xl:flex hidden flex-col p-3 bg-line rounded-full gap-3 fixed z-10 top-[35%] left-[10%]"
      >
        {SOCIAL_MEDIA.map((item) => (
          <Button
            asChild
            key={item.id}
            target="_blank"
            className="bg-transparent px-0 gap-2 text-text justify-start hover:bg-transparent rounded-lg"
          >
            <Link to={item.href}>
              <img src={item.icon} alt="" width={30} height={30} />
            </Link>
          </Button>
        ))}
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-transparent px-0 gap-2 text-text justify-start hover:bg-transparent rounded-lg">
              <img src={zl} alt="" width={30} height={30} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="bottom" align="end" className="w-fit p-2">
            <img src={qrzl} alt="" width={200} height={200} />
          </PopoverContent>
        </Popover>
      </motion.div>
      <SectionLayout className="relative mt-[100px] gap-0 2xl:gap-0 xl:mt-[120px] xl:px-[300px]">
        <div className="relative z-[1] flex flex-col gap-3 xl:gap-5 pb-3 xl:pb-8 border-b border-line">
          <h2 className="heading-6 md:heading-3 !font-bold xl:leading-[60px] text-secondary font-mont">
            Chủ tịch Quốc hội Vương Đình Huệ hội kiến Tổng Bí thư, Chủ tịch nước
            Trung Quốc.
          </h2>
          <p>29/10/2024</p>
          <img src={banner} alt="" className="max-w-full" />
        </div>
        <div className="relative z-[1] pt-3 xl:pt-8 flex flex-col gap-3 xl:gap-8">
          <p className="big">
            Sáng 8/4, tại Thủ đô Bắc Kinh, Chủ tịch Quốc hội Vương Đình Huệ hội
            kiến Tổng Bí thư, Chủ tịch nước Trung Quốc Tập Cận Bình.
          </p>
          <p>
            Việc Tổng Bí thư, Chủ tịch Trung Quốc Tập Cận Bình gặp Chủ tịch Quốc
            hội Vương Đình Huệ đầu tiên ngay sau khi đoàn tới Bắc Kinh thể hiện
            sự coi trọng cao độ quan hệ hai nước và chuyến thăm của đoàn đại
            biểu cấp cao của Đảng và Nhà nước Việt Nam. Tại hội kiến, Chủ tịch
            Quốc hội Vương Đình Huệ chuyển lời thăm hỏi thân tình, những tình
            cảm quý mến và tốt đẹp của Tổng Bí thư Nguyễn Phú Trọng và các lãnh
            đạo chủ chốt của Đảng và Nhà nước Việt Nam tới Tổng Bí thư, Chủ tịch
            nước Tập Cận Bình. Chủ tịch Quốc hội Vương Đình Huệ chúc mừng những
            thành tựu to lớn, mang ý nghĩa lịch sử mà Đảng, Nhà nước và nhân dân
            Trung Quốc đã giành được; tin tưởng nhân dân Trung Quốc sẽ hoàn
            thành thắng lợi các mục tiêu Đại hội 20, xây dựng Trung Quốc trở
            thành cường quốc xã hội chủ nghĩa hiện đại, giàu mạnh, văn minh, hài
            hòa và tươi đẹp. Chủ tịch Quốc hội hy vọng Trung Quốc sẽ đóng góp
            quan trọng cho hòa bình, hợp tác và phát triển toàn cầu, thực hiện
            ngoại giao láng giềng “thân, thành, huệ, dung”, mang lại cơ hội hợp
            tác cho các nước láng giềng, trong đó có Việt Nam. Tổng Bí thư, Chủ
            tịch Trung Quốc Tập Cận Bình gửi lời thăm hỏi thân thiết đến Tổng Bí
            thư Nguyễn Phú Trọng. Ông cũng chúc mừng những thành tựu phát triển
            kinh tế - xã hội của Việt Nam dưới sự lãnh đạo của Đảng Cộng sản
            Việt Nam đứng đầu là Tổng Bí thư Nguyễn Phú Trọng. Trung Quốc ủng hộ
            Việt Nam phát triển, ổn định, xây dựng thành công chủ nghĩa xã hội
            phù hợp với tình hình đất nước. Tổng Bí thư, Chủ tịch Trung Quốc Tập
            Cận Bình nhấn mạnh việc lãnh đạo cao nhất hai Đảng, hai nước nhất
            trí xây dựng cộng đồng chia sẻ tương lai có ý nghĩa chiến lược mở ra
            giai đoạn hợp tác mới, rộng mở cho quan hệ song phương với 6 phương
            hướng lớn. Bao gồm tin cậy chính trị cao hơn, hợp tác quốc phòng -
            an ninh thực chất hơn, hợp tác thực chất sâu sắc hơn, nền tảng xã
            hội vững chắc hơn, phối hợp đa phương chặt chẽ hơn, bất đồng được
            kiểm soát và giải quyết tốt hơn, đóng góp tích cực cho hòa bình,
            phát triển của khu vực và thế giới. Hai lãnh đạo vui mừng trước đà
            phát triển tích cực của quan hệ Việt Nam - Trung Quốc, nhấn mạnh hai
            Đảng, hai nước có nhiều điểm tương đồng về nền tảng tư tưởng, mục
            tiêu xây dựng chủ nghĩa xã hội, đều phấn đấu vì lợi ích và hạnh phúc
            của nhân dân.
          </p>
        </div>
        <div className="mt-10 xl:mt-20 border-t border-text pt-10 xl:pt-20">
          <MoreBlog />
        </div>
        <img
          src={bg}
          alt=""
          className="absolute left-0 w-full max-h-[200px] top-[20%]"
        />
        <img
          src={bg}
          alt=""
          className="absolute left-0 w-full max-h-[200px] top-[60%]"
        />
      </SectionLayout>
      <div className="flex p-3 bg-bg xl:hidden">
        <Marquee>
          {SOCIAL_MEDIA.map((item) => (
            <Button
              asChild
              key={item.id}
              target="_blank"
              className="bg-transparent mx-[85px] px-0 gap-2 text-text justify-start hover:bg-transparent rounded-lg"
            >
              <Link to={item.href}>
                <img src={item.icon} alt="" width={30} height={30} />
                {item.title}
              </Link>
            </Button>
          ))}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="bg-transparent mx-[85px] px-0 gap-2 text-text justify-start hover:bg-transparent rounded-lg">
                <img src={zl} alt="" width={30} height={30} />
                Zalo
              </Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" align="end" className="w-fit p-2">
              <img src={qrzl} alt="" width={200} height={200} />
            </PopoverContent>
          </Popover>
        </Marquee>
      </div>
    </>
  );
};

export default BlogDetails;
