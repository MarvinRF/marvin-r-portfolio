import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import Image from 'next/image';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/about/styles/about.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';

function About() {
  const isMobile = useIsMobile();
  const rootRef = useRef();
  const animatedImageRef = useRef();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      gsap.set(animatedImageRef.current, { top: !isMobile ? '-20vw' : '0' });
      if (!isMobile) {
        gsap.to(animatedImageRef.current, {
          top: '20vw',
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            scroller: document?.querySelector('main'),
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation();
    return () => ctx.kill();
  }, [isMobile]);

  const renderImageContainer = () => (
    <div className={styles.imageContainer}>
      <Image priority src="/companies/facepic.jpeg" sizes="100%" objectFit="cover" fill alt="Marvin Rocha" />
    </div>
  );

  return (
    <section ref={rootRef} className={styles.root}>
      <div className={clsx(styles.nameContainer, 'layout-block-inner')}>
        <AppearTitle>
          <h1 className={clsx('h1', 'medium')}>Hey, My name&apos;s</h1>
          <h1 className={clsx('h1', 'medium')}>Marvin Rocha!</h1>
        </AppearTitle>
      </div>

      <div className={clsx(styles.container, 'layout-grid-inner')}>
        {isMobile ? renderImageContainer() : null}
        <div className={clsx(styles.descWrapper)} ref={animatedImageRef}>
          <AppearTitle>
            <div className="p-l">“Building mission-critical systems where extreme</div>
            <div className="p-l">performance meets rigorous WCAG 2.2 compliance —</div>
            <div className="p-l">that&apos;s what drives me to solve problems creatively</div>
            <div className="p-l">and deliver on your project goals”</div>
          </AppearTitle>
        </div>
        {!isMobile ? renderImageContainer() : null}
        <div className={clsx(styles.descWrapperBottom)}>
          {!isMobile ? (
            <AppearTitle key="desktop-descWrapperBottom">
              <h6 className="h6">A Senior Fullstack Engineer from Brazil, building resilient</h6>
              <h6 className="h6">backends with DDD/Clean Architecture while ensuring the</h6>
              <h6 className="h6">products they power are inclusive, lightning-fast, and</h6>
              <h6 className="h6">legally secure. IAAP WAS Candidate, M.Sc. student</h6>
              <h6 className="h6">at UFBA.</h6>
            </AppearTitle>
          ) : (
            <AppearTitle key="mobile-descWrapperBottom">
              <h6 className="h6"> A Senior Fullstack Engineer from Brazil, building resilient</h6>
              <h6 className="h6">backends with DDD/Clean Architecture while ensuring the</h6>
              <h6 className="h6">products they power are inclusive, lightning-fast, and legally</h6>
              <h6 className="h6">secure. IAAP WAS Candidate, M.Sc. student at UFBA.</h6>
            </AppearTitle>
          )}
          <div className={clsx(styles.buttonContainer)}>
            <ButtonLink href="/about" label="ABOUT ME" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
