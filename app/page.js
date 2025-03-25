"use client";
import Header from "./components/Header";
import About from "./components/About";
import Experiencie from "./components/Experiencie";
import Contact from "./components/Contact";
import Section from "./components/Section";
import Linterna from "./components/Linterna";
import Layout from "./components/Layout";
export default function Home() {
  return (
    <Layout>
      <Linterna />
      <div className="flex flex-col items-start overflow-x-hidden overflow-y-auto max-h-full justify-start font-[family-name:var(--font-geist-sans)] snap-y snap-mandatory">
        <Section>
          <Header />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Experiencie />
        </Section>
        <Section>
          <Contact />
        </Section>
      </div>
    </Layout>
  );
}
