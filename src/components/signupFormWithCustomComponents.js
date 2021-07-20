import {Form, Formik} from "formik";
import {TextInput, Checkbox, Select} from "./formComponents";
import * as Yup from "yup";

const SignupFormWithCustomComponents = () => {
    return (
        <Formik 
        initialValues= {{
            email : "",
            firstName: "",
            lastName: "",
            check: false,
            color: ""
        }}
        onSubmit= {(values) => alert(JSON.stringify(values), null , 2)}
        validationSchema=  {Yup.object({
            email:Yup.string().email("Invalid email address").required("Email is required"),
            firstName:Yup.string().max(30, "First name must be 30 characters or less").required("First name is required"),
            lastName:Yup.string().max(30, "Last name must be 30 characters or less").required("Last name is required"),
            check:Yup.boolean().required("Required").oneOf([true], "You must accept the EULA"),
            color:Yup.string().oneOf(["red","blue","green","yellow"], "Invalid color").required("Please select a color")
        })}      
    >
    {formik => 
    <Form>
        <TextInput label = "Email" id = "email5" name = "email" placeholder = "abc@xyz.com"/>
        <TextInput label = "First Name" id = "firstName5" name = "firstName" placeholder = "Jane"/>
        <TextInput label = "Last Name" id = "lastName5" name = "lastName" placeholder = "Doe"/>
        <Checkbox label = "Accept" id = "check5" name = "check">I accept the terms and conditions of End User License Agreement</Checkbox>
        <Select label = "Select" id = "select5" name = "color">
             <option value="">Select a color</option>
             <option value="red">Red</option>
             <option value="blue">Blue</option>
             <option value="green">Green</option>
             <option value="yellow">Yellow</option>
        </Select>
        <div style = {{marginTop: "1rem"}}>
        <input type = "submit" value = "Submit" />
        <input type = "reset" value = "Reset" className = "btn-reset" onClick = {formik.handleReset}/>
        </div>
    </Form>
    }
    </Formik>
    )
}

export default SignupFormWithCustomComponents;  