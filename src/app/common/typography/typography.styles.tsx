import styled, { css } from "styled-components"

enum FontSizes {
  small = '1.2rem',
  normal = '1.4rem',
  medium = '1.6rem',
  medimPlus = '1.8rem',
  big = '2.8rem',
}

enum Colors {
  blue = '#005FAD', // btn background
  blue2 = '#0070CC', // tab bottom border
  blueLight = '#0061AF', // links
  blueLight2 = '#008CFF', // checbox checked
  blueLight3 = '#B3DDFF',
  blueDisabled = '#C1DBF0', // disabled button
  gray = '#5A6673', // normal text
  gray2 = '#75777B', // tab title, checkbox unchecked border
  grayLight = '#7B8085', // label text, checkbox descr. text
  grayLight2 = '#96999E', // nav icons
  grayLight3 = '#DCDDE0', // input borders
  grayLight4 = '#E0E3E7', // placeholder text
  grayLight5 = '#EAECEE', // password validation marker background
  grayDark = '#334150', // headings
  grayDark2 = '#2C363F', // text in inputs, sidebar title
  white = '#FFFFFF',
  red = '#ED5576',
  green = '#57C278',
  yellow = '#FFCB45'
}

const HeaderMain = styled.h1`
  font-size: ${FontSizes.big};
  font-weight: 700;
  line-height: 3.2rem;
  letter-spacing: 1px;
  color: ${Colors.grayDark};
`;

const HeaderSecondary = styled.h2`
  font-size: ${FontSizes.medimPlus};
  font-weight: 700;
  line-height: 2.4rem;
  letter-spacing: .5px;
  color: ${Colors.grayDark2}
`;

interface Header3Props {
  color?: 'faded';
}

const HeaderTertiary = styled.h3<Header3Props>`
  font-size: ${FontSizes.normal};
  font-weight: 700;
  line-height: 1.6rem;
  letter-spacing: .5px;
  color: ${({ color }) => color ? Colors.gray2 : Colors.grayDark2}
`;

const TextBody = styled.p`
  font-size: ${FontSizes.normal};
  font-weight: 500;
  line-height: 2rem;
  color: ${Colors.gray}
`;

const TextLabel = styled.label`
  font-size: ${FontSizes.normal};
  font-weight: 400;
  line-height: 2rem;
  color: ${Colors.grayLight};
`

const TextInput = css`
  font-size: ${FontSizes.medium};
  font-weight: 500;
  line-height: 2.4rem;
  color: ${Colors.grayDark2};
`

const TextButton = css`
  font-size: ${FontSizes.medium};
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: .5px;
  color: ${Colors.white};
`

const TextInputPlaceholder = css`
  font-size: ${FontSizes.medium};
  font-weight: 500;
  line-height: 2.4rem;
  color: ${Colors.grayLight4};
`

const TextCheckbox = styled.span`
  font-size: ${FontSizes.small};
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: .5px;
  color: ${Colors.gray2};
`

const TextValidation = css`
  font-size: ${FontSizes.small};
  font-weight: 400;
  line-height: 1.6rem;
  letter-spacing: .5px;
  color: ${Colors.grayLight};
`

const TextFormError = styled.span`
  font-size: ${FontSizes.normal};
  font-weight: 500;
  line-height: 2rem;
  color: ${Colors.red};
`

interface CaptionProps {
  color?: 'red' | 'green';
}

const TextPopup = styled.span<CaptionProps>`
  font-size: ${FontSizes.small};
  font-weight: 500;
  line-height: 1.6rem;
  color:  ${({ color }) => !color ? Colors.grayDark2 : color === 'green' ? Colors.green : Colors.red};
`

interface LinkProps {
  bold?: boolean;
}

const Link = styled.a<LinkProps>`
  &:link,
  &:visited {
    font-size: ${FontSizes.normal};
    ${({ bold }) => bold
    ? css`font-weight: 600;`
    : css`font-weight: 500;`
  }
    line-height: 2rem;
    letter-spacing: .5px;
    color: ${Colors.blueLight};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all .2s;
  }

  &:hover,
  &:active {
    border-bottom: 1px solid ${Colors.blueLight};
  }
`

const LinkSmall = styled.a`
  &:link,
  &:visited {
    font-size: ${FontSizes.small};
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: .5px;
    color: ${Colors.blueLight};
    text-decoration: none;
    border-bottom: 1px solid ${Colors.blueLight};
    transition: all .2s;
  }

  &:hover,
  &:active {
    border-bottom: 1px solid transparent;
  }
`
export {
  HeaderMain,
  HeaderSecondary,
  HeaderTertiary,
  TextBody,
  TextLabel,
  TextCheckbox,
  TextInput,
  TextInputPlaceholder,
  TextFormError,
  TextValidation,
  TextPopup,
  TextButton,
  Link,
  LinkSmall,
  FontSizes,
  Colors
};

