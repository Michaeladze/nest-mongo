import React from 'react';

import { render } from '@testing-library/react';

import { Avatar } from './Avatar';

describe('Test Avatar component', () => {

  it('should render Avatar component', () => {
    const { container } = render(<Avatar text='Michael Kutateladze' />);
  });

});
