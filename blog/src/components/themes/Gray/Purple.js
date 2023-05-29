import React from 'react'
import mainHeaderImage from '../../../images/foodtruck.jpg'
import { Search } from 'styled-icons/feather'

const images = {
    mainHeaderImage
}

const icons = {
    Search : <Search />
}

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    purples: {
      // from light to dark
      0: "hsl(272 ,61%, 100%)",
      1: "hsl(272 ,61%, 95%)",
      2: "hsl(272 ,61%, 85%)",
      3: "hsl(272 ,61%, 75%)",
      4: "hsl(272 ,61%, 65%)",
      5: "hsl(272 ,61%, 55%)",
      6: "hsl(272 ,61%, 45%)",
      7: "hsl(272 ,61%, 35%)",
      8: "hsl(272 ,61%, 25%)",
      9: "hsl(272 ,61%, 15%)",
      10: "hsl(272 ,61%, 5%)",
    },
  },
}

const variants = {
  header: {
    primary: {
      backgroundColor: theme.colors.purples[8],
    },
  },
}

export const Purple = { ...theme, variants, images, icons}