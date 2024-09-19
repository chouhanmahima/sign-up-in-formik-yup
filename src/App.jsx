import { useFormik } from 'formik';
import * as yup from "yup";
import './App.css'

function App() {
  const formik = useFormik({
    initialValues : {
      name : "",
      email : "",
      password : "",
      confirmPassword : "",
    },

    // Schema
    validationSchema : yup.object({
      name : yup.string()
        .min(3, "Must be at least 3 Characters !")
        .required("Please enter your name !"),

      email : yup.string()
        .email("Invalid Email Address !")
        .required("Email is Required !"),

      password : yup.string()
        .oneOf(["mahiME@201"], "Incorrect Password !")
        .required("Password must be exactly mahiME@201 is required."),

      confirmPassword : yup.string()
        .oneOf(["mahiME@201"], "Confirm Password is Incorrect !")
        .required("Confirm Password is Required !"),
    }),

    // Form on Submit
    onSubmit : (values, action) => {
      // console.log(values);
      alert("Sign-Up Successful !")
      alert(`Welcome ! ${values.name}`);

      action.resetForm();       // Reset Form
    }

  });

  return (
    <>
      <div className="container">
        
        <div className='left-side'>
          <h1 className='title'>Welcome!</h1>
        <form onSubmit={formik.handleSubmit}>

         
            {/* Name */}
            <section>
              <label for="name" className="input-label">Name</label>
              <input
                type='text'
                name='name'
                placeholder='Name'
                onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              />

{formik.touched.name && formik.errors.name ? 
              (
                <p className='form-errors'>{formik.errors.name}</p>
              ) : null
            }

            </section>
            {/* Email */}
            <section>
              <label for="email" className="input-label">Email</label>
              <input
                type='email'
                name='email'
                placeholder='Email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

{formik.touched.email && formik.errors.email ? 
              (
                <p className='form-errors'>{formik.errors.email}</p>
              ) : null
            }

            </section>
            {/* Password */}
            <section>
              <label for="password" className="input-label">Password</label>
              <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              />

{formik.touched.password && formik.errors.password ? 
              (
                <p className='form-errors'>{formik.errors.password}</p>
              ) : null
            }

            </section>
            {/* Confirm Password  */}
            <section>
              <label for="confirm_password" className="input-label">Confirm Password</label>
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />

{formik.touched.confirmPassword && formik.errors.confirmPassword ? 
              (
                <p className='form-errors'>{formik.errors.confirmPassword}</p>
              ) : null
            }

            </section>
            {/* Submit Button  */}
            <div className='submit-btn'>
              <button type='submit' className='input-btn' disabled={!(formik.isValid && formik.dirty)}>
                Sign Up
              </button>
            </div>
        
        </form>

        </div>

        <div className='right-side'>
          <img src='https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' alt='img'/>
        </div>

      </div>
    </>
  )
}

export default App
