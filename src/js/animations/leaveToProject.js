import gsap from 'gsap';

const leaveToProject = (container) => {
  const navLink = container.querySelectorAll('header a');
  const projects = container.querySelectorAll('.image');
  const imagess = container.querySelectorAll('.img');

  const tl = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: 'power1.in',
    },
  });

  tl
    .to(navLink, {
      yPercent: 100,
    }, 0)
    .to(projects, { xPercent: 101,
      stagger: 0.05 }, 0,
    )
    .to(imagess, { xPercent: -101,
      stagger: 0.05 }, 0,
    );

  return tl;
};

export default leaveToProject;