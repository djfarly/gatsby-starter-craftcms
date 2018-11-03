import React from 'react';
import styled from 'react-emotion';

import Null from 'components/Null';
import SectionText from 'components/SectionText';
import SectionHeadlines from 'components/SectionHeadlines';
import SectionCards from 'components/SectionCards';
import SectionCardsCategory from 'components/SectionCardsCategory';

import media from 'utils/mediaqueries';

const StyledComponent = styled('div')({
  [media('tablet')]: {
    height: '80vh',
  },
});

export default function NavigationPrimarySections(props) {
  const { data } = props;
  const { navigationTeaser } = data;

  const sectionType = {
    empty: Null,
    text: SectionText,
    headlines: SectionHeadlines,
    cards: SectionCards,
    cardscategory: SectionCardsCategory,
  };

  const Component = sectionType[navigationTeaser];

  return (
    <StyledComponent>
      <Component />
    </StyledComponent>
  );
}
