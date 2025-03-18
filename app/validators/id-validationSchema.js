const idValidationSchema = {
    id: {
        in: ['params'],
        isMongoId: {
            errorMessage: 'Id is invalid'
        }
    }
}

export default idValidationSchema