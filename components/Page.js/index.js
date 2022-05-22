import NavBar from "../NavBar/NavBar";
import Side from "../Side/Side";
import { PageStyles } from "./pageElements";

const Page = ({ children }) => {
  return (
    <PageStyles>
      <NavBar />
      {children}
      <Side />
    </PageStyles>
  );
};

export default Page;
