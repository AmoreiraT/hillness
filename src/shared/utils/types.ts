type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type UF =
  | 'AC'
  | 'AL'
  | 'AP'
  | 'AM'
  | 'BA'
  | 'CE'
  | 'DF'
  | 'ES'
  | 'GO'
  | 'MA'
  | 'MT'
  | 'MS'
  | 'MG'
  | 'PA'
  | 'PB'
  | 'PR'
  | 'PE'
  | 'PI'
  | 'RJ'
  | 'RN'
  | 'RS'
  | 'RO'
  | 'RR'
  | 'SC'
  | 'SP'
  | 'SE'
  | 'TO';

// type guards

export const isColor = (
  color: string | number | object | boolean
): color is Color => {
  const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
  const rgbaRegex =
    /^(?:rgba?)?\s?[(]?[\s+]?(\d+)[(\s)|,]+[\s+]?(\d+)[(\s)|,]+[\s+]?(\d+)[(\s)|,]+[\s+]?([0-1]?(?:\.\d+)?)\)$/;
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  const colorAsString = color as string;

  if (colorAsString !== undefined) {
    return (
      rgbRegex.test(colorAsString) ||
      rgbaRegex.test(colorAsString) ||
      hexRegex.test(colorAsString)
    );
  }

  return false;
};
