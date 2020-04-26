import React, { useEffect, useState } from 'react';
import './idCard.less';
import classNames from "../../lib/classNames";

const axios = require('axios');

const IDcard = (props) => {
  let [personData, setPersonData] = useState({});
  let [disabledUpdate, setDisabledUpdate] = useState(false);

  useEffect(() => {
    axios.get('https://warm-basin-83185.herokuapp.com/api/idcard')
      .then((response) => {
        setPersonData(response.data);
      })
  }, []);

  function updateData() {
    setPersonData({});
    setDisabledUpdate(true);
    axios.get('https://warm-basin-83185.herokuapp.com/api/idcard')
      .then((response) => {
        setPersonData(response.data);
        setDisabledUpdate(false);
      })
      .catch((err) => {
        updateData();
      })
  }

  return (
    <div className={'IDcard'}>
      <div className="IDcard__card">
        <div className="IDcard__card-background">
          <div className="IDcard__card--bg1" />
          <div className="IDcard__card--bg2" />
          <div className="IDcard__card--bg3" />
          <div className="IDcard__card--bg4" />
        </div>
        <div className="IDcard__card-content">
          <div
            className={classNames("IDcard__card--photoContainer", { ['IDcard__card-loadingPhoto']: Object.keys(personData) })}>
            {(personData?.photo &&
              <img
                className={"IDcard__card--photo"}
                src={personData?.photo}
                alt={'Портрет человека'}
              />
            )}
          </div>
          <div className="IDcard__card--name">
            <div
              className={classNames("IDcard__card--name_item", { ['IDcard__card-loading']: Object.keys(personData).length === 0 })}>{personData?.firstName}</div>
            <div
              className={classNames("IDcard__card--name_item", { ['IDcard__card-loading']: Object.keys(personData).length === 0 })}>{personData?.secondName}</div>
            <div
              className={classNames("IDcard__card--name_item", { ['IDcard__card-loading']: Object.keys(personData).length === 0 })}>{personData?.middleName}</div>
          </div>

          <div className="IDcard__card--info">
            <div className="IDcard__card--info_item">
              <div className="IDcard__card--info_item-title">Адрес</div>
              <div
                className={classNames("IDcard__card--info_item-content", { ['IDcard__card-loading']: Object.keys(personData).length === 0 })}>
                {personData?.address?.region},
                <br />
                {personData?.address?.city},
                <br />
                {personData?.address?.street}, {personData?.address?.house},
                <br />
                {personData?.address?.index}
              </div>
            </div>
            <div className="IDcard__card--info_item">
              <div className="IDcard__card--info_item-title">Возраст</div>
              <div
                className={classNames("IDcard__card--info_item-content", { ['IDcard__card-loading']: Object.keys(personData).length === 0 })}>
                {personData?.age}
              </div>
            </div>
            <div className="IDcard__card--info_item">
              <div className="IDcard__card--info_item-title">Дата рождения</div>
              <div
                className={classNames("IDcard__card--info_item-content", { ['IDcard__card-loading']: Object.keys(personData).length === 0 })}>
                {personData?.birthday?.day} - {personData?.birthday?.month} - {personData?.birthday?.year}
              </div>
            </div>
            <div className="IDcard__card--info_item">
              <div className="IDcard__card--info_item-title">Телефон</div>
              <div
                className={classNames("IDcard__card--info_item-content", { ['IDcard__card-loading']: Object.keys(personData).length === 0 })}>
                +7 {personData?.phone}
              </div>
            </div>
            <div className="IDcard__card--info_item">
              <div className="IDcard__card--info_item-title">E-mail</div>
              <div
                className={classNames("IDcard__card--info_item-content", { ['IDcard__card-loading']: Object.keys(personData).length === 0 })}>
                {personData?.email}
              </div>
            </div>
            <div className="IDcard__card--info_item">
              <div className="IDcard__card--info_item-title">Место работы</div>
              <div
                className={classNames("IDcard__card--info_item-content", { ['IDcard__card-loading']: Object.keys(personData).length === 0 })}>
                {personData?.workCompany}
              </div>
            </div>


          </div>
        </div>

      </div>
      <button className="IDcard__reload" onClick={() => updateData()}
              disabled={disabledUpdate}>Обновить
      </button>
    </div>
  )
};

IDcard.propTypes = {};

export default IDcard;