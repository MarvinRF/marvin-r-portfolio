import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">An AI engineer&apos;s role is to</h3>
            <h3 className="h3">
              treat model output as a <span className="medium">claim</span>,
            </h3>
            <h3 className="h3">not a fact, and ship products that</h3>
            <h3 className="h3">
              stay <span className="medium">reliable</span> and <span className="medium">accessible</span>.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">An AI engineer&apos;s role is to treat model</h3>
            <h3 className="h3">
              output as a <span className="medium">claim</span>, not a fact, and ship
            </h3>
            <h3 className="h3">
              products that stay <span className="medium">reliable</span> and <span className="medium">accessible</span>.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>Some words</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">Hey there! I&apos;m an Applied AI Engineer and Fullstack Engineer with 4+</h6>
            <h6 className="h6">years shipping production systems, now focused on LLM products that</h6>
            <h6 className="h6">are safe to put in front of real users, from the eval harness to the interface.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I build LLM agents with Claude and OpenAI behind provider-agnostic</h6>
            <h6 className="h6">abstractions, RAG pipelines in Python, adversarial eval harnesses and</h6>
            <h6 className="h6">MCP servers, applied in healthcare and fintech under ANS, BCB and ANPD.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>On the product side, I ship accessible WCAG 2.2 interfaces with Next.js</h6>
            <h6 className="h6">and React, event-driven backends with NestJS, and cloud infrastructure</h6>
            <h6 className="h6">on AWS and GCP with Terraform.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I am an IAAP WAS Candidate and an M.Sc. candidate in Computer Science</h6>
            <h6 className="h6">at UFBA, researching semantic transfer across disjoint domains.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m looking forward to collaborating and creating something great!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Marvin Rocha.</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">Hey there! I&apos;m an Applied AI Engineer and Fullstack</h6>
            <h6 className="h6">Engineer with 4+ years shipping production systems,</h6>
            <h6 className="h6">now focused on LLM products that are safe to put in</h6>
            <h6 className="h6">front of real users, from the eval harness to the interface.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I build LLM agents with Claude and OpenAI, RAG</h6>
            <h6 className="h6">pipelines in Python, adversarial eval harnesses and</h6>
            <h6 className="h6">MCP servers for healthcare and fintech.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>On the product side, I ship accessible WCAG 2.2</h6>
            <h6 className="h6">interfaces with Next.js and React, NestJS backends</h6>
            <h6 className="h6">and cloud infrastructure on AWS and GCP.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I am an IAAP WAS Candidate and an M.Sc. candidate</h6>
            <h6 className="h6">in Computer Science at UFBA.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m looking forward to collaborating and creating something</h6>
            <h6 className="h6">great!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Marvin Rocha.</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
