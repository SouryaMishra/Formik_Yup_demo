import {useFormik} from "formik";
import * as Yup from "yup";

const SignupFormWithSchema = () => {

    const formik = useFormik({
        initialValues: {
            email : "",
            firstName: "",
            lastName: ""
        },
        onSubmit: (values) => alert(JSON.stringify(values), null , 2),
        validationSchema: Yup.object({
            email:Yup.string().email("Invalid email address").required("Email is required"),
            firstName:Yup.string().max(30, "First name must be 30 characters or less").required("First name is required"),
            lastName:Yup.string().max(30, "Last name must be 30 characters or less").required("Last name is required")
        }),       
    })
    
    return (
        <form onSubmit = {formik.handleSubmit}>
            <label htmlFor = "email2">Email address : </label>
            <input id = "email2" className = {formik.touched.email && formik.errors.email ? "error-border" : ""} type = "email" name = "email" value = {formik.values.email} onChange = {formik.handleChange} onBlur = {formik.handleBlur}/>
            {formik.touched.email && formik.errors.email && <div className = "error-msg">{formik.errors.email}</div>}
            <label htmlFor = "firstName2">First name : </label>
            <input id = "firstName2" className = {formik.touched.firstName && formik.errors.firstName ? "error-border" : ""} type = "text" name = "firstName" {...formik.getFieldProps("firstName")}/>
            {formik.touched.firstName && formik.errors.firstName && <div className = "error-msg">{formik.errors.firstName}</div>}
            <label htmlFor = "lastName2">Last name : </label>
            <input id = "lastName2" className = {formik.touched.lastName && formik.errors.lastName ? "error-border" : ""} type = "text" name = "lastName" {...formik.getFieldProps("lastName")}/>
            {formik.touched.lastName && formik.errors.lastName && <div className = "error-msg">{formik.errors.lastName}</div>}
            <div style = {{marginTop: "1rem"}}>
            <input type = "submit" value = "Submit" />
            <input type = "reset" value = "Reset" className = "btn-reset" onClick = {formik.handleReset}/>
            </div>
        </form>
    )
}

export default SignupFormWithSchema;  