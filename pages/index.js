import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

// TODO: implement clsx for alert message styling (page10 in Assets/Media tutorial)
// TODO : implement postMessage.css.config in top-level to be able to use styling libraries like Tailwind/Next UI etc.(page10 in Assets/Media tutorial)
// TODO : install and try sass (page10 in Assets/Media tutorial)

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello there! My name's David and I'm an aspiring Fullstack Web
          Developer with previous professional background in antiquities and
          numismatics.
        </p>
        <p>
          follow my Github in order to get an impression of my developing
          skillset via my projects and repositories{" "}
          <a href="https://github.com/Squasmn" />
        </p>
        <p>
          (This is a sample website following the tutorial on{" "}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
