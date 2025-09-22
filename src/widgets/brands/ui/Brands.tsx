import { Container } from "@/shared/ui";
import Image from "next/image";
import { FC } from "react";
import VERSACE_IMG from "../assets/versace.png";
import ZARA_IMG from "../assets/zara.png";
import GUCCI_IMG from "../assets/gucci.png";
import PRADA_IMG from "../assets/prada.png";
import CALVIN_KLEIN_IMG from "../assets/calvin-klein.png";

export const Brands: FC = () => {
  return (
    <div className="bg-black py-[42px]">
      <Container>
        <div className="flex gap-[34px] justify-between">
          <Image  width={VERSACE_IMG.width} height={VERSACE_IMG.height} src={VERSACE_IMG.src} alt="Versace logo" />
          <Image width={ZARA_IMG.width} height={ZARA_IMG.height} src={ZARA_IMG.src} alt="Zara logo" />
          <Image width={GUCCI_IMG.width} height={GUCCI_IMG.height} src={GUCCI_IMG.src} alt="Gucci logo" />
          <Image width={PRADA_IMG.width} height={PRADA_IMG.height} src={PRADA_IMG.src} alt="Prada logo" />
          <Image
            width={CALVIN_KLEIN_IMG.width}
            height={CALVIN_KLEIN_IMG.height}
            src={CALVIN_KLEIN_IMG.src}
            alt="Calvin Klein logo"
          />
        </div>
      </Container>
    </div>
  );
};
