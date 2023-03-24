import React from "react";
import { Page, Card, Heading } from "../../components";

function Home() {
  return (
    <Page>
      <Card cardStyles='h-5/6'>
        <div className="grid row-1">
          <div className="site-title-subtitle grid row-1 gap-7">
            <Heading text={' Lailei Forouraghi'} />
            <h2 className="text-2xl text-center tracking-widest text-amber-900 font-serif">
              Software Engineer
            </h2>
          </div>

          <div className="menu grid col-2">
          </div>
        </div>
      </Card>
    </Page>
  );

}

export default Home;
