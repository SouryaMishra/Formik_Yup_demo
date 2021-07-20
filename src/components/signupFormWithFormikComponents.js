import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const SignupFormWithFormikComponents = () => {
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
    <Form>
        <label htmlFor = "email4">Email address : </label>
        <Field id = "email4" className = {formik.touched.email && formik.errors.email ? "error-border" : ""} type = "email" name = "email" placeholder = "abc@xyz.com"/>
        <div className = "error-msg"><ErrorMessage name = "email" /></div>
        <label htmlFor = "firstName4">First name : </label>
        <Field id = "firstName4" className = {formik.touched.firstName && formik.errors.firstName ? "error-border" : ""} type = "text" name = "firstName" placeholder = "John"/>
        <div className = "error-msg"><ErrorMessage name = "firstName" /></div>
        <label htmlFor = "lastName4">Last name : </label>
        <Field id = "lastName4" className = {formik.touched.lastName && formik.errors.lastName ? "error-border" : ""} type = "text" name = "lastName" placeholder = "Doe"/>
        <div className = "error-msg"><ErrorMessage name = "lastName" /></div>
 
        <label htmlFor = "message4">Comments : </label>
        {/*  <textarea className="form-textarea"/></textarea> */}
        <Field id = "message4" name="message" as="textarea" className="form-textarea" />
 
        <label htmlFor = "colors4">Color : </label>
        {/* <select className="my-select"/> */}
        <Field id = "colors4" name="colors" as="select" className="my-select">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </Field>
        <div style = {{marginTop: "1rem"}}>
        <input type = "submit" value = "Submit" />
        <input type = "reset" value = "Reset" className = "btn-reset" onClick = {formik.handleReset}/>
        </div>
    </Form>
    }
    </Formik>
    )
}

export default SignupFormWithFormikComponents;  