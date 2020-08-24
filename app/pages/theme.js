import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>CAVY | Theme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="main-card">
          <div style={{display: 'flex', alignItems:'center', padding: '1em 0', borderBottom: '1px solid grey'}}>
          <img src='/logo/logo-sq.png' style={{height:'50px', margin: '0 2em 0 0'}}/>
          <h1>Auckland Cavy Care - Theme</h1>
          </div>
          <div>
            <h1>Heading One</h1>
            <h2>Heading Two</h2>
            <h3>Heading Three</h3>
            <h4>Heading Four</h4>
            <h5>Heading Five</h5>
            <h6>Heading Six</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              quia dolorem culpa officiis repudiandae optio vel, voluptatum fuga
              ad quidem eligendi veniam magnam quisquam facere consectetur omnis
              dolores nostrum cupiditate?
            </p>
            <ul>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>
            <button className="btn-basic">Basic Button</button>
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
