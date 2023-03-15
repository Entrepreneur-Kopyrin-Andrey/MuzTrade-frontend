import React from "react";
import { useForm } from "react-hook-form";
import { fetchAuth } from "../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Admin() {
  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    mode: "onChange",
  });

  // const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(fetchAuth(values));
  };

  // if (isAuth) {
  //   return <Navigate to="/" />
  // }

  console.log(errors, isValid);

  return (
    <>
      <div className="auth">
        <div className="auth_wrapper">
          <div className="auth_head">
            <h4 className="auth_title">Вход</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs">
              <p> Логин {errors?.login && (
                <p className="error">{errors?.login?.message || "error"} </p>
              )}</p>
              <input
                type="text"
                {...register("login", { required: "Введите логин!" })}
              />
              
              <p> Пароль</p>

              <input
                type={show ? "text" : "password"}
                {...register("password", { required: "Введите пароль!" })}
              />

              {errors?.password && (
                <p className="error">{errors?.password?.message || "error"} </p>
              )}
            </div>
            <div className="check">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleShow}
              />
              <p> Показать пароль</p>
            </div>

            <div className="auth_bottom">
              <button type="submit" className="button">
                <Link to={"/main"}>
                  Войти

                </Link>
              </button>
            </div>

            {/* <div className="auth_bottom">
            <Link href="/admin/adminPages/news/news">
              <h4 className="button">Войти</h4>
            </Link>
          </div> */}
          </form>
        </div>
      </div>
    </>
  );
}
