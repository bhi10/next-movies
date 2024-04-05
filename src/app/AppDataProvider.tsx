'use client';

import { getConfigDetail } from '@lib/features/Config/configSlice';
import { useAppDispatch } from '@lib/hooks';
import { useEffect } from 'react';

function AppDataProvider() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getConfigDetail());
  }, []);
  return '';
}

export default AppDataProvider;
