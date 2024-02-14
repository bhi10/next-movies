'use client';

import { Flex } from '@mantine/core';
import GenreChip from './GenreChip';

interface Genre {
  id: number;
  name: string;
}

interface GenreChipListProps {
  genres: Genre[];
}

interface GenreColorMap {
  [id: number]: string;
}

const genreColorMap: GenreColorMap = {
  28: '#e74c3c', // Action
  12: '#3498db', // Adventure
  16: '#2ecc71', // Animation
  35: '#f39c12', // Comedy
  80: '#34495e', // Crime
  99: '#95a5a6', // Documentary
  18: '#e67e22', // Drama
  10751: '#1abc9c', // Family
  14: '#9b59b6', // Fantasy
  36: '#8e44ad', // History
  27: '#c0392b', // Horror
  10402: '#d35400', // Music
  9648: '#2980b9', // Mystery
  10749: '#e74c3c', // Romance
  878: '#27ae60', // Science Fiction
  10770: '#f39c12', // TV Movie
  53: '#c0392b', // Thriller
  10752: '#8e44ad', // War
  37: '#d35400', // Western

  10759: '#e74c3c', // Action & Adventure
  10762: '#2ecc71', // Kids
  10763: '#95a5a6', // News
  10764: '#f39c12', // Reality
  10765: '#27ae60', // Sci-Fi & Fantasy
  10766: '#e67e22', // Soap
  10767: '#3498db', // Talk
  10768: '#8e44ad', // War & Politics
};

export default function GenreChipList({ genres = [] }: GenreChipListProps) {
  const list = genres.map((genre: Genre) => {
    const color = genreColorMap[genre.id];
    return <GenreChip id={genre.id} name={genre.name} color={color}></GenreChip>;
  });

  return (
    <Flex style={{ padding: '8px 0' }} gap="xs">
      {list}
    </Flex>
  );
}
