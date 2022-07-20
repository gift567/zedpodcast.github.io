const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo(".words h2", { opacity: 0 }, { opacity: 1, duration: 0.40 });
tl.fromTo(".advert__container > h2", { opacity: 0 }, { opacity: 1, duration: 0.40 });
tl.fromTo(".words p", { opacity: 0 }, { opacity: 1, duration: 0.60 });
tl.fromTo(".words a", { opacity: 0 }, { opacity: 1, duration: 1 });
