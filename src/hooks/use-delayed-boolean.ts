import { useCallback, useEffect, useState } from 'react';

export const useDelayedBoolean = (delay: number): [boolean, { reset: () => void }] => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), delay);
  }, [delay]);

  const reset = useCallback(() => {
    setShow(false);
    setTimeout(() => setShow(true), delay);
  }, []);

  return [show, { reset }];
};
