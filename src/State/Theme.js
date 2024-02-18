export const theme = {
  name: "my-theme",
  overrides: [
    {
      colorMode: "dark",
      tokens: {
        colors: {
          font: {
            primary: { value: "#fff" },
            secondary: { value: "#fff" },
          },
          background: {
            primary: { value: "#404040" },
          },
        },
        components: {
          button: {
            primary: {
              _hover: {
                borderColor: { value: "#fff" },
              },
            },
          },
          togglebutton: {
            _pressed: {
              borderColor: { value: "#fff" },
              backgroundColor: { value: "#008080" },
            },
            _focus: {
              borderColor: { value: "#fff" },
              backgroundColor: { value: "#008080" },
            },
          },
        },
      },
    },
    {
      colorMode: "light",
      tokens: {
        colors: {
          font: {
            primary: { value: "#000" },
            secondary: { value: "#000" },
          },
          background: {
            primary: { value: "#f9f1f1" },
          },
        },
        components: {
          button: {
            primary: {
              _hover: {
                borderColor: { value: "#000" },
              },
            },
          },
          togglebutton: {
            _pressed: {
              borderColor: { value: "#000" },
              backgroundColor: { value: "#008080" },
            },
            _focus: {
              borderColor: { value: "#000" },
              backgroundColor: { value: "#008080" },
            },
          },
        },
      },
    },
  ],
};
