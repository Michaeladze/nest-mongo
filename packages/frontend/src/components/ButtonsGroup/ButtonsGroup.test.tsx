import React from 'react';

import { render } from '@testing-library/react';

import { ButtonsGroup } from './ButtonsGroup';

describe('Test ButtonsGroup component', () => {

  it('should render ButtonsGroup component', () => {
    const { container } = render(<ButtonsGroup>
      <div/>
    </ButtonsGroup>);
  });

});
