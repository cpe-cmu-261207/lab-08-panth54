const CanvasLib = {
  createEmptyCanvas: () => {
    const a = [];
    for (let i = 0; i < 16; i++) {
      a.push([]);
      for (let j = 0; j < 16; j++) a[i].push("#FFFFFF");
    }
    return a;
  },

  copyCanvas: (source) => {
    const a = [];
    for (let i = 0; i < 16; i++) {
      a.push([]);
      for (let j = 0; j < 16; j++) a[i] = source[i];
    }
    return a;
  },

  createRandomCanvas: () => {
    const colors = [
      "#495C83",
      "#7A86B6",
      "#A8A4CE",
      "#C8B6E2",
      "#7858A6",
      "#5B4B8A",
      "#4C3575",
      "#371B58",
      "#AFB4FF",
      "#9C9EFE",
      "#AFB4FF",
      "#5534A5",
    ];

    const a = [];
    for (let i = 0; i < 16; i++) {
      a.push([]);
      for (let j = 0; j < 16; j++)
        a[i].push(colors[Math.floor(Math.random() * colors.length)]);
    }
    return a;
  },
};

export default CanvasLib;
