import { css } from 'styled-components';

export const m2 = {
  headline: {
    1: css`
      font-family: ${({ theme }) =>
        theme.typography.m2.headline.headline1.fontFamily};
      font-size: ${({ theme }) =>
        theme.typography.m2.headline.headline1.fontSize / 10}rem;
      font-weight: ${({ theme }) =>
        theme.typography.m2.headline.headline1.fontWeight};
      line-height: ${({ theme }) =>
        theme.typography.m2.headline.headline1.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.headline.headline1.letterSpacing};
    `,
    2: css`
      font-family: ${({ theme }) =>
        theme.typography.m2.headline.headline2.fontFamily};
      font-size: ${({ theme }) =>
        theme.typography.m2.headline.headline2.fontSize / 10}rem;
      font-weight: ${({ theme }) =>
        theme.typography.m2.headline.headline2.fontWeight};
      line-height: ${({ theme }) =>
        theme.typography.m2.headline.headline2.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.headline.headline2.letterSpacing};
    `,
    3: css`
      font-family: ${({ theme }) =>
        theme.typography.m2.headline.headline3.fontFamily};
      font-size: ${({ theme }) =>
        theme.typography.m2.headline.headline3.fontSize / 10}rem;
      font-weight: ${({ theme }) =>
        theme.typography.m2.headline.headline3.fontWeight};
      line-height: ${({ theme }) =>
        theme.typography.m2.headline.headline3.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.headline.headline3.letterSpacing};
    `,
    4: css`
      font-family: ${({ theme }) =>
        theme.typography.m2.headline.headline4.fontFamily};
      font-size: ${({ theme }) =>
        theme.typography.m2.headline.headline4.fontSize / 10}rem;
      font-weight: ${({ theme }) =>
        theme.typography.m2.headline.headline4.fontWeight};
      line-height: ${({ theme }) =>
        theme.typography.m2.headline.headline4.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.headline.headline4.letterSpacing};
    `,
    5: css`
      font-family: ${({ theme }) =>
        theme.typography.m2.headline.headline5.fontFamily} !important;
      font-size: ${({ theme }) =>
        theme.typography.m2.headline.headline5.fontSize / 10}rem;
      font-weight: ${({ theme }) =>
        theme.typography.m2.headline.headline5.fontWeight};
      line-height: ${({ theme }) =>
        theme.typography.m2.headline.headline5.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.headline.headline5.letterSpacing};
    `,
    6: css`
      font-family: ${({ theme }) =>
        theme.typography.m2.headline.headline6.fontFamily};
      font-size: ${({ theme }) =>
        theme.typography.m2.headline.headline6.fontSize / 10}rem;
      font-weight: ${({ theme }) =>
        theme.typography.m2.headline.headline6.fontWeight};
      line-height: ${({ theme }) =>
        theme.typography.m2.headline.headline6.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.headline.headline6.letterSpacing};
    `,
    subtitle: {
      1: css`
        font-family: ${({ theme }) =>
          theme.typography.m2.headline.subtitle1.fontFamily};
        font-size: ${({ theme }) =>
          theme.typography.m2.headline.subtitle1.fontSize / 10}rem;
        font-weight: ${({ theme }) =>
          theme.typography.m2.headline.subtitle1.fontWeight};
        line-height: ${({ theme }) =>
          theme.typography.m2.headline.subtitle1.lineHeight};
        letterspacing: ${({ theme }) =>
          theme.typography.m2.headline.subtitle1.letterSpacing};
      `,
      2: css`
        font-family: ${({ theme }) =>
          theme.typography.m2.headline.subtitle2.fontFamily};
        font-size: ${({ theme }) =>
          theme.typography.m2.headline.subtitle2.fontSize / 10}rem;
        font-weight: ${({ theme }) =>
          theme.typography.m2.headline.subtitle2.fontWeight};
        line-height: ${({ theme }) =>
          theme.typography.m2.headline.subtitle2.lineHeight};
        letterspacing: ${({ theme }) =>
          theme.typography.m2.headline.subtitle2.letterSpacing};
      `,
    },
  },
  body: {
    1: css`
      font-family: ${({ theme }) => theme.typography.m2.body.body1.fontFamily};
      font-size: ${({ theme }) =>
        theme.typography.m2.body.body1.fontSize / 10}rem;
      font-weight: ${({ theme }) => theme.typography.m2.body.body1.fontWeight};
      line-height: ${({ theme }) => theme.typography.m2.body.body1.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.body.body1.letterSpacing};
    `,
    2: css`
      font-family: ${({ theme }) => theme.typography.m2.body.body2.fontFamily};
      font-size: ${({ theme }) =>
        theme.typography.m2.body.body2.fontSize / 10}rem;
      font-weight: ${({ theme }) => theme.typography.m2.body.body2.fontWeight};
      line-height: ${({ theme }) => theme.typography.m2.body.body2.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.body.body2.letterSpacing};
    `,
    caption: css`
      font-family: ${({ theme }) =>
        theme.typography.m2.body.caption.fontFamily};
      font-size: ${({ theme }) =>
        theme.typography.m2.body.caption.fontSize / 10}rem;
      font-weight: ${({ theme }) =>
        theme.typography.m2.body.caption.fontWeight};
      line-height: ${({ theme }) =>
        theme.typography.m2.body.caption.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.body.caption.letterSpacing};
    `,
    overline: css`
      font-family: ${({ theme }) =>
        theme.typography.m2.body.overline.fontFamily};
      font-size: ${({ theme }) =>
        theme.typography.m2.body.overline.fontSize / 10}rem;
      font-weight: ${({ theme }) =>
        theme.typography.m2.body.overline.fontWeight};
      line-height: ${({ theme }) =>
        theme.typography.m2.body.overline.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.body.overline.letterSpacing};
    `,
    divider: {
      1: css`
        font-family: ${({ theme }) =>
          theme.typography.m2.body.divider1.fontFamily};
        font-size: ${({ theme }) =>
          theme.typography.m2.body.divider1.fontSize / 10}rem;
        font-weight: ${({ theme }) =>
          theme.typography.m2.body.divider1.fontWeight};
        line-height: ${({ theme }) =>
          theme.typography.m2.body.divider1.lineHeight};
        letterspacing: ${({ theme }) =>
          theme.typography.m2.body.divider1.letterSpacing};
      `,
      2: css`
        font-family: ${({ theme }) =>
          theme.typography.m2.body.divider2.fontFamily};
        font-size: ${({ theme }) =>
          theme.typography.m2.body.divider2.fontSize / 10}rem;
        font-weight: ${({ theme }) =>
          theme.typography.m2.body.divider2.fontWeight};
        line-height: ${({ theme }) =>
          theme.typography.m2.body.divider2.lineHeight};
        letterspacing: ${({ theme }) =>
          theme.typography.m2.body.divider2.letterSpacing};
      `,
      3: css`
        font-family: ${({ theme }) =>
          theme.typography.m2.body.divider3.fontFamily};
        font-size: ${({ theme }) =>
          theme.typography.m2.body.divider3.fontSize / 10}rem;
        font-weight: ${({ theme }) =>
          theme.typography.m2.body.divider3.fontWeight};
        line-height: ${({ theme }) =>
          theme.typography.m2.body.divider3.lineHeight};
        letterspacing: ${({ theme }) =>
          theme.typography.m2.body.divider3.letterSpacing};
      `,
    },
  },
  label: {
    medium: css`
      font-family: ${({ theme }) =>
        theme.typography.m2.label.medium.fontFamily};
      font-size: ${({ theme }) =>
        theme.typography.m2.label.medium.fontSize / 10}rem;
      font-weight: ${({ theme }) =>
        theme.typography.m2.label.medium.fontWeight};
      line-height: ${({ theme }) =>
        theme.typography.m2.label.medium.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.label.medium.letterSpacing};
    `,
    small: css`
      font-family: ${({ theme }) => theme.typography.m2.label.small.fontFamily};
      font-size: ${({ theme }) =>
        theme.typography.m2.label.small.fontSize / 10}rem;
      font-weight: ${({ theme }) => theme.typography.m2.label.small.fontWeight};
      line-height: ${({ theme }) => theme.typography.m2.label.small.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.label.small.letterSpacing};
    `,
    large: css`
      font-family: ${({ theme }) => theme.typography.m2.label.large.fontFamily};
      font-size: ${({ theme }) =>
        theme.typography.m2.label.large.fontSize / 10}rem;
      font-weight: ${({ theme }) => theme.typography.m2.label.large.fontWeight};
      line-height: ${({ theme }) => theme.typography.m2.label.large.lineHeight};
      letterspacing: ${({ theme }) =>
        theme.typography.m2.label.large.letterSpacing};
    `,
  },
};
export const sys = {
  large: css`
    font-family: ${({ theme }) => theme.typography.sys.large.fontFamily};
    font-size: ${({ theme }) => theme.typography.sys.large.fontSize / 10}rem;
    font-weight: ${({ theme }) => theme.typography.sys.large.fontWeight};
    line-height: ${({ theme }) => theme.typography.sys.large.lineHeight};
    letterspacing: ${({ theme }) => theme.typography.sys.large.letterSpacing};
  `,
  medium: css`
    font-family: ${({ theme }) => theme.typography.sys.medium.fontFamily};
    font-size: ${({ theme }) => theme.typography.sys.medium.fontSize / 10}rem;
    font-weight: ${({ theme }) => theme.typography.sys.medium.fontWeight};
    line-height: ${({ theme }) => theme.typography.sys.medium.lineHeight};
    letterspacing: ${({ theme }) => theme.typography.sys.medium.letterSpacing};
  `,
  small: css`
    font-family: ${({ theme }) => theme.typography.sys.small.fontFamily};
    font-size: ${({ theme }) => theme.typography.sys.small.fontSize / 10}rem;
    font-weight: ${({ theme }) => theme.typography.sys.small.fontWeight};
    line-height: ${({ theme }) => theme.typography.sys.small.lineHeight};
    letterspacing: ${({ theme }) => theme.typography.sys.small.letterSpacing};
  `,
  xsmall: css`
    font-family: ${({ theme }) => theme.typography.sys.xsmall.fontFamily};
    font-size: ${({ theme }) => theme.typography.sys.xsmall.fontSize / 10}rem;
    font-weight: ${({ theme }) => theme.typography.sys.xsmall.fontWeight};
    line-height: ${({ theme }) => theme.typography.sys.xsmall.lineHeight};
    letterspacing: ${({ theme }) => theme.typography.sys.xsmall.letterSpacing};
  `,
};
