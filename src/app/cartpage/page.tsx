import Wrapper from "../../../components/Wrapper";
import Cart from "@/components/Cart";

const Page = () => {
  return (
    <Wrapper>
      <div className="mt-20">
        <h2>Shopping Cart</h2>
        {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 mt-10"> */}
        {/* <div className="grid grid-custom w-full gap-10"> */}
        <Cart />
      </div>
    </Wrapper>
  );
};

export default Page;
