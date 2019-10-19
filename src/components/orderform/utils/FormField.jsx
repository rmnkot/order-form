import React from 'react';

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

export default FormField;