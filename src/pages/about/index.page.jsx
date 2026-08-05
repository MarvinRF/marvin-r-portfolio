/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Marvin Rocha - About',
  description:
    'Learn about my journey as a Fullstack Engineer and Digital Accessibility Expert (WCAG 2.2 / WAS Candidate) — engineering digital ecosystems where extreme performance meets rigorous compliance.',
  keywords: [
    'Marvin Rocha',
    'About Marvin Rocha',
    'About me',
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
