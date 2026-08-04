/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Marvin Rocha - Senior Fullstack Engineer Portfolio',
  description: 'Senior Fullstack Engineer building mission-critical systems where extreme performance meets rigorous WCAG 2.2 compliance. Next.js, NestJS, Kafka & DDD.',
  keywords: [
    'Marvin Rocha',
    'Fullstack Engineer',
    'Accessibility Expert',
    'WCAG 2.2',
    'Portfolio',
    'Web Development',
    'React Developer',
    'Web Applications',
    'Fintech Engineer',
    'Next.js',
    'NestJS',
    'React',
    'React Native',
    'Kafka',
    'AWS',
    'Terraform',
    'Serverless',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
  ],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Home />
      <About />
      <Clients />
      <Quote />
      <Projects />
    </>
  );
}

export default Page;
