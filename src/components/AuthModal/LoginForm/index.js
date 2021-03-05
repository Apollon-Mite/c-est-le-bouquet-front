import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import Radio from 'src/components/Radio';

import './styles.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  selected,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  const options = [
    { text: 'Producteur', value: 'seller' },
    { text: 'Client', value: 'customer' },
  ];

  return (
    <form
      autoComplete="off"
      className="login-form"
      onSubmit={handleSubmit}
    >
      <div className="login-form__radio">
        {options.map((choice) => (
          <Radio
          // important to give selected value in prop
          // so we can dynamically give the right radio button the checked property
            selected
            label={choice.text}
            type="radio"
            name="userType"
            value={choice.value}
            key={choice.value}
            // checks the radio if its value === the value that was sent to the state
            checked={selected === choice.value}
            onChange={changeField}
          />
        ))}
      </div>

      <Field
        label="Email"
        placeholder="ADRESSE EMAIL"
        value={email}
        name="email"
        type="email"
        onChange={changeField}
      />
      <Field
        label="Mot de passe"
        placeholder="MOT DE PASSE"
        value={password}
        name="password"
        type="password"
        onChange={changeField}
      />
      <button
        className="auth__button"
        type="submit"
        aria-label="Se connecter"
      >Se connecter
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default LoginForm;
