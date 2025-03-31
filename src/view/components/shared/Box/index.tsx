import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { CSSProperties } from 'react';

type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around';

type JustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type AlignItems = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type Display = 'flex' | 'inline-flex' | 'block' | 'inline-block';

type BoxProps = {
  display?: Display;
  direction?: FlexDirection;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  flexWrap?: FlexWrap;
  flexGrow?: number;
  gap?: string | number;
  alignContent?: AlignContent;
  css?: ((theme: Theme) => CSSProperties) | CSSProperties;
};

const Box = styled('div')<BoxProps>((props) => ({
  display: props.display || 'block',
  flexDirection: props.direction || 'row',
  alignItems: props.alignItems || 'stretch',
  justifyContent: props.justifyContent || 'flex-start',
  flexWrap: props.flexWrap || 'nowrap',
  flexGrow: props.flexGrow || 0,
  gap: props.gap || 0,
  alignContent: props.alignContent || 'stretch',
  // If the css prop is a function, call it with the theme, otherwise use it as is
  ...(typeof props.css === 'function' ? props.css(props.theme) : props.css),
}));

export default Box;
