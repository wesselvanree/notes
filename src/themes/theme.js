export const globalTheme = {
  fonts: {
    main:
      "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Helvetica', Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif",
    code: "monospace",
  },
  maxWidth: {
    main: "1000px",
    article: "640px",
  },
  colors: {
    // background
    backgroundPrimary: "#ffffff",
    backgroundSecondary: "#f2f2f7",
    backgroundTertiary: "#f2f2f7",
    backgroundPrimaryDark: "#1c1c1e",
    backgroundSecondaryDark: "#2c2c2e",
    backgroundTertiaryDark: "#3a3a3c",
    // seperators
    seperator: "#c6c6c8",
    seperatorTransparent: "#3c3c435c",
    seperatorDark: "#38383a",
    seperatorTransparentDark: "#545458a6",
    // text
    textPrimary: "#3c3c43",
    textSecondary: "#3c3c4399",
    textTertiary: "#3c3c434d",
    textQuarternary: "#3c3c442e",
    textPrimaryDark: "#ffffff",
    textSecondaryDark: "#ebebf599",
    textTertiaryDark: "#ebebf54d",
    textQuarternaryDark: "#ebebf52e",
    // branding colors
    primary: "#467599",
    primaryBackground: "#c7d5e0",
    primaryDark: "#365db3",
  },
  breakpoints: {
    mobile: "only screen and (max-width: 50rem)",
    tablet: "only screen and (max-width: 65rem)",
  },
  spacings: {
    xxSmall: "0.25rem",
    xSmall: "0.5rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xLarge: "4rem",
    xxLarge: "6rem",
  },
  animations: {
    link: "color 0.2s ease",
  },
  shadows: {
    shadow1: "0 4px 20px rgba(0,0,0,0.1)",
  },
}

export const lightTheme = {
  fonts: {
    main: globalTheme.fonts.main,
    code: globalTheme.fonts.code,
  },
  maxWidth: {
    main: globalTheme.maxWidth.main,
    article: globalTheme.maxWidth.article,
  },
  colors: {
    // background
    backgroundPrimary: "#1c1c1e",
    backgroundSecondary: "#2c2c2e",
    backgroundTertiary: "#3a3a3c",
    // seperators
    seperatorDark: "#38383a",
    seperatorTransparent: "#545458a6",
    // text
    textPrimary: "#ffffff",
    textSecondary: "#ebebf599",
    textTertiary: "#ebebf54d",
    textQuarternary: "#ebebf52e",
    // branding colors
    primary: "#365db3",
    primaryBackground: "#c7d5e0",
  },
  breakpoints: {
    mobile: globalTheme.breakpoints.mobile,
    tablet: globalTheme.breakpoints.tablet,
  },
  spacings: {
    xxSmall: globalTheme.spacings.xxSmall,
    xSmall: globalTheme.spacings.xSmall,
    small: globalTheme.spacings.small,
    medium: globalTheme.spacings.medium,
    large: globalTheme.spacings.large,
    xLarge: globalTheme.spacings.xLarge,
    xxLarge: globalTheme.spacings.xxLarge,
  },
  animations: {
    link: globalTheme.animations.link,
  },
  shadows: {
    shadow1: globalTheme.animations.shadow1,
  },
}

export const darkTheme = {
  fonts: {
    main: globalTheme.fonts.main,
    code: globalTheme.fonts.code,
  },
  maxWidth: {
    main: globalTheme.maxWidth.main,
    article: globalTheme.maxWidth.article,
  },
  colors: {
    // backgrounds
    backgroundPrimary: "#ffffff",
    backgroundSecondary: "#f2f2f7",
    backgroundTertiary: "#f2f2f7",
    // seperators
    seperator: "#c6c6c8",
    seperatorTransparent: "#3c3c435c",
    // text
    textPrimary: "#3c3c43",
    textSecondary: "#3c3c4399",
    textTertiary: "#3c3c434d",
    textQuarternary: "#3c3c442e",
    // branding colors
    primary: "#467599",
    primaryBackground: "#c7d5e0",
  },
  breakpoints: {
    mobile: globalTheme.breakpoints.mobile,
    tablet: globalTheme.breakpoints.tablet,
  },
  spacings: {
    xxSmall: globalTheme.spacings.xxSmall,
    xSmall: globalTheme.spacings.xSmall,
    small: globalTheme.spacings.small,
    medium: globalTheme.spacings.medium,
    large: globalTheme.spacings.large,
    xLarge: globalTheme.spacings.xLarge,
    xxLarge: globalTheme.spacings.xxLarge,
  },
  animations: {
    link: globalTheme.animations.link,
  },
  shadows: {
    shadow1: globalTheme.animations.shadow1,
  },
}
