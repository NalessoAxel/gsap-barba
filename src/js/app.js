import barba from '@barba/core';
import gsap from 'gsap';
import { animationEnter, animationLeave, revealProject, leaveToProject, leaveFromProject } from './animations';

const resetActiveLink = () => gsap.set('a.is-active span', {
  xPercent: -100,
  transformOrigin: 'left ',
});

barba.init({
  transitions: [{
    name: 'detail',
    to: {
      namespace: 'detail',
    },
    once({ next }) {
      revealProject(next.container);
    },
    leave({ current }) {
      leaveToProject(current.container);
    },
    enter({ next }) {
      revealProject(next.container);
    },

  }, {
    name: 'general-transition',
    once({ next }) {
      resetActiveLink();
      gsap.from('header a', {
        duration: 0.5,
        yPercent: 100,
        stagger: 0.2,
        ease: 'power1.out',
        onComplete: () => animationEnter(next.container),
      });
    },
    leave({ current }) {
      console.log('leave');

      // we need to wait for this animation to finish
      const done = this.async();
      animationLeave(current.container, done);

    },
    enter({ next }) {
      console.log('enter');
      animationEnter(next.container);
    },
  }, {
    name: 'from-detail',
    from: {
      namespace: 'detail',
    },
    leave({ current }) {
      console.log('leave');
      leaveFromProject(current.container);
    },
    enter({ next }) {
      gsap.from('header a', {
        duration: 0.6,
        yPercent: 100,
        stagger: 0.2,
        ease: 'power1.out',
      });
      animationEnter(next.container);
    },
  },
  ],
});