import React from 'react';

import { render } from '@testing-library/react';

import { Select } from './Select';

describe('Test Select component', () => {

  it('should render Select component', () => {
    const { container } = render(<Select />);
  });

});
