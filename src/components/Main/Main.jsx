import React from 'react';
import './Main.css'

function Main() {
  return (
    <div className="Main">
        <div className="main_container">
            <div className="img_block">
                <img src="https://sun9-east.userapi.com/sun9-35/s/v1/ig2/NbveUwTN5tGpmiS2Nzk0dg_u2Y6aU6a-8KcLhz3EJnuajYHr-XAQx8xRstM5mc1B9uSybS9LDkUYLtA5_KfQ6-PY.jpg?size=810x1080&quality=95&type=album" 
                        alt="Тут должно быть мое фото" />
            </div>
            <div className="description">
                Я Алимов Ильгиз Ринатович. Этот сайт позволит тебе больше узнать обо мне. Здесь будут или уже выложены все мои приложения для ознокомления работодателями.
            </div>
        </div>
    </div>
  );
}

export default Main;
