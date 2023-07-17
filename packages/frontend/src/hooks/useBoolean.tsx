import { useCallback, useState } from 'react';

export const useBoolean = (defaultValue: boolean) => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const setTrue = useCallback(() => {
    setValue(true);
  }, [setValue]);

  const setFalse = useCallback(() => {
    setValue(false);
  }, [setValue]);

  const toggle = useCallback(() => {
    setValue((value: boolean) => !value);
  }, [setValue]);

  return [
    value,
    {
      setTrue,
      setFalse,
      toggle
    }
  ];
};
