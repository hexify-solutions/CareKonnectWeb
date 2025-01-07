import { Breadcrumb } from "@hexify/atoms";
const Lab = () => {
  return (
    <div>
      <div className="inner-wrapper">

      <Breadcrumb excludePaths={["hospital"]} />
      </div>
      this is the lab page
    </div>
  );
};

export default Lab;
