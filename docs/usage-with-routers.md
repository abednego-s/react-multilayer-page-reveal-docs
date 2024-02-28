# Usage with routers

## Start the animation when changing routes

To start the animation when navigating between routes, you can utilize the client-side routing hooks provided by routing libraries or frameworks. They can be used along with `reveal()` function, and if you need to adjust the timings, you can pass a delay (in miliseconds) as second argument, for example `reveal(fn, 500)`. However, when choosing to use a link element, canceling its default action with `preventDefault()` may be required in order to start the animation and navigate to a route. See examples below.

## Examples

### react-router-dom

Use `useNavigate` hook and starts the animation by calling `reveal()` function with a delay

```tsx
import { useMultiLayerPageReveal } from "react-multilayer-page-reveal";
import { Link, useNavigate } from "react-router-dom";

export function MyComponent() {
  const { reveal } = useMultiLayerPageReveal();
  const navigate = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    reveal(() => navigate("/another-page"), 750);
  }

  return (
    <>
      <h1>Hello World</h1>
      <p>Welcome</p>
      <Link to="/another-page" onClick={handleClick}>
        Go to the next page
      </Link>
    </>
  );
}
```

See the demo: [Open Codesandbox](https://codesandbox.io/p/sandbox/react-multilayer-page-reveal-react-router-dom-9ngyq8)

### Next.js router

Using Next.js `useRouter` hook and starts the animation by calling `reveal()` function

```tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMultiLayerPageReveal } from "react-multilayer-page-reveal";

export default function MyComponent() {
  const { reveal } = useMultiLayerPageReveal();
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    reveal();
    router.push("/another-page");
  }

  return (
    <>
      <h1>Hello World</h1>
      <p>Welcome</p>
      <Link href="/another-page" onClick={handleClick}>
        Go to the next page
      </Link>
    </>
  );
}
```

See the demo: [Open Codesandbox](https://codesandbox.io/p/sandbox/react-multilayer-page-reveal-demo-nextjs-nhqfdl)
