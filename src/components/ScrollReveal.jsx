import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../utils/cn";

const getVariants = (direction) => {
  const distance = 60;
  const hidden = { opacity: 0 };

  switch (direction) {
    case "up":
      hidden.y = distance;
      break;
    case "down":
      hidden.y = -distance;
      break;
    case "left":
      hidden.x = distance;
      break;
    case "right":
      hidden.x = -distance;
      break;
    case "scale":
      hidden.scale = 0.9;
      break;
    default:
      break;
  }

  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = "up",
  once = true,
  amount = 0.2,
  as = "div",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants(direction)}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  once = true,
  amount = 0.15,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}) {
  return (
    <motion.div
      variants={getVariants(direction)}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({
  text,
  className,
  delay = 0,
  as = "h2",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const words = text.split(" ");
  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      className={cn(
        "flex flex-wrap gap-x-[0.3em]",
        className
      )}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden"
        >
          <motion.span
            className="inline-block"
            initial={{
              y: "110%",
              opacity: 0,
            }}
            animate={
              isInView
                ? { y: 0, opacity: 1 }
                : { y: "110%", opacity: 0 }
            }
            transition={{
              duration: 0.55,
              delay: delay + i * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 z-10 origin-left bg-zorx-green"
        initial={{ scaleX: 1 }}
        animate={
          isInView
            ? { scaleX: 0 }
            : { scaleX: 1 }
        }
        transition={{
          duration: 0.9,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      <motion.img
        src={src}
        alt={alt}
        className={cn(
          "h-full w-full object-cover",
          imgClassName
        )}
        initial={{ scale: 1.25 }}
        animate={
          isInView
            ? { scale: 1 }
            : { scale: 1.25 }
        }
        transition={{
          duration: 1.2,
          delay: delay + 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        loading="lazy"
      />
    </div>
  );
}