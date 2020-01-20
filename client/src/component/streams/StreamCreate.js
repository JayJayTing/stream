import React from 'react';
import { Field, reduxForm, FormSection } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
const renderError = ({ error, touched }) => {
  if (error && touched) {
    return (
      <div>
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      </div>
    );
  }
};
const renderInput = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
    <div>
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
      </div>
      <div>{renderError(meta)}</div>
    </div>
  );
};
function StreamCreate(props) {
  const onSubmit = formValues => {
    props.createStream(formValues);
  };

  return (
    //handleSubmit is passed by redux form
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
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

const formWrapped = reduxForm({ form: 'streamCreate', validate })(StreamCreate);

export default connect(null, { createStream })(formWrapped);
