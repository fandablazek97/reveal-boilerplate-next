module.exports = {
  theme: {
    extend: {
      // Spacing & Sizing
      spacing: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        208: "52rem",
        224: "56rem",
        240: "60rem",
        256: "64rem",
        272: "68rem",
      },

      minHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "2/4": "50%",
        "3/4": "75%",
      },

      // Layout
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
      },

      zIndex: {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        100: 100,
        999: 999,
      },

      // Borders
      borderWidth: {
        1: "1px",
        3: "3px",
        5: "5px",
        6: "6px",
        7: "7px",
        9: "9px",
      },

      ringWidth: {
        1: "1px",
        3: "3px",
        5: "5px",
        6: "6px",
        7: "7px",
        9: "9px",
      },

      // Transitions & Animation
      transitionProperty: {
        visibility: "opacity, visibility",
        spacing: "margin, padding",
      },

      transitionDuration: {
        0: "0ms",
        400: "400ms",
        600: "600ms",
        800: "800ms",
        900: "900ms",
      },

      transitionTimingFunction: {
        "in-cubic": "cubic-bezier(0.32, 0, 0.67, 0)",
        "out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
        "in-out-cubic": "cubic-bezier(0.65, 0, 0.35, 1)",
        "in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "in-back": "cubic-bezier(0.36, 0, 0.66, -0.56)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },

      transitionDelay: {
        0: "0ms",
        50: "50ms",
        250: "250ms",
        350: "350ms",
        450: "450ms",
        550: "550ms",
        600: "600ms",
        650: "650ms",
        750: "750ms",
        800: "800ms",
        900: "900ms",
      },

      // Transforms
      scale: {
        60: "0.6",
        65: "0.65",
        70: "0.7",
        80: "0.8",
        85: "0.85",
        115: "1.15",
        120: "1.2",
        130: "1.3",
        135: "1.35",
        140: "1.4",
        145: "1.45",
        160: "1.6",
        170: "1.7",
        175: "1.75",
        180: "1.8",
        200: "2",
      },

      // Effects
      opacity: {
        15: "0.15",
        85: "0.85",
      },

      // Box shadow - ne tak agresivní jako výchozí od tailwindu
      boxShadow: {
        "soft-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.025)",
        soft: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        "soft-md":
          "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        "soft-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)",
        "soft-xl":
          "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        "soft-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.125)",
      },
    },
  },
  plugins: [],
};
