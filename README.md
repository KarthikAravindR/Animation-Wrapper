# Animation-Wrapper

A Wrapper that use web animation API to animate the children on mount and unmount and destroy itself after unmount

### Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

```sh
npm install animation-wrapper
```

## Usage

```jsx
import { AnimationWrapper } from "animation-wrapper";

const [show, setShow] = useState(false);
return (
  <>
    <button onClick={() => setShow((state) => !state)}>Click me</button>
    <AnimationWrapper show={show}>
      <ChildComponent />
    </AnimationWrapper>
  </>
);

const ChildComponent = ({ renderProblem }) => {
  const [text, setText] = useState("");
  return (
    <input
      aria-label="string"
      className={renderProblem ? "fade-animation" : ""}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};
```

```tsx
interface iAnimationWrapper {
  show: boolean;
  children: ReactNode;
  from?: Keyframe;
  to?: Keyframe;
  unmountAnimation?: Array<Keyframe>;
  options?: object;
  className?: string;
}
```
