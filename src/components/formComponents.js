import { useField } from 'formik';

export const TextInput = ({children, ...props}) => {
    const [field, meta] = useField(props);
    return  (
        <>
        <label htmlFor = {props.id}>{props.label}</label>
        <input {...props} {...field} type = "text" {...props}/>
        {meta.touched && meta.error && (
         <div className="error-msg">{meta.error}</div>)}
        </>
    )
}

export const Checkbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: "checkbox"});
    return (
        <>
            <label htmlFor = {props.id}>{props.label}</label>    
            <input {...props} {...field} type = "checkbox" {...props}/>
            {children}
            {meta.touched && meta.error && (
         <div className="error-msg">{meta.error}</div>)}
        </>
    )
}

export const Select = ({children, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
        <label htmlFor = {props.id}>{props.label}</label>
        <select {...props} {...field}>
            {children}
        </select>
        {meta.touched && meta.error && (
         <div className="error-msg">{meta.error}</div>)}

        </>
    )
}