import gsap from 'gsap';

const leaveToProject = (container) => {
  const headerLink = container.querySelector('header a');
  const projects = container.querySelectorAll('.image');
  const images = container.querySelectorAll('img');
  const content = container.querySelector('.content');

  const tl = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: 'power1.in',
    },
  });

  tl
    .to(headerLink, {
      yPercent: -100,
    }, 0)
    .to(projects, { xPercent: 100,
      stagger: 0.05 }, 0,
    )
    .to(content, {
      autoAlpha: 0,
      ease: 'none',
    }, 0)
    .to(images, { xPercent: -100,
      stagger: 0.05 }, 0,
    );

  return tl;
};

export default leaveToProject;