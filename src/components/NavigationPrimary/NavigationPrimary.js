import React from 'react';
import styled from 'react-emotion';

import NavigationPrimaryItem from 'components/NavigationPrimaryItem';

// import config from '~/site.config.js';
import media from 'utils/mediaqueries';

const NavigationWrap = styled('div')({
  height: 'auto',
  [media('tabletFluid')]: {
    position: 'relative',
    height: '80vh',
    width: '100%',
  },
});

const NavigationPositioner = styled('div')({
  [media('tabletFluid')]: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '200%',
    height: '100%',
    overflow: 'hidden',
  },
});

const NavigationHolder = styled('div')(
  {
    width: '100%',
    height: 'auto',
  },
  props => ({
    // [media('tablet')]: {
    //   width: wrapSizes.tablet,
    // },
    [media('tabletFluid')]: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: '202px', // this needs to be a calculation
      height: '100%',
    },
    [media('laptop')]: {
      width: '282px', // this needs to be a calculation
    },
    [media('desktop')]: {
      width: '376px', // this needs to be a calculation
    },
  }),
);

// console.log(wrapSizes.laptop - (wrapSizes.laptop / 3) * 2 - 56); // should look something like this

export default function NavigationPrimary(props) {
  const { data, currentId } = props;

  return (
    <NavigationWrap>
      <NavigationPositioner>
        <NavigationHolder>
          {data.map(item => (
            <NavigationPrimaryItem
              key={item.id + Math.random()}
              data={item}
              isActive={currentId === item.id}
              show={item.navigationEntry[0]} // Only if navigationEntry is set within craft cms
            />
          ))}
        </NavigationHolder>
      </NavigationPositioner>
    </NavigationWrap>
  );
}
