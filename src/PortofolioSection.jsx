import Card from "./Card";

function PortofolioSection() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Portofolio</h1>
        <div>
          <div className="w-75 m-auto d-flex flex-row justify-content-evenly">
            <Card card="JavaScript" />
            <Card card="Node js" />
            <Card card="Mongo Db" />
          </div>
          <br />
          <div className="w-75 m-auto d-flex flex-row justify-content-evenly">
            <Card card="React" />
            <Card card="Angular" />
            <Card card="Vue" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PortofolioSection;