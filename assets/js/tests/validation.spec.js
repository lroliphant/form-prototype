import validateForm from '../validation.js';

describe('form validation', () => {
  const fixture = `
    <form id="form-element" action="">
      <input id="required-input" type="text" data-required>
      <input id="optional-input" type="">
    </form>
  `;

  beforeEach(() => {
    document.body.innerHTML = fixture;

    validateForm();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe ('on submit', () => {
    it('should hide error messaging by default', () => {

    });

    it('should check that all fields are valid', () => {

    });
  });
});
