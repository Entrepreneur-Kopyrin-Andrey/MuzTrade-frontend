import React from "react";
import { sendContactForm } from '../lib/api';
import NewPageHeader from './NewPageHeader';
import Select from 'react-select'
import uploadfile from '../assets/uploadfile.svg'

export default function RequestPage() {

  const [fileState, setFileState] = React.useState(false);
  const [fileUrl, setFileUrl] = React.useState('');

  const handleFile = (e) => {
    e.preventDefault();
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        setFileUrl(event.target.result)
        console.log(event.target.result)
        console.log(event.target)
    };

    reader.readAsDataURL(file);
    setFileState(true)
    values.file = file;
  }

    const onChangeService = (newValue) => {
        values.service = newValue.label;
    }

const options = [
  { value: 'video', label: 'Видеосъемка' },
  { value: 'sound', label: 'Звуковое оборудование' },
  { value: 'backline', label: 'Бэклайн' },
  { value: 'event', label: 'Event-услуги' },
  { value: 'decoration', label: 'Декорации' },
  { value: '3d', label: '3D-визуализация' },
  { value: 'light', label: 'Световое оборудование' },
]

const initValues = {
    name: "",
    email: "",
    phone: "",
    theme: "",
    service: "",
    comment: "",
  };
  
  const initState = {
    values: initValues,
  };

  const [state, setState] = React.useState(initState);

  const { values, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
        ...prev,
        name: "",
        email: "",
        phone: "",
        theme: "",
        service: "",
        comment: "",
    }));
    try {
      await sendContactForm(values);
      
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

  return (
    <>
        <div className="requestModalPage">
            <NewPageHeader/>
            <div className="requestContentPage">
                <h2 className="requestContentPage__title Monrat700">
                Оставить заявку на сайте
                </h2>
                <h3 className="requestContentPage__undertitle Monrat400">
                и мы с вами свяжемся
                </h3>
                <div className="requestContentPage__name">
                <p className="Monrat400">Введите имя</p>
                <input
                    type="text"
                    placeholder="Введите имя"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                />
                </div>
                <div className="requestContentPage__email">
                <p className="Monrat400">EMAIL</p>
                <input
                    type="text"
                    placeholder="Введите почту"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                />
                </div>
                <div className="requestContentPage__phone">
                <p className="Monrat400">Введите номер телефона</p>
                <input
                    type="tel"
                    placeholder="xxx-xxx-xxx"
                    value={values.phone}
                    name="phone"
                    onChange={handleChange}
                />
                </div>
                <div className="requestContentPage__theme">
                <p className="Monrat400">Введите тему</p>
                <input
                    type="text"
                    placeholder="Введите тему"
                    value={values.theme}
                    name="theme"
                    onChange={handleChange}
                />
                </div>
                <div className="requestContentPage__service">
                    <p className="Monrat400">Вид услуги</p>
                    <Select classNamePrefix="custom-select" className="custom-select" options={options} placeholder={'Выберите...'} isSearchable={false} onChange={onChangeService}/>
                </div>
                <div className="requestContentPage__file">
                <p className="Monrat400">Загрузить файл технического задания и другое</p>
                <div className="input__file"> 
                    <div>
                        <span>Загрузите файл</span>
                        {fileState ? <span className="success_files">Файл загружен</span> : ''}
                    </div> 
                    <label className="label">
                        <img className="file-icon" src={uploadfile}/>
                        <input accept="image/*" type="file" className="file" onChange={e => handleFile(e)}/>
                    </label>
                </div>
                </div>
                <div className="requestContentPage__textarea">
                <p className="Monrat400">Оставьте комментарий с более подробной информацией</p>
                <textarea
                    type="text"
                    placeholder="Оставьте комментарий"
                    value={values.comment}
                    name="comment"
                    onChange={handleChange}
                />
                </div>
                <button
                className="requestContentPage__button request Monrat400 "
                onClick={onSubmit}
                >
                Оставить заявку
                </button>
            </div>
        </div>
    </>
  );
}