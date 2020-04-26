import React from 'react';
import './section_11.less';

import {
  GeoObject, Map, YMaps, ZoomControl,
} from 'react-yandex-maps';

const Section_11 = () => (
  <div className="ThreeDModeling-s11">
    <YMaps>
      <Map
        width="100%"
        height="600px"
        defaultState={{ center: [43.238108, 76.945540], zoom: 14 }}
      >
        <GeoObject
          geometry={{
            type: 'Point',
            coordinates: [43.238108, 76.945540],
          }}
          properties={{
            iconCaption: 'Алматы',
          }}
          options={{
            preset: 'islands#circleDotIcon',
          }}
        />
        <ZoomControl options={{ float: 'right' }} />
      </Map>
    </YMaps>
  </div>
);

Section_11.propTypes = {};

export default Section_11;
