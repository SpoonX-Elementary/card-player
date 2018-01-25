import React from 'react';
import renderer from 'react-test-renderer';
import CardPlayer from '../../components/CardPlayer';

test('Should render CardPlayer with default props', () => {
  const tree = renderer
    .create(<CardPlayer source="https://www.youtube.com/embed/gLRWloiIC58" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should render CardPlayer with custom props', () => {
  const tree = renderer
    .create(
      <CardPlayer
        source="https://www.youtube.com/embed/gLRWloiIC58"
        style={{ width: 720 }}
        poster="http://images5.fanpop.com/image/photos/30700000/Random-random-30798866-500-325.jpg"
        controls={false}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
