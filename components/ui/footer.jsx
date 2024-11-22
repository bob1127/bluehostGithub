import Logo from "./logo";
// import { Cloudinary } from "@cloudinary/url-gen";
import Image from "next/image";

import footerMobile from "./footerMobile.jsx";

// const myLoader = ({ src, width, quality, placeholder }) => {
//   return `https://www.ultraehp.com/images/Products-Detail-Img/UH-2/${src}?w=${width}?p=${placeholder}`
// }

const myLoader = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/footer/${src}?w=${width}?p=${placeholder}`;
};

export default function Footer() {
  return (
    <div className="hidden md:block">
      <footer className="py-20   bg-gray-600  flex justify-center">
        <div className=" md:grid-cols-1 grid lg:grid-cols-3 w-4/5 ">
          <div className=" mt-2">
            <ul>
              <b className=" text-white text-[16px]">關於我們</b>
              <li className="text-gray-300 text-[14px] mt-2 ">
                <div>
                  <div className="flex group hover:scale-105 duration-200 scale-100">
                    <Image
                      loader={myLoader}
                      loading="lazy"
                      placeholder="empty"
                      className="mr-2"
                      src="phone-call.webp"
                      width={24}
                      height={24}
                      alt="phone-call-icon"
                    />
                    <p className="text-white font-light"> +886 4 2491 0950</p>
                  </div>
                </div>
              </li>

              <li className="text-gray-300 text-[14px] mt-2 ">
                <div>
                  <div className="flex group hover:scale-105 duration-200 scale-100">
                    <Image
                      loader={myLoader}
                      placeholder="empty"
                      loading="lazy"
                      src="email.png"
                      alt="icon-footer"
                      width={24}
                      height={24}
                      className="icon-footer mr-3"
                    />
                    <p className="text-white font-light">
                      {" "}
                      UltraE@ultrae.com.tw
                    </p>
                  </div>
                </div>
              </li>
              <li className="text-gray-300 text-[14px] mt-2 ">
                <div>
                  <div className="flex group hover:scale-105 duration-200 scale-100">
                    <Image
                      loader={myLoader}
                      placeholder="empty"
                      loading="lazy"
                      src="location.png"
                      alt="location-icon"
                      width={24}
                      height={24}
                      className="icon-footer mr-3"
                    />
                    <p className="text-white font-light">
                      {" "}
                      412台中市大里區工業九路118號
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <ul>
              <b className=" text-white text-[16px] mt-4 ">快速連結</b>
              <li className="text-gray-300 text-[14px] mt-2 ">
                <div className="flex group hover:scale-105 duration-200 scale-100">
                  <a
                    className="font-light "
                    href="https://www.ultraehp.com/aboutUs.html"
                  >
                    {" "}
                    關於我們{" "}
                  </a>
                </div>
              </li>

              <li className="text-gray-300 text-[14px] mt-2 ">
                <div>
                  <div className="flex group hover:scale-105 duration-200 scale-100">
                    <a
                      className=" font-light"
                      aria-label="Link to download page"
                      href="https://www.ultraehp.com/Download.html"
                    >
                      {" "}
                      下載
                    </a>
                  </div>
                </div>
              </li>
              <li className="text-gray-300 text-[14px] mt-2 ">
                <div>
                  <div className="flex group hover:scale-105 duration-200 scale-100">
                    <a
                      className=" font-light"
                      href="https://www.ultraehp.com/ArticleList.html"
                      aria-label="Link to Articles page"
                    >
                      {" "}
                      相關文章
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-2">
            {" "}
            <ul>
              <b className=" text-white text-[16px] mt-4">
                訂閱且關注我們的最新動態
              </b>

              <div className="w-full">
                <iframe
                  title="contact-form"
                  loading="lazy"
                  src="https://www.ultraehp.com/customized-iframe-footer.html"
                  height={300}
                  className="w-full"
                ></iframe>
              </div>

              {/* 
          <Mailchimp/> */}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
