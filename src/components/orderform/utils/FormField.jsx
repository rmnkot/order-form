import React from 'react';
import PropTypes from 'prop-types';


const propsAreEqual = (prevProps, nextProps) => (
    prevProps.title === nextProps.title
)

const FormField = React.memo(({ title, handleFormField }) => {

    const placeholderSetter = (arr) => {
        const randomizer = Math.floor(Math.random() * 12);

        return arr[randomizer];
    }
    
    return (
        <div>
            <input
                id={title.id}
                name={title.name}
                type={title.type}
                value={title.value}
                maxLength={title.maxlength}
                disabled={title.disabled}
                autoComplete='off'
                placeholder={placeholderSetter(title.placeholder)}
                onChange={handleFormField}
            />
        </div>
    );
}, propsAreEqual);

FormField.propTypes = {
    title: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        maxlength: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        placeholder: PropTypes.arrayOf(PropTypes.string)
    }),
    handleFormField: PropTypes.func
}

export default FormField;