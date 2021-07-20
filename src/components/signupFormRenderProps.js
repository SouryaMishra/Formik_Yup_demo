import {Formik} from "formik";
import * as Yup from "yup";

const SignupFormRenderProps = () => {
    
    return (
        <Formik 
            initialValues= {{
                email : "",
                firstName: "",
                lastName: ""
            }}
            onSubmit= {(values) => alert(JSON.stringify(values), null , 2)}
            validationSchema=  {Yup.object({
                email:Yup.string().email("Invalid email address").required("Email is required"),
                firstName:Yup.string().max(30, "First name must be 30 characters or less").required("First name is required"),
                lastName:Yup.string().max(30, "Last name must be 30 characters or less").required("Last name is required")
            })}      
        >
        {formik => 
        <form onSubmit = {formik.handleSubmit}>
            <label htmlFor = "email3">Email address : </label>
            <input id = "email3" className = {formik.touched.email && formik.errors.email ? "error-border" : ""} type = "email" name = "email" {...formik.getFieldProps("email")}/>
            {formik.touched.email && formik.errors.email && <div className = "error-msg">{formik.errors.email}</div>}
            <label htmlFor = "firstName3">First name : </label>
            <input id = "firstName3" className = {formik.touched.firstName && formik.errors.firstName ? "error-border" : ""} type = "text" name = "firstName" {...formik.getFieldProps("firstName")}/>
            {formik.touched.firstName && formik.errors.firstName && <div className = "error-msg">{formik.errors.firstName}</div>}
            <label htmlFor = "lastName3">Last name : </label>
            <input id = "lastName3" className = {formik.touched.lastName && formik.errors.lastName ? "error-border" : ""} type = "text" name = "lastName" {...formik.getFieldProps("lastName")}/>
            {formik.touched.lastName && formik.errors.lastName && <div className = "error-msg">{formik.errors.lastName}</div>}
            <div style = {{marginTop: "1rem"}}>
            <input type = "submit" value = "Submit" />
            <input type = "reset" value = "Reset" className = "btn-reset" onClick = {formik.handleReset}/>
            </div>
        </form>
        }
        </Formik>
    )
}

export default SignupFormRenderProps;  