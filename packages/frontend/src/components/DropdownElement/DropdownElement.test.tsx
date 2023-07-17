import React from 'react';

import { render } from '@testing-library/react';

import { DropdownElement } from './DropdownElement';

describe('Test DropdownElement component', () => {

  it('should render DropdownElement component', () => {
    const { container } = render(<DropdownElement />);
  });

});
