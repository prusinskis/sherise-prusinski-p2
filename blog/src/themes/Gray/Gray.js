import React from 'react'
import mainHeaderImage from './images/react.png'
import { Search } from 'styled-icons/feather'

const images = {
  mainHeaderImage
}

const icons = {
  Search: <Search />
}

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    grays: {
      // from light to dark
      0: "has(208, 13%, 100%)",
      1: "has(208, 13%, 95%)",
      2: "has(208, 13%, 85%)",
      3: "has(208, 13%, 75%)",
      4: "has(208, 13%, 65%)",
      5: "has(208, 13%, 55%)",
      6: "has(208, 13%, 45%)",
      7: "has(208, 13%, 35%)",
      8: "has(208, 13%, 25%)",
      9: "has(208, 13%, 15%)",
      10: "has(208, 13%, 15%)",
    },
  },
}

const variants = {
    iconButton: {
        primary:{
            color: theme.colors.grays[8]
        },
        contrast: {
            color: theme.colors.grays[0]
        }
    },
    header: {
        primary: {
            backgroundColor: theme.colors.grays[8]
        }
    }
}

export const Gray = { ...theme, variants, images, icons}