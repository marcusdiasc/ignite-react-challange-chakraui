import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: {
      "500": "#FFBA08",
    },
    heading: {
      "500": "#47585B",
    },
    info: {
      "500": "#999999",
    },
    light: {
      text: "#F5F8FA",
      info: "#DADADA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "#F5F8FA",
        color: "heading",
      },
    },
  },
});
