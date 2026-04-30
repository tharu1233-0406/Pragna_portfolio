const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const crops = [
  {
    input: "assets/pages/wrapora-07.png",
    output: "assets/fragments/wrapora-figure.png",
    left: 0,
    top: 10,
    width: 190,
    height: 540,
  },
  {
    input: "assets/pages/wrapora-07.png",
    output: "assets/fragments/wrapora-range.png",
    left: 800,
    top: 75,
    width: 760,
    height: 430,
  },
  {
    input: "assets/pages/ver-forme-11.png",
    output: "assets/fragments/ver-forme-figure.png",
    left: 0,
    top: 8,
    width: 175,
    height: 548,
  },
  {
    input: "assets/pages/ver-forme-11.png",
    output: "assets/fragments/ver-forme-range.png",
    left: 790,
    top: 70,
    width: 780,
    height: 430,
  },
  {
    input: "assets/pages/oceanic-17.png",
    output: "assets/fragments/oceanic-figure.png",
    left: 0,
    top: 18,
    width: 185,
    height: 520,
  },
  {
    input: "assets/pages/oceanic-17.png",
    output: "assets/fragments/oceanic-range.png",
    left: 820,
    top: 88,
    width: 750,
    height: 395,
  },
  {
    input: "assets/pages/third-sign-23.png",
    output: "assets/fragments/third-sign-solo.png",
    left: 620,
    top: 75,
    width: 190,
    height: 430,
  },
  {
    input: "assets/pages/third-sign-23.png",
    output: "assets/fragments/third-sign-range.png",
    left: 250,
    top: 78,
    width: 1300,
    height: 455,
  },
  {
    input: "assets/pages/nu-kawa-30.png",
    output: "assets/fragments/nu-kawa-bag.png",
    left: 0,
    top: 115,
    width: 335,
    height: 420,
  },
  {
    input: "assets/pages/nu-kawa-30.png",
    output: "assets/fragments/nu-kawa-campaign.png",
    left: 240,
    top: 108,
    width: 530,
    height: 430,
  },
  {
    input: "assets/pages/alder-ash-31.png",
    output: "assets/fragments/alder-ash-model.png",
    left: 335,
    top: 118,
    width: 225,
    height: 310,
  },
  {
    input: "assets/pages/alder-ash-32.png",
    output: "assets/fragments/alder-ash-board.png",
    left: 1105,
    top: 145,
    width: 420,
    height: 310,
  },
];

async function main() {
  fs.mkdirSync(path.join(process.cwd(), "assets/fragments"), { recursive: true });

  for (const crop of crops) {
    await sharp(crop.input)
      .extract({
        left: crop.left,
        top: crop.top,
        width: crop.width,
        height: crop.height,
      })
      .png()
      .toFile(crop.output);
  }

  console.log(`Generated ${crops.length} fragments`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
