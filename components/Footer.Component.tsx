import Image from "next/image";

export default function Footer() {
  return (
    <div className="text-white bg-zinc-900 px-5">
      <div className="flex mx-auto max-w-7xl justify-between">
        <div className=" py-5 flex-1">
          <h1 className="font-bold">Follow us on</h1>
          <div className="flex-col gap-10 py-5 text-white font-semibold">
            <div className="flex py-2 gap-5">
              <Image
                src="/SVG/White-Instagram.svg"
                alt=""
                width={35}
                height={35}
                className="fill: currentColor"
              ></Image>
              <span>Instagram</span>
            </div>
            <div className="flex py-2 gap-5">
              <Image
                src="/SVG/White-Twitter.svg"
                alt=""
                width={35}
                height={35}
              ></Image>
              <span>Twitter</span>
            </div>
            <div className="flex py-1 gap-5">
              <Image
                src="/SVG/White-f.svg"
                alt=""
                width={35}
                height={35}
              ></Image>
              <span>Facebook</span>
            </div>
          </div>
        </div>
        <div className="flex-1 py-5">
          <div className="w-80">
            <h3 className="font-semibold">Address</h3>
            <h3 className="text-justify">
              Address: 1234 Street Adress City Address, 1234 Phones: (00) 1234
              5678 We are open: Monday-Thursday: 9:00 AM - 5:30 PM Friday: 9:00
              AM - 6:00 PM Saturday: 11:00 AM - 5:00 PM E-mail: shop@email.com
            </h3>
          </div>
        </div>
        <div className="flex-1 flex-col-reverse"></div>
      </div>
    </div>
  );
}
