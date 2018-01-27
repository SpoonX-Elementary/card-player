import React from 'react';
import renderer from 'react-test-renderer';
import Annotation from '../../components/Annotation';

test('Should render Annotation', () => {
  const tree = renderer
    .create(<Annotation hideCard={() => {}} hidden={false} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should not render Annotation', () => {
  const tree = renderer
    .create(<Annotation hideCard={() => {}} hidden />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
