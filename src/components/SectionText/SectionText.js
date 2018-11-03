import React from 'react';
import styled from 'react-emotion';

import Headline from 'components/Headline';
import Text from 'components/Text';

const StyledSectionText = styled('div')({});

export default function SectionText() {
  return (
    <StyledSectionText>
      <Headline margin="0 0 6px 0">Evo Boutique Fitnessstudios</Headline>
      <Text>
        EVO hebt das Konzept Fitnessstudio auf ein völlig neues Level. Bei uns
        findest du absolute Top-Ausstattung sowie bestens ausgebildete Personal
        Trainer. Unser Boutique Design bietet dir eine Atmosphäre, in der du
        dich wie im eigenen Wohnzimmer fühlst.
      </Text>
      <Text>Alles über EVO Fitness</Text>
    </StyledSectionText>
  );
}
