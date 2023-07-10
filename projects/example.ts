import { InfinityMintProject } from "@app/interfaces";

const example: InfinityMintProject = {
  name: "0x0zAgency Avatars",
  price: "$1",
  modules: {
    random: "SeededRandom",
    assets: "SimpleSVG",
    minter: "DefaultMinter",
    royalty: "DefaultRoyalty",
  },
  information: {
    tokenSymbol: "🟨",
    tokenSingular: "🟨",
  },
  permissions: {
    all: [],
  },
  paths: [
    {
      name: "0xDorothy",
      fileName: "/imports/0x0z/0xDorothy.svg",
    },
    {
      name: "0xScarecrow",
      fileName: "/imports/0x0z/0xScarecrow.svg",
    },
    {
      name: "0xTinman",
      fileName: "/imports/0x0z/0xTinman.svg",
    },
    {
      name: "0xLionheart",
      fileName: "/imports/0x0z/0xLionheart.svg",
    },
    {
      name: "0xToto",
      fileName: "/imports/0x0z/0xToto.svg",
    },
    {
      name: "0xBadWitch",
      fileName: "/imports/0x0z/0xWitch-Bad.svg",
    },
    {
      name: "0xGoodWitch",
      fileName: "/imports/0x0z/0xWitch-Good.svg",
    },
    {
      name: "0xWizard",
      fileName: "/imports/0x0z/0xWizardof0z.svg",
    },
  ],
  events: {
    async initialized({ log, eventEmitter }) {
      log("project initialized");
    },
    async failure({ log, event: error }) {
      log("failed to launch successfully");
      console.error(error);
    },
    async success({ log }) {
      log("successfully launched example project");
    },
  },
};

export default example;
