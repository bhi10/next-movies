import { ExternalIds } from '@app/types';
import { Divider, Flex, UnstyledButton, rem } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandX, IconBrandYoutube, IconLink } from '@tabler/icons-react';
import { faceBookLink, getSocialMediaCount, instagramLink, tiktokLink, twitterLink, youtubeLink } from '@utils/common-utils';
import Link from 'next/link';
import classes from './PeopleExternalLinks.module.css';

export interface PeopleExternalLinksProps {
  external: ExternalIds;
  homepage?: string | undefined | null;
}

function PeopleExternalLinks({ external, homepage }: PeopleExternalLinksProps) {
  const count = getSocialMediaCount(external);

  return (
    <Flex gap={4} align="center">
      {external.facebook_id && (
        <Link target="_blank" href={faceBookLink(external.facebook_id)}>
          <UnstyledButton className={classes.link}>
            <IconBrandFacebook style={{ width: rem(25), height: rem(25), color: 'dark-0' }} stroke={1.75} />
          </UnstyledButton>
        </Link>
      )}

      {external.instagram_id && (
        <Link target="_blank" href={instagramLink(external.instagram_id)}>
          <UnstyledButton className={classes.link}>
            <IconBrandInstagram style={{ width: rem(25), height: rem(25), color: 'dark-0' }} stroke={1.75} />
          </UnstyledButton>
        </Link>
      )}

      {external.twitter_id && (
        <Link target="_blank" href={twitterLink(external.twitter_id)}>
          <UnstyledButton className={classes.link}>
            <IconBrandX style={{ width: rem(25), height: rem(25), color: 'dark-0' }} stroke={1.75} />
          </UnstyledButton>
        </Link>
      )}

      {external.tiktok_id && (
        <Link target="_blank" href={tiktokLink(external.tiktok_id)}>
          <UnstyledButton className={classes.link}>
            <IconBrandTiktok style={{ width: rem(25), height: rem(25), color: 'dark-0' }} stroke={1.75} />
          </UnstyledButton>
        </Link>
      )}

      {external.youtube_id && (
        <Link target="_blank" href={youtubeLink(external.youtube_id)}>
          <UnstyledButton className={classes.link}>
            <IconBrandYoutube style={{ width: rem(25), height: rem(25), color: 'dark-0' }} stroke={1.75} />
          </UnstyledButton>
        </Link>
      )}

      {homepage && count ? <Divider orientation="vertical" ml={4} mr={4}></Divider> : ''}

      {homepage && (
        <Link target="_blank" href={homepage}>
          <UnstyledButton className={classes.link}>
            <IconLink style={{ width: rem(25), height: rem(25) }} stroke={1.75} />
          </UnstyledButton>
        </Link>
      )}
    </Flex>
  );
}

export default PeopleExternalLinks;
