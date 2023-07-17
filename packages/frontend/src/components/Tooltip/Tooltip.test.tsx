import React from 'react';

import { render } from '@testing-library/react';

import { Tooltip } from './Tooltip';

describe('Test Tooltip component', () => {

  it('should render Tooltip component', () => {
    const { container } = render(<Tooltip />);
  });

});
