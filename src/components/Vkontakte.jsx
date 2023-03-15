import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Vkontakte() {
  return (
    <>
        <div className="vkBtn">
          <Link href={"https://vk.com/muztrade51"} className="contentvk">
            <Image src={"/vk.svg"} alt="vk" width={76} height={76} />
          </Link>
        </div>
    
    </>
  );
}
