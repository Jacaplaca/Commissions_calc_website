import React, { useRef, useEffect } from "react";

function usePortal(id: string) {
  console.log("🚀 ~ file: usePortal.ts ~ line 36 ~ usePortal ~ id", id);
  const rootElemRef = useRef(null);

  useEffect(
    function setupElement() {
      // Look for existing target dom element to append to
      const existingParent = document.querySelector(`#${id}`);

      // console.log("🚀 ~ file: usePortal.ts ~ line 39 ~ setupElement ~ existingParent", existingParent);
      // Parent is either a new root or the existing dom element
      // const parentElem = existingParent || createRootElement(id);
      const parentElem = existingParent;

      // // If there is no existing DOM element, add a new one.
      // if (!existingParent) {
      //   addRootElement(parentElem);
      // }

      // Add the detached element to the parent
      if (rootElemRef) {
        const element = rootElemRef.current;
        if (element) {
          parentElem && parentElem.appendChild(element);
        }
      }

      // return function removeElement() {
      //   rootElemRef.current.remove();
      //   if (!parentElem.childElementCount) {
      //     parentElem.remove();
      //   }
      // };
    },
    [id]
  );

  /**
   * It's important we evaluate this lazily:
   * - We need first render to contain the DOM element, so it shouldn't happen
   *   in useEffect. We would normally put this in the constructor().
   * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
   *   since this will run every single render (that's a lot).
   * - We want the ref to consistently point to the same DOM element and only
   *   ever run once.
   * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
   */
  function getRootElem() {
    if (!rootElemRef.current) {
      // @ts-expect-error
      rootElemRef.current = document.createElement("div");
    }
    return rootElemRef.current;
  }

  return getRootElem();
}

export default usePortal;
