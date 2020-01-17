import React from 'react';
import { Field, reduxForm, FormSection } from 'redux-form';

const renderInput = ({ input, label, meta }) => {
  console.log(meta);
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} />
      <div>{meta.error}</div>
    </div>
  );
};
function StreamCreate(props) {
  const onSubmit = formValues => {
    console.log('form values', formValues);
  };

  return (
    //handleSubmit is passed by redux form
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form">
      <Field name="title" component={renderInput} label="Enter Title"></Field>
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"></Field>
      <button className="ui button primary"> Submit</button>
    </form>
  );
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'you must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'you must enter a description';
  }

  return errors;
};

export default reduxForm({ form: 'streamCreate', validate })(StreamCreate);
