import React, { useEffect, useState } from "react";
interface AnimationWrapperProps {
  show: boolean;
  children: JSX.Element;
  from?: Keyframe;
  to?: Keyframe;
  unmountAnimation?: Array<Keyframe>;
  options?: object;
  className?: string;
}

export const AnimationWrapper = ({
  show,
  children,
  from = { opacity: 0 },
  to = { opacity: 1 },
  unmountAnimation,
  options = { duration: 500, fill: "forwards" },
  className,
}: AnimationWrapperProps) => {
  const element = React.useRef<HTMLDivElement>(null);
  const [removeState, setRemoveState] = useState(!show);

  useEffect(() => {
    const elementToAnimate = element.current;

    if (show) {
      setRemoveState(false);
      if (!elementToAnimate) return;
      elementToAnimate.animate([from, to], options);
    } else if (elementToAnimate) {
      const animation = elementToAnimate.animate(
        unmountAnimation || [to, from],
        options
      );
      animation.onfinish = () => setRemoveState(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, removeState]);

  return !removeState ? (
    <div className={className} ref={element}>
      {children}
    </div>
  ) : null;
};
