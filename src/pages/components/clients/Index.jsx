import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import Badge from '@src/pages/components/clients/components/Badge';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/clients/styles/clients.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Clients() {
  const isMobile = useIsMobile();
  const textRefs = useRef([]);
  const badgeRefs = useRef([]);
  const rootRef = useRef();
  const windowSize = useWindowSize();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const vw = (coef) => windowSize.height * (coef / 100);
        textRefs.current.forEach((textRef, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: rootRef.current,
                start: index === 0 ? `top-=${vw(35)}` : `top+=${vw(35 + 5.5555556 * index)}`,
                end: index === 0 ? `bottom-=${vw(35 + 5.5555556 * index)}` : `bottom+=${vw(25)}`,
                toggleActions: 'play none reverse none',
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(textRef, {
              top: `${10 + 30 * index + 5.5555556 * index}vw`,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation(textRefs, rootRef, windowSize, isMobile);
    return () => ctx.kill();
  }, [isMobile, windowSize.height]);

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-grid-inner')}>
      <h1 className={clsx(styles.sectionTitle, 'h1')}>
        <AppearByWords>Experience</AppearByWords>
      </h1>
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2026</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[0] = el;
        }}
        className={styles.first}
      >
        <Badge name="company1" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Viaflow</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Applied AI Engineer shipping a production</div>
            <div className="p-l">LLM agent on WhatsApp for healthcare: 95%</div>
            <div className="p-l">field-level accuracy, a 120-scenario</div>
            <div className="p-l">adversarial eval harness, and 70% fewer</div>
            <div className="p-l">LLM calls via deterministic logic.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className={styles.firstText}
          >
            <AppearTitle>
              <h6 className="h6">2026</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Viaflow</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Applied AI Engineer shipping a production</div>
              <div className="p-l">LLM agent on WhatsApp for healthcare: 95%</div>
              <div className="p-l">field-level accuracy, a 120-scenario</div>
              <div className="p-l">adversarial eval harness, and 70% fewer</div>
              <div className="p-l">LLM calls via deterministic logic.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2026</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
      >
        <Badge name="company3" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>TARGIT Brasil</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">AI Engineer who architected Capivara</div>
            <div className="p-l">Compass, an AI-native analytics platform</div>
            <div className="p-l">with Holt-Winters forecasting and AI</div>
            <div className="p-l">agents, keeping LCP under 1s on</div>
            <div className="p-l">data-heavy dashboards.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className={styles.secondText}
          >
            <AppearTitle>
              <h6 className="h6">2026</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>TARGIT Brasil</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">AI Engineer who architected Capivara</div>
              <div className="p-l">Compass, an AI-native analytics platform</div>
              <div className="p-l">with Holt-Winters forecasting and AI</div>
              <div className="p-l">agents, keeping LCP under 1s on</div>
              <div className="p-l">data-heavy dashboards.</div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2024</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>T-Alpha</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Fullstack Engineer & Accessibility Lead for</div>
            <div className="p-l">two production fintech platforms (V2X Pay and</div>
            <div className="p-l">Planium Pay). Led the Next.js 15 migration:</div>
            <div className="p-l">72% TTFB reduction, 67% smaller bundles, and</div>
            <div className="p-l">a WCAG 2.2 AA-compliant banking design system.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.fifthEmpty} />
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">2024</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>T-Alpha</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Fullstack Engineer & Accessibility Lead for</div>
              <div className="p-l">two production fintech platforms (V2X Pay and</div>
              <div className="p-l">Planium Pay). Led the Next.js 15 migration:</div>
              <div className="p-l">72% TTFB reduction, 67% smaller bundles, and</div>
              <div className="p-l">a WCAG 2.2 AA-compliant banking design system.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
