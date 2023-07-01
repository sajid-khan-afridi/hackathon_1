import Hero from "../../components/section/Hero";
import Promotion from "../../components/section/Promotion";
import Product from "../../components/section/Product";
import Unique from "../../components/section/Unique";
import NewsLetter from "../../components/section/NewsLetter";
import Wrapper from "../../components/Wrapper";
import Grid5 from "../../components/section/Grid5";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotion />
      <Product />
      <Unique />
      <NewsLetter />
      <Grid5 />
    </>
  );
}
