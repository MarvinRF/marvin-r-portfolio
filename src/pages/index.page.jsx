/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Marvin Rocha - Applied AI Engineer Portfolio',
  description:
    'Applied AI Engineer shipping LLM agents, RAG and evals that are safe to put in front of real users, from the eval harness to an accessible, fast interface. TypeScript & Python, Next.js, NestJS, AWS, GCP.',
  keywords: [
    'Marvin Rocha',
    'Applied AI Engineer',
    'AI Engineer',
    'LLM Agents',
    'RAG',
    'LLM Evals',
    'Model Context Protocol',
    'MCP',
    'Fullstack Engineer',
    'Accessibility',
    'WCAG 2.2',
    'Next.js',
    'NestJS',
    'TypeScript',
    'Python',
    'AWS',
    'GCP',
    'Portfolio',
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
