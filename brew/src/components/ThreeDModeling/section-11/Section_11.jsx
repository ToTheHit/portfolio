import React from 'react';
import './section_11.less';
import { isMobile } from 'react-device-detect';
import {
  GeoObject, Map, YMaps, ZoomControl,
} from 'react-yandex-maps';


const Section_11 = () => (
  <section className="ThreeDModeling-s11">
    <YMaps>
      <Map
        width="100%"
        height="600px"
        defaultState={{
          center: [43.238108, 76.945540],
          zoom: 14,
        }}
        instanceRef={(ref) => { isMobile && ref.behaviors.disable(['scrollZoom', 'drag']); }}
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
  </section>
);

Section_11.propTypes = {};

export default Section_11;
