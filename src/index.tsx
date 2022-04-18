import { useEffect, useRef } from 'react';

type Target = EventTarget | Window | null;

const useEventListener = <T extends Target, E extends Event>(
  type: string,
  listener: (ev: E) => void,
  element?: T
): void => {
  const listenerRef = useRef(listener);

  useEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    if (element) {
      const handler = (e: E) => listenerRef.current(e);
      element.addEventListener(type, handler as (evt: Event) => void);
      return () => {
        element.removeEventListener(type, handler as (evt: Event) => void);
      };
    }
  }, [type, element]);
};

export default useEventListener;
