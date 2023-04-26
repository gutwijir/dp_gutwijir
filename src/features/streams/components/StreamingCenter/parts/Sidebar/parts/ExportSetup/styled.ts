import styled from 'styled-components'

import { TextButton } from '@/src/features/ui/TextButton/styled'
import { fontSize, fontWeight } from '@/styles/typography'

export const Form = styled.form`
  margin: 3.2rem;
  display: grid;
  grid-auto-flow: row;
  row-gap: 3.2rem;
  align-content: flex-start;
`

export const ExportSetupSectionHeading = styled.h2`
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.bold};
`

export const ExportSetupSectionHeader = styled.fieldset`
  //delete default fieldset border and padding
  border: none;
  padding: 0;
  padding-right: 3rem;

  display: flex;
  justify-content: space-between;
`
export const ExportSetupSectionLayout = styled(ExportSetupSectionHeader)``

export const RowOptions = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.8rem;
`

export const InlineOptions = styled(RowOptions)`
  grid-auto-flow: column;
  justify-content: flex-end;
`

export const CreateExportButton = styled(TextButton)`
  justify-self: flex-end;
`
