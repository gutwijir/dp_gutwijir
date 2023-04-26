import styled from 'styled-components'

export const StyledStreamingCenter = styled.div.attrs<{
  sidebarLeftBorder: string | null
}>(({ sidebarLeftBorder }) => ({
  style: {
    gridTemplateColumns: `${sidebarLeftBorder} calc(100vw - ${sidebarLeftBorder})`,
  },
}))<{
  sidebarLeftBorder: string | null
}>`
  display: grid;
  grid-template-columns: 60% 40%;
`
