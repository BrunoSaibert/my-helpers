import styled from "styled-components"

export const Main = styled.main`
  max-width: 1000px;
  min-height: calc(100vh - 260px);
  margin: 50px 20px;

  @media (${props => props.theme.utils.breakpoints.tablet_land}) {
    margin: 50px auto;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &.internal-page {
    justify-content: space-around;
    flex-direction: column;

    @media (${props => props.theme.utils.breakpoints.tablet_land}) {
      flex-direction: row;
    }
  }

  .code {
    overflow: auto;
    max-width: 100%;
    margin: 20px auto;

    p {
      margin-bottom: 0;
    }

    @media (${props => props.theme.utils.breakpoints.tablet_land}) {
      margin: 20px;
      max-width: calc(100% - 40px);
    }
  }

  &.internal-page > * {
    flex: 1;

    @media (${props => props.theme.utils.breakpoints.tablet_land}) {
      margin: 0 20px;
    }
  }
`
