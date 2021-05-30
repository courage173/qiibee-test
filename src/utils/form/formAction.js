export const validate = (element, formdata = []) => {
    let error = [true, ''];
    if (element.validation.email) {
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Must be a valid email' : ''}`;
        error = !valid ? [valid, message] : error;
    }
    if (element.config.name === 'password_input') {
        const valid = element.value.trim().length >= 6;
        const message = `${!valid ? 'Password must be atleast 6 letters' : ''}`;
        error = !valid ? [valid, message] : error;
    }
    if (element.config.name === 'loyalty') {
        let valid;
        let message;
        if (element.value.trim() === '') {
            valid = false;
            message = `${!valid ? 'This field is required' : ''}`;
        } else if (isNaN(element.value.trim())) {
            valid = false;
            message = `${!valid ? 'This is not a valid number' : ''}`;
        }
        error = !valid ? [valid, message] : error;
    }
    if (element.validation.confirm) {
        const valid =
            element.value.trim() === formdata[element.validation.confirm].value;
        const message = `${!valid ? 'Passwords do not match' : ''}`;
        error = !valid ? [valid, message] : error;
    }

    if (element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required' : ''}`;
        error = !valid ? [valid, message] : error;
    }

    return error;
};

export const update = (element, formdata) => {
    const newFormdata = {
        ...formdata,
    };
    const newElement = {
        ...newFormdata[element.id],
    };

    newElement.checked = element.event.target.checked;
    newElement.value = element.event.target.value;

    if (element.blur) {
        const validData = validate(newElement, formdata);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
    }

    newElement.touched = element.blur;
    newFormdata[element.id] = newElement;
    return newFormdata;
};

export const generateData = formdata => {
    const dataToSubmit = {};
    for (const key in formdata) {
        if (key !== 'confirmPassword') {
            dataToSubmit[key] = formdata[key].value;
        }
    }
    return dataToSubmit;
};

export const isFormValid = formdata => {
    let formIsValid = true;

    for (const key in formdata) {
        if (key === 'image') {
            formIsValid = formdata[key] !== '' && formIsValid;
        }
        if (key === 'email') {
            const valid = /\S+@\S+\.\S+/.test(formdata[key].value);
            formIsValid =
                (formdata[key].valid || formdata[key].value !== '') &&
                valid &&
                formIsValid;
        }
        if (key === 'password') {
            formIsValid =
                (formdata[key].valid || formdata[key].value !== '') &&
                formdata[key].value.length >= 6 &&
                formIsValid;
        }
        formIsValid =
            (formdata[key].valid || formdata[key].value !== '') && formIsValid;
    }
    return formIsValid;
};

export const populateOptionFields = (formdata, arrayData = [], field) => {
    const newArray = [];
    const newFormdata = { ...formdata };
    arrayData.forEach(item => {
        newArray.push({ key: item._id, value: item.day });
    });
    newFormdata[field].config.options = newArray;

    return newFormdata;
};

//export const updateCheckboxFields = (formData, field) => {};

export const resetFields = formdata => {
    const newFormdata = { ...formdata };
    for (const key in newFormdata) {
        if (key === 'images') {
            newFormdata[key].value = [];
        } else {
            newFormdata[key].value = '';
        }

        newFormdata[key].valid = false;
        newFormdata[key].touched = false;
        newFormdata[key].validationMessage = '';
    }

    return newFormdata;
};

export const populateFields = (formData, fields) => {
    for (const key in formData) {
        if (fields[key]) {
            formData[key].value = fields[key];
            formData[key].valid = true;
            formData[key].touched = true;
            formData[key].validationMessage = '';
        }
    }

    return formData;
};

export const emptyFieldError = formdata => {
    const newData = formdata;
    const data = generateData(newData);
    for (const name in data) {
        newData[name].touched = true;
        newData[name].validationMessage = 'invalid';

        if (newData[name].validation.required) {
            const valid = newData[name].value.trim() !== '';
            newData[name].validationMessage = `${
                !valid ? 'This field is required' : ''
            }`;
        }
        if (name === 'password' && newData[name].value.length < 6) {
            newData[name].validationMessage =
                'Password must be atleast 6 letters';
        }
    }
    return newData;
};
