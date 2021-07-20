import {useEffect} from "react";
import './index.css';
import SignupForm from "./components/signupForm";
import SignupFormWithSchema from './components/signupFormWithSchema';
import SignupFormRenderProps from './components/signupFormRenderProps';
import SignupFormWithFormikComponents from './components/signupFormWithFormikComponents';
import SignupFormWithCustomComponents from './components/signupFormWithCustomComponents';

function App() {

  useEffect(() => {
    document.querySelector("#form1")?.click();
  }, [])
  return (
    <div className="App">

      <nav>
        <ul>
          <li><a href = "#form" id = "form1">Form 1</a></li>
          <li><a href = "#form-schema">Form 2</a></li>
          <li><a href = "#form-render-props">Form 3</a></li>
          <li><a href = "#form-formik-components">Form 4</a></li>
          <li><a href = "#form-custom-components">Form 5</a></li>
        </ul>
      </nav>

      <div className = "form-container">
        <section id = "form">
          <h4>Form</h4>
          <SignupForm/>
        </section>

        <section id = "form-schema">
          <h4>Form with Yup Schema</h4>
          <SignupFormWithSchema/>
        </section>

        <section id = "form-render-props">
          <h4>Form with Render props</h4>
          <SignupFormRenderProps/>
        </section>

        <section id = "form-formik-components">
          <h4>Form with Formik Components</h4>
          <SignupFormWithFormikComponents/>
        </section>

        <section id = "form-custom-components">
          <h4>Form with Custom Components</h4>
          <SignupFormWithCustomComponents/>
        </section>
      </div>

    </div>
  );
}

export default App;
