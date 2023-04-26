export const breakpoints = {
  content: {
    large: '1250px',
    medium: '780px',
    small: '400px',
  },
}

export const mediaQueries = {
  lgDown: `@media screen and (max-width: ${breakpoints.content.large})`,
  mdDown: `@media screen and (max-width: ${breakpoints.content.medium})`,
  smDown: `@media screen and (max-width: ${breakpoints.content.small})`,

  lgUp: `@media screen and (min-width: ${breakpoints.content.large})`,
  mdUp: `@media screen and (min-width: ${breakpoints.content.medium})`,
  smUp: `@media screen and (min-width: ${breakpoints.content.small})`,
}
