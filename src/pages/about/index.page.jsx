/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Marvin Rocha - About',
  description:
    'Learn about my journey as an Applied AI Engineer and Fullstack Engineer: LLM agents, RAG and evals for regulated industries, built on accessible (WCAG 2.2, IAAP WAS Candidate) and fast interfaces.',
  keywords: [
    'Marvin Rocha',
    'About Marvin Rocha',
    'About me',
    'Applied AI Engineer',
    'LLM Agents & RAG',
    'Fullstack Engineer Journey',
    'Accessibility Expert',
    'Professional Web Development',
    'Fintech Engineering Expertise',
    'WCAG Compliance',
    'AWS Cloud Architecture',
    'Developer Profile',
    'Quality Web Solutions',
  ],
};
function Page() {
  return (
    <>
      <CustomHead {...seo} />

      <Hero />
      <Overview />
      <Services />
      <Process />
    </>
  );
}

export default Page;
