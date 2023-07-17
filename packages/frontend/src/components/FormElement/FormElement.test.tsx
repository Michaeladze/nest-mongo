import React from 'react';

import { render } from '@testing-library/react';

import { FormElement } from './FormElement';

describe('Test FormElement component', () => {

  it('should render FormElement component', () => {
    const { container } = render(<FormElement />);
  });

});
