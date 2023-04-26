import styled, { css } from 'styled-components'

import { colors } from '@/styles/colors'
import { borderRadius } from '@/styles/theme'

export const StyledSettingsControls = styled.div`
  display: flex;
  justify-content: flex-end;

  //needed because of absolute positioning of SpeedSetting
  position: relative;
`

export const SpeedSetting = styled.form<{ visible: boolean }>`
  display: grid;
  grid-auto-flow: row;
  row-gap: 0.4rem;

  background: ${colors.background.semiTransparent.primary.medium};
  padding: 0.8rem;
  border-radius: ${borderRadius.small};

  position: absolute;
  bottom: 110%;
  left: 25%;

  ${(props) =>
    !props.visible &&
    css`
      display: none;
    `}
`
