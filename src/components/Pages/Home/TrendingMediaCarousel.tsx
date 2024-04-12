'use client';

import { getTrending, trendingList } from '@lib/features/Home/trendingSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect } from 'react';
import MediaCarousel from './MediaCarousel';

function TrendingMediaCarousel() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTrending());
  }, []);

  const trending = useAppSelector(trendingList);
  return (
    <>
      <MediaCarousel trending={trending}></MediaCarousel>
    </>
  );
}

export default TrendingMediaCarousel;
