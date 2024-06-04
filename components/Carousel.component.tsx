import Link from "next/link";
import Image from "next/image";
import daisyui from "daisyui";

export default function Carousel() {
  return (
    <div className="w-full carousel h-80">
      <div id="slide1" className="carousel-item w-full text-white text-lg">
        <div className="w-full">
          <img
            src="/image/Room1.webp"
            alt=""
            className="h-80 object-cover w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 h-80 px-5">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item w-full text-white text-lg">
        <div className="w-full">
          <img
            src="/image/Room1.webp"
            alt=""
            className="h-80 object-cover w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 h-80 px-5">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item w-full text-white text-lg">
        <div className="w-full">
          <img
            src="/image/Room1.webp"
            alt=""
            className="h-80 object-cover w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 h-80 px-5">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
