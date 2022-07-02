import HomeLayout from "../components/layouts/HomeLayout";
import { CustomNextPage } from "./_app";

const Hello: CustomNextPage = () => {
  return <div>Hello</div>;
};

Hello.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};

Hello.authRequired = true;
export default Hello;
