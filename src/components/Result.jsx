// eslint-disable-next-line react/prop-types
const Result = ({ name, email, password, confirmPassword }) => {
    return (
        <div>
            Result:
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>ConfirmPassword: {confirmPassword}</p>
        </div>
    );
};

export default Result;
