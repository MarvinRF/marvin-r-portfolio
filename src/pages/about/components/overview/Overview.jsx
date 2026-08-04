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
            <h3 className="h3">A fullstack engineer&apos;s role is to </h3>
            <h3 className="h3">
              be a <span className="medium">trustworthy</span> host,
            </h3>
            <h3 className="h3">
              ensuring every user has a <span className="medium">fast</span>
            </h3>
            <h3 className="h3">
              and <span className="medium">accessible</span> experience.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">A fullstack engineer&apos;s role is to be a</h3>
            <h3 className="h3">
              trustworthy host, <span className="medium">ensuring</span> every user
            </h3>
            <h3 className="h3">
              has a <span className="medium">fast</span> and <span className="medium">accessible</span> experience.
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
            <h6 className="h6">Hey there! I specialize in mission-critical systems for fintech and digital</h6>
            <h6 className="h6">banking, architecting resilient backends with DDD/Clean Architecture</h6>
            <h6 className="h6">while ensuring the products they power are inclusive, lightning-fast,</h6>
            <h6 className="h6">and legally secure.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>My expertise spans the entire stack — from accessible, WCAG 2.1/2.2</h6>
            <h6 className="h6">(AA/AAA) compliant interfaces built with Next.js 15 and React, to</h6>
            <h6 className="h6">event-driven backends with NestJS, Kafka, and RabbitMQ.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>On the cloud side, I design infrastructure as code on AWS with</h6>
            <h6 className="h6">Terraform, provisioning Lambda, API Gateway, DynamoDB, and S3</h6>
            <h6 className="h6">with CloudFront — I am currently preparing for the AWS certification exam.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I delivered banking modules (Pix, TED, onboarding) 3 weeks ahead of </h6>
            <h6 className="h6">schedule, and I am an IAAP WAS Candidate currently pursuing an</h6>
            <h6 className="h6">M.Sc. in Computer Science at UFBA.</h6>

            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m looking forward to collaborating and creating something great!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Marvin Rocha.</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">Hey there! I specialize in mission-critical systems for fintech </h6>
            <h6 className="h6">and digital banking, architecting resilient backends with </h6>
            <h6 className="h6">DDD/Clean Architecture while ensuring the products they </h6>
            <h6 className="h6">power are inclusive, lightning-fast, and legally secure.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>My expertise spans the entire stack — from accessible, </h6>
            <h6 className="h6">WCAG 2.1/2.2 (AA/AAA) compliant interfaces built with</h6>
            <h6 className="h6">Next.js 15 and React, to event-driven backends with</h6>
            <h6 className="h6">NestJS, Kafka, and RabbitMQ.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>On the cloud side, I design infrastructure as code on AWS with</h6>
            <h6 className="h6">Terraform, provisioning Lambda, API Gateway, DynamoDB, and</h6>
            <h6 className="h6">S3 with CloudFront — currently preparing for the AWS exam.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I delivered banking modules 3 weeks ahead of schedule,</h6>
            <h6 className="h6">and I am an IAAP WAS Candidate currently pursuing an</h6>
            <h6 className="h6">M.Sc. in Computer Science at UFBA.</h6>
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
