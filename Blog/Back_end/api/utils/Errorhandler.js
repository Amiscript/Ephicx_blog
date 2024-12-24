
const ErrorHandler  =  (statusCode, message) => {
    const error = new Error(message); // Create a new error object with the provided message
    error.status = statusCode; // Set the status code of the error
    error.message = message; // Set the message of the error
    return error; // Return the error object
}

export default ErrorHandler;