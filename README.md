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
    <AnimationWrapper 
        show={show} 
        options={ duration: 1500 } 
        from={{ opacity: 0, transform: "translateY(-100px)" }} 
        to={{ opacity: 1, transform: "translateY(0)" }}>
      <ChildComponent />
    </AnimationWrapper>
  </>
);

const ChildComponent = () => {
  const [text, setText] = useState("");
  return (
    <input
      aria-label="string"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};
```

## API

| Property         | Type            | Default                             | Description                                                            |
| ---------------- | --------------- | ----------------------------------- | ---------------------------------------------------------------------- |
| show             | boolean         | -                                   | flag used to show/hide the child                                       |
| children         | ReactNode       | -                                   | Element to be animated                                                 |
| from             | KeyFrame        | { opacity: 0 }                      | starting position/state of animation when mounting                     |
| to               | KeyFrame        | { opacity: 1 }                      | ending position/state of animation when mounting                       |
| unmountAnimation | Array<Keyframe> | [{ opacity: 0 }, { opacity: 1 }]    | animation that needed to occur when unmounting                         |
| options          | object          | { duration: 500, fill: "forwards" } | configuration of animation                                             |
| className        | string          | ""                                  | className can be passed to change the wrapper style like making inline |
