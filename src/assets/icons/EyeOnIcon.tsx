import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

export function EyeOnIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.13317 13.5282C3.79037 12.5521 2.61564 11.2773 1.72148 9.97119C4.02159 7.15953 6.49186 4.53846 10 4.53846C13.5082 4.53846 15.9785 7.15949 18.2785 9.97118C17.3843 11.2773 16.2096 12.5521 14.8668 13.5282C13.3656 14.6195 11.6974 15.3077 10 15.3077C8.30259 15.3077 6.63442 14.6195 5.13317 13.5282ZM10 3C5.46653 3 2.48356 6.58044 0.171155 9.43932C-0.0360476 9.69549 -0.0570978 10.0552 0.118808 10.3338C1.13209 11.9385 2.55057 13.5528 4.22857 14.7726C5.90505 15.9913 7.88376 16.8462 10 16.8462C12.1162 16.8462 14.0949 15.9913 15.7714 14.7726C17.4494 13.5528 18.8679 11.9385 19.8812 10.3338C20.0571 10.0552 20.036 9.6955 19.8288 9.43933C17.5165 6.58038 14.5335 3 10 3ZM10 7.10256C8.44224 7.10256 7.17949 8.36531 7.17949 9.92307C7.17949 11.4808 8.44224 12.7436 10 12.7436C11.5578 12.7436 12.8205 11.4808 12.8205 9.92307C12.8205 8.36531 11.5578 7.10256 10 7.10256ZM8.71795 9.92307C8.71795 9.21498 9.29191 8.64102 10 8.64102C10.7081 8.64102 11.2821 9.21498 11.2821 9.92307C11.2821 10.6312 10.7081 11.2051 10 11.2051C9.29191 11.2051 8.71795 10.6312 8.71795 9.92307Z"
        fill={color}
      />
    </Svg>
  );
}