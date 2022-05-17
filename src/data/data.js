// adb shell input swipe 500 1000 500 0 50

export const DATA = [...Array(10000).keys()].map(x => {
  return {
    name: `Name-${x++}`,
    title: `Title-${x++}`,
  };
});

export const ITEM_HEIGHT = 200;
