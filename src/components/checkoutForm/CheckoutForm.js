import {useSelector} from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

import "./checkoutForm.scss"

// удалять из массива карзины все элементы 

const CheckoutForm = () => {

  const {sumProducts, addedToCart} = useSelector((state) => state.products);
  const navigate = useNavigate();

  const dataFromTrash = addedToCart.map((item) => ({
    title: item.title,
    count: item.count
  }));

  const renderProductList = (arr) => {
    if (arr.length === 0) {
      return (
              <h5 className="text-center mt-5">Загрузка</h5>
      )
    }

    return arr.map(({id, price, title, count}) => {

      let croppedName = title;

      if (croppedName.length > 25) {
        croppedName = croppedName.slice(0, 25);
        croppedName = croppedName + '...'
      } 
      
      return (
        <div className="order-details_product" key={id}>
          <p>{croppedName}</p>
          <p>{count * price}$</p>
        </div>
      )
    })
  }

  const elements = renderProductList(addedToCart);

  const SignupSchema = Yup.object({
    name: Yup.string()
            .min(2, 'Минимум 2 символа!')
            .required('Обязательное поле!'),
    email: Yup.string()
            .email('Неправильный email адрес!')
            .required('Обязательное поле!'),
    telephone: Yup.number()
            .min(9, 'Не менее 9')
            .required('Обязательное поле!'),
    country: Yup.string()
            .required('Обязательное поле!'),
    city: Yup.string()
            .required('Обязательное поле!'),
    street: Yup.string()
            .required('Обязательное поле!'),
    house: Yup.string()
            .required('Обязательное поле!'),
    terms: Yup.boolean()
            .required('Выберите тип оплаты!')
            .oneOf([true], 'Выберите тип оплаты!')
  })

  return (
      <Formik
        initialValues={{
            name: '',
            email: '',
            telephone: '',
            country: '',
            city: '',
            street: '',
            house: '',
            flat: '',
            text: '',
            terms: false,
            total: sumProducts,
            products: dataFromTrash,
        }}

        validationSchema={SignupSchema}

        onSubmit={values => {
          console.log(JSON.stringify(values, null, 2));
          navigate("/Success");
        }}
      >
        <Form className="form">
          <div className="form_body">
            <div className="form_inputs">

              <h5 className="form_heading">Данные покупателя</h5>
              <div>
                <Field className="form_inputs_input" id="name" name="name" type="text" placeholder="Имя"/>
                <ErrorMessage className="error" name='name' component="div"/>
              </div>
              <div>
                <Field className="form_inputs_input" id="email" name="email" type="email" placeholder="E-mail"/>
                <ErrorMessage className="error" name='email' component="div"/>
              </div>
              <div>
                <Field className="form_inputs_input" id="telephone" name="telephone" type="text" placeholder="Телефон"/>
                <ErrorMessage className="error" name='telephone' component="div"/>
              </div>

              <h5 className="form_heading">Адрес получателя</h5>
              <div>
                <Field className="form_inputs_input" id="country" name="country" type="text" placeholder="Страна"/>
                <ErrorMessage className="error" name='country' component="div"/>
              </div>
              <div>
                <Field className="form_inputs_input" id="city" name="city" type="text" placeholder="Город"/>
                <ErrorMessage className="error" name='city' component="div"/>
              </div>
              <div>
                <Field className="form_inputs_input" id="street" name="street" type="text" placeholder="Улица"/>
                <ErrorMessage className="error" name='street' component="div"/>
              </div>
              <div>
                <Field className="form_inputs_input" id="house" name="house" type="text" placeholder="Дом"/>
                <ErrorMessage className="error" name='house' component="div"/>
              </div>
              <div>
                <Field className="form_inputs_input" id="flat" name="flat" type="text" placeholder="Квартира"/>
                <ErrorMessage className="error" name='flat' component="div"/>
              </div>

              <h5 className="form_heading">Комментарии</h5>
              <div>
                <Field className="form_inputs_textarea" id="text" name="text" as="textarea" placeholder="Ваш комментарий"/>
                <ErrorMessage className="error" name='text' component="div"/>
              </div>
            </div>

            <div className="form_order">
              <h5 className="form_heading">Ваш заказ</h5>
              <div className="order-details">
                <div className="order-details_heading">
                  <p>Товар</p>
                  <p>Всего</p>
                </div>
                {elements}
                <div className="order-details_result">
                  <p>Итого</p>
                  <p>{Math.round((sumProducts) * 100) / 100}$</p>
                </div>
              </div>
              
              <h5 className="form_heading">Способы оплаты</h5>
              <div className="form_checkbox_body">
                <label className="checkbox">
                    <Field className="form_checkbox" name="terms" type="checkbox"/>
                    Оплата наличными
                </label>
                <ErrorMessage className="error" name='terms' component="div"/>
              </div>
              <button type="submit">Разместить заказ</button>
            </div>
          </div>
        </Form>
      </Formik>
  );
};

export default CheckoutForm;