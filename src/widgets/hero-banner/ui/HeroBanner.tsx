import { FC } from "react";
import HERO_IMG from "../assets/hero.jpg";
import { Button, Container } from "@/shared/ui";

export const HeroBanner: FC = () => {
  return (
    <section className="pt-[103px] pb-[116px] bg-cover" style={{ backgroundImage: `url("${HERO_IMG.src}")` }}>
      <Container>
        <div className="flex flex-col gap-8 max-w-[577px]">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="small-text">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality
            and cater to your sense of style.
          </p>
          <Button className="max-w-[210px]">Shop Now</Button>
        </div>
        <div className="mt-12 flex gap-8">
          <div className="flex flex-col">
            <span className="font-bold text-[40px]">200+</span>
            <span className="small-text">International Brands</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[40px]">2,000+</span>
            <span className="small-text">High-Quality Products</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[40px]">30,000+</span>
            <span className="small-text">Happy Customers</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
