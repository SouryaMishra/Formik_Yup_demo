import {useFormik} from "formik";

const SignupForm = () => {

    const formik = useFormik({
        initialValues: {
            email : "",
            firstName: "",
            lastName: ""
        },
        onSubmit: (values) => alert(JSON.stringify(values), null , 2),
        validate: values => {
            const errors = {};
            const {email, firstName, lastName} = values;
            if(!email) errors.email = "Email is required"
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) errors.email = 'Invalid email address'
            if(!firstName) errors.firstName = "First name is required"
            else if(firstName.length > 30) errors.firstName = "First name must be 30 characters or less"
            if(!lastName) errors.lastName = "Last name is required"
            else if(lastName.length > 30) errors.lastName = "Last name must be 30 characters or less"
            return errors;
        },
       
    })
    
    return (
        <form onSubmit = {formik.handleSubmit}>
            <label htmlFor = "email1">Email address : </label>
            <input id = "email1" type = "email" name = "email" value = {formik.values.email} onChange = {formik.handleChange} onBlur = {formik.handleBlur}/>
            {formik.touched.email && formik.errors.email && <div className = "error-msg">{formik.errors.email}</div>}
            <label htmlFor = "firstName1">First name : </label>
            <input id = "firstName1" type = "text" name = "firstName" value = {formik.values.firstName} onChange = {formik.handleChange} onBlur = {formik.handleBlur}/>
            {formik.touched.firstName && formik.errors.firstName && <div className = "error-msg">{formik.errors.firstName}</div>}
            <label htmlFor = "lastName1">Last name : </label>
            <input id = "lastName1" type = "text" name = "lastName" value = {formik.values.lastName} onChange = {formik.handleChange} onBlur = {formik.handleBlur}/>
            {formik.touched.lastName && formik.errors.lastName && <div className = "error-msg">{formik.errors.lastName}</div>}
            <div style = {{marginTop: "1rem"}}>
            <input type = "submit" value = "Submit" />
            <input type = "reset" value = "Reset" className = "btn-reset" onClick = {formik.handleReset}/>
            </div>
        </form>
    )
}

export default SignupForm;  