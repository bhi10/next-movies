import { Image as ImageInterface } from '@app/types';
import { Carousel } from '@mantine/carousel';
import { Image, Title } from '@mantine/core';
import { getImgPath } from '@utils/common-utils';

export interface ProfilesCarouselProps {
  profiles: ImageInterface[];
}

function ProfilesCarousel({ profiles }: ProfilesCarouselProps) {
  if (!profiles) return '';

  const slides = profiles.map((profile, index) => {
    const imagePath = getImgPath(profile.file_path);
    return (
      <Carousel.Slide key={index}>
        <Image src={imagePath}></Image>
      </Carousel.Slide>
    );
  });
  return (
    <>
      <Title order={4} mt="sm" mb="sm">
        Profile
      </Title>
      <Carousel slideSize={{ base: '100%', sm: '25%', md: '12.5%' }} slideGap={{ base: 0, sm: 'md' }} align="start" dragFree>
        {slides}
      </Carousel>
    </>
  );
}

export default ProfilesCarousel;
