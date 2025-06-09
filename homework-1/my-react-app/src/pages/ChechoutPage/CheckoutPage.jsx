import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./CheckoutPage.scss";
import ProductList from '../../components/ProductList/ProductList';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
    address: '',
    phone: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    age: Yup.number()
      .required("Age is required")
      .typeError('Age must be a number')
      .positive('Age must be positive')
      .integer('Age must be an integer'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^\+?\d{10,15}$/, 'Invalid phone number'),
  });

  const handleSubmit = (values) => {
    console.log('🧾 User information:', values);
    console.log('🛒 Purchased items:', cartItems);

    localStorage.removeItem('cart');
    alert('✅ Order successfully placed!');
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart-msg">🛒 Your cart is empty</p>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched }) => (
            <Form className="checkout-form">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name:</label>
                <Field id="firstName" name="firstName" className="form-input" />
                {touched.firstName && <ErrorMessage name="firstName" component="div" className="form-error" />}
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name:</label>
                <Field id="lastName" name="lastName" className="form-input" />
                {touched.lastName && <ErrorMessage name="lastName" component="div" className="form-error" />}
              </div>

              <div className="form-group">
                <label htmlFor="age" className="form-label">Age:</label>
                <Field id="age" name="age" className="form-input" />
                {touched.age && <ErrorMessage name="age" component="div" className="form-error" />}
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">Shipping Address:</label>
                <Field id="address" name="address" className="form-input" />
                {touched.address && <ErrorMessage name="address" component="div" className="form-error" />}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number:</label>
                <Field id="phone" name="phone" className="form-input" />
                {touched.phone && <ErrorMessage name="phone" component="div" className="form-error" />}
              </div>

              <button type="submit" className="submit-btn">
                ✅ Place Order
              </button>
            </Form>
          )}
        </Formik>
      )}
      <div className='www'></div>
    </div>
  );
};

export default CheckoutPage;
