import Head from "next/head";
import Container from "../components/Container";
import SingleColumn from "../components/SingleColumn";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";

export default function NotFound(props) {
  return (
    <Container>
      <Head>
        <title>404 • urbit.org</title>
      </Head>
      <SingleColumn>
        <Header search={props.search} />
        <Section className="pt-48">
          <h1>404</h1>
          <p className="mt-12">It looks like nothing is here.</p>
        </Section>
      </SingleColumn>
      <Footer />
    </Container>
  );
}
