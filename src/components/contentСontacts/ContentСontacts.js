import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link} from "react-router-dom";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import "./contentСontacts.scss";

const ContentСontacts = () => {

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
    text: Yup.string()
            .min(10, 'Не менее 10 символов')
            .required('Обязательное поле!'),
  })

  return (
    <div  className="contentСontacts">
      <h1 className="contentСontacts_heading">Контакты</h1>
      <p className="contentСontacts_navigation">
        <Link className="contentСontacts_navigation_link" to="/">Главная</Link> - <span>Контакты</span>
      </p>
      <div className="contentСontacts_contacts">
        <div className="contentСontacts_contacts_contact">
          <p>Телефон</p>
          <p>+7 (888) 823-54-12</p>
        </div>
        <div className="contentСontacts_contacts_contact">
          <p>E-mail</p>
          <p>info@sitename.com</p>
        </div>
        <div className="contentСontacts_contacts_contact">
          <p>Адрес</p>
          <p>г. Москва, Софийская набережная, 26/1с1</p>
        </div>
      </div>
      <div className="contentСontacts_map">
        <YMaps className="contentСontacts_map_YMaps">
            <Map 
              className="contentСontacts_map_YMaps_Map" 
              defaultState={{ center: [55.74769653811567,37.619924806304304], zoom: 17 }}
            >
              <Placemark defaultGeometry={[55.74769653811567,37.619924806304304]} />
            </Map>
        </YMaps>
      </div>

      <div>
        <Formik
          initialValues={{
              name: '',
              email: '',
              telephone: '',
              text: '',
          }}

          validationSchema={SignupSchema}

          onSubmit={values => {
            console.log(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <div className="contentСontacts_form">
              <h5 className="contentСontacts_form_heading">Напишите нам</h5>
              <div>
                <Field className="contentСontacts_form_input" id="name" name="name" type="text" placeholder="Имя"/>
                <ErrorMessage className="error" name='name' component="div"/>
              </div>
              <div>
                <Field className="contentСontacts_form_input" id="email" name="email" type="email" placeholder="E-mail"/>
                <ErrorMessage className="error" name='email' component="div"/>
              </div>
              <div>
                <Field className="contentСontacts_form_input" id="telephone" name="telephone" type="text" placeholder="Телефон"/>
                <ErrorMessage className="error" name='telephone' component="div"/>
              </div>
              <div>
                <Field className="contentСontacts_form_textarea" id="text" name="text" as="textarea" placeholder="Сообщение"/>
                <ErrorMessage className="error" name='text' component="div"/>
              </div>
              <div className="contentСontacts_form_button">
                <button type="submit">Отправить</button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContentСontacts;