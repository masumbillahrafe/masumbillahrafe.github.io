  const images = [
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant18_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant14_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant9_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant15_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant10_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant13_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant17_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant16_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant5_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Default_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant2_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant8_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant3_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant6_optimized.webp",
    "https://clbs.demo-techcilo.com/wp-content/uploads/2025/12/Property-1Variant7_optimized.webp"

  ];

  let lastX = 0;
  let lastY = 0;
  let lastTime = 0;
  let imgIndex = 0;

  const DISTANCE_LIMIT = 150;   // mouse কত দূর গেলে image spawn হবে
  const TIME_LIMIT = 80;       

  function distance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
  }

  document.addEventListener("mousemove", (e) => {
    const now = Date.now();

    const movedEnough = distance(lastX, lastY, e.clientX, e.clientY) > DISTANCE_LIMIT;
    const timePassed = now - lastTime > TIME_LIMIT;

    if (!movedEnough || !timePassed) return;

    lastX = e.clientX;
    lastY = e.clientY;
    lastTime = now;

    const trail = document.createElement("div");
    trail.className = "trail";

    const img = document.createElement("img");
    img.src = images[imgIndex];
    imgIndex = (imgIndex + 1) % images.length;

    trail.appendChild(img);
    document.body.appendChild(trail);

    gsap.set(trail, {
      x: e.clientX,
      y: e.clientY,
      scale: 0.6,
      opacity: 0
    });

    gsap.to(trail, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });

    gsap.to(trail, {
      opacity: 0,
      scale: 1.4,
      duration: 0.6,
      delay: 0.25,
      ease: "power2.out",
      onComplete: () => trail.remove()
    });
  });