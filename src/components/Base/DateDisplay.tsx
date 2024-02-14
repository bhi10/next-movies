import { MantineSize, Text } from '@mantine/core';
import dayjs from 'dayjs';

type Dates =
  | 'DD-MM-YYYY'
  | 'DD/MM/YYYY'
  | 'MM/DD/YYYY'
  | 'MM-DD-YYYY'
  | 'YYYY/MM/DD'
  | 'YYYY-MM-DD'
  | 'DD MMM YYYY'
  | 'MMM DD, YYYY'
  | 'DD MMM, YYYY';

interface DateDisplayProps {
  date: string;
  dateRepresentationFormat?: Dates;
  showCurrentYear?: boolean;
  size?: MantineSize;
  fw?: number;
  fs?: string;
  td?: string;
  c?: string;
  span?: boolean;
}

const currentYearFormatMap = {
  'DD-MM-YYYY': 'DD-MM',
  'DD/MM/YYYY': 'DD/MM',
  'MM/DD/YYYY': 'MM/DD',
  'MM-DD-YYYY': 'MM-DD',
  'YYYY/MM/DD': 'MM/DD',
  'YYYY-MM-DD': 'MM-DD',
  'DD MMM YYYY': 'DD MMM',
  'MMM DD, YYYY': 'MMM DD',
  'DD MMM, YYYY': 'DD MMM',
};

export default function DateDisplay({
  date,
  dateRepresentationFormat = 'DD MMM, YYYY',
  showCurrentYear = false,
  size = 'md',
  fw,
  fs,
  td,
  c,
  span = true,
}: DateDisplayProps) {
  const currentDate = dayjs();
  const inputDate = dayjs(date, 'YYYY-MM-DD');

  let dateFormat: string = dateRepresentationFormat;

  if (!showCurrentYear && inputDate.isSame(currentDate, 'year')) {
    dateFormat = currentYearFormatMap[dateRepresentationFormat];
  }

  return (
    <Text size={size} fw={fw} fs={fs} td={td} c={c} span={span}>
      {inputDate.format(dateFormat)}
    </Text>
  );
}
