import 'styled-components';
import { Color } from '@shared/utils/types';

interface Typography {
  fontSize: number;
  fontFamily: string;
  paragraphIndent: number;
  paragraphSpacing: number;
  fontWeight: number;
  letterSpacing: string;
  lineHeight: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      hsbc: {
        content: {
          on_dark_01: Color;
          on_light_01: Color;
        };
        rag: {
          green_success: Color;
          red_error: Color;
          blue_neutral: Color;
          blue_tint_neutral: Color;
          green_tint_success: Color;
          amber_tint_warning: Color;
          red_tint_error: Color;
          amber_warning: Color;
        };
        brand: {
          o01_hsbc_red: Color;
          o02_black: Color;
          o03_white: Color;
          o04_light_pearl: Color;
          o05_pearl: Color;
          o06_silver: Color;
          o07_pewter: Color;
          o08_charcoal: Color;
        };
        interaction_default: {
          o05: Color;
          o06: Color;
          o07: Color;
        };
        data_visualisation: {
          o01_dusk_pearl: Color;
          o02_jade: Color;
          o03_emerald: Color;
          o04_amber: Color;
          o05_ruby: Color;
          o06_iolite: Color;
          o07_sapphire: Color;
          o08_dark_pearl: Color;
          o09_dark_jade: Color;
          o10_dark_emerald: Color;
          o11_dark_amber: Color;
          o12_dark_ruby: Color;
          o13_dark_iolite: Color;
          o14_dark_sapphire: Color;
        };
      };
      cmb: {
        interaction_default: {
          o01: Color;
          o02: Color;
          o03: Color;
          o04: Color;
          o05: Color;
          o06: Color;
          o07: Color;
        };
        sub_brand: {
          o01_light_slate: Color;
          o02_slate: Color;
          o03_dark_slate: Color;
          o04_corporate_slate: Color;
        };
        interaction_defined: {
          o01: Color;
          o02: Color;
          o03: Color;
          o04: Color;
          o05: Color;
          o06: Color;
          o07: Color;
        };
      };
    };

    typography: {
      m2: {
        headline: {
          headline1: Typography;
          headline2: Typography;
          headline3: Typography;
          headline4: Typography;
          headline5: Typography;
          headline6: Typography;
          subtitle1: Typography;
          subtitle2: Typography;
        };
        body: {
          body1: Typography;
          body2: Typography;
          caption: Typography;
          overline: Typography;
          divider1: Typography;
          divider2: Typography;
          divider3: Typography;
        };
        label: {
          medium: Typography;
          small: Typography;
          large: Typography;
        };
      };
      sys: {
        large: Typography;
        medium: Typography;
        small: Typography;
        xsmall: Typography;
      };
    };
    media: {
      superLarge: string;
      extraLarge: string;
      large: string;
      medium: string;
      small: string;
    };
    transition: {
      all: string;
      height: string;
      width: string;
      transform: string;
      background: string;
      opacity: string;
      color: string;
      border: string;
    };
  }
}
