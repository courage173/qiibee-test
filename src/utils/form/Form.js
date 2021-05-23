import React from 'react';
import PropTypes from 'prop-types';
import formStyles from './form.module.css';

function FormField({
    formdata,
    change,
    id,
    altStyle,
    styles,
    inputClass,
    altFieldSet,
}) {
    const showError = () => {
        let errorMessage = null;

        if (formdata.validation && !formdata.valid) {
            errorMessage = (
                <div className={formStyles.errorMessage}>
                    {formdata.validationMessage}
                </div>
            );
        }

        return errorMessage;
    };

    const renderForm = () => {
        let template = null;
        switch (formdata.element) {
            case 'fieldset':
                template = (
                    <div>
                        <fieldset
                            className={`${formStyles.fieldSetWrap} ${altFieldSet}`}
                        >
                            <legend className={formStyles.legend}>
                                {formdata.config.label}
                            </legend>
                            <input
                                {...formdata.config}
                                value={formdata.value}
                                style={{
                                    boxShadow: '#fff 0px 0px 0px 9999px inset',
                                    ...styles,
                                }}
                                onBlur={event =>
                                    change({ event, id, blur: true })
                                }
                                onChange={event => change({ event, id })}
                                id={id}
                                className={`${inputClass} ${formStyles.defaultForm}`}
                            />
                            {showError()}
                        </fieldset>
                    </div>
                );
                break;
            case 'checkbox':
                template = (
                    <div>
                        <input
                            type="checkbox"
                            onChange={event => change({ event, id })}
                            {...formdata.config}
                            value={formdata.value}
                            id={id}
                            className={`${inputClass} ${formStyles.defaultCheckForm}`}
                        />
                    </div>
                );
                break;
            case 'select':
                template = (
                    <div className={altStyle && altStyle}>
                        {formdata.showlabel ? (
                            <div className="option_label">
                                {formdata.config.label}
                            </div>
                        ) : null}
                        <select
                            value={formdata.value}
                            onBlur={event => change({ event, id, blur: true })}
                            onChange={event => change({ event, id })}
                            className={inputClass}
                        >
                            <option value="">Select one</option>
                            {formdata.config.options.map(item => (
                                <option key={item.key} value={item.value}>
                                    {item.value}
                                </option>
                            ))}
                        </select>
                        {showError()}
                    </div>
                );
                break;
            default:
                template = '';
                break;
        }
        return template;
    };

    return <>{renderForm()}</>;
}

FormField.displayName = 'FormField';

FormField.propTypes = {
    formdata: PropTypes.shape({
        config: PropTypes.object,
        validation: PropTypes.object,
        valid: PropTypes.bool,
        validationMessage: PropTypes.string,
        element: PropTypes.string,
        value: PropTypes.string,
        showlabel: PropTypes.bool,
    }),
    change: PropTypes.func,
    id: PropTypes.string,
    altStyle: PropTypes.object,
    styles: PropTypes.object,
    inputClass: PropTypes.string,
    altFieldSet: PropTypes.string,
};
export default FormField;
