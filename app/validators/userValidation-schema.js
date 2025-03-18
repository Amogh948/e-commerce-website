const userValidationSchema = {
    name: {
        in: ['body'],
        exists: {
            errorMessage: 'Name field is required'
        },
        notEmpty: {
            errorMessage: 'Name cannot be empty'
        },
        isLength: {
            options: { min: 3, max: 50 },
            errorMessage: 'Name should be between 3 to 50 characters long'
        },
        trim: true
    },
    email: {
        in: ['body'],
        exists: {
            errorMessage: 'Email field is required'
        },
        notEmpty: {
            errorMessage: 'Email cannot be empty'
        },
        isEmail: {
            errorMessage: 'Invalid email format'
        },
        normalizeEmail: true
    },
    password: {
        in: ['body'],
        exists: {
            errorMessage: 'Password field is required'
        },
        notEmpty: {
            errorMessage: 'Password cannot be empty'
        },
        isLength: {
            options: { min: 6 },
            errorMessage: 'Password must be at least 6 characters long'
        }
    },
    phoneNo: {
        in: ['body'],
        exists: {
            errorMessage: 'Phone number is required'
        },
        notEmpty: {
            errorMessage: 'Phone number cannot be empty'
        },
        isNumeric: {
            errorMessage: 'Phone number must be numeric'
        },
        isLength: {
            options: { min: 10, max: 10 },
            errorMessage: 'Phone number must be exactly 10 digits'
        }
    }
};

export default userValidationSchema;
