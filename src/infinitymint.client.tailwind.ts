import { InfinityMintClientConfig } from "infinitymint-client/dist/src/core/interfaces";
import DefaultRenderer from "infinitymint-client/dist/src/renderers/DefaultRenderer";
//import tailwind
import "./index.css";

//import initial component
import HelloWorld from "./meta/DefaultTailwind";
export const InitialComponent = HelloWorld;

const config: InfinityMintClientConfig = {
  sitemap: [{}],
  env: {
    NODE_ENV: "dev",
  },
  api: {
    developer: "http://localhost:1337",
    production: "https://api.infinitymint.app",
  },
  rendering: {
    defaultRenderer: DefaultRenderer,
    rendererProps: {
      scaleFactor: 2.2,
    },
  },
  network: {
    default: {
      developer: "ganache",
      production: "polygon",
    },
    providers: {
      ethereum: "https://mainnet.infura.io/v3/ef00c000f793483bbf8506235ba4439b",
      polygon: "https://polygon-rpc.com",
      mumbai: "https://matic-mumbai.chainstacklabs.com",
    },
    alwaysCreateStaticProviders: true,
    setDefaultUsingApi: true,
  },
  resources: {
    default: "default",
  },
  projects: {
    require: {
      "0x0zAgency Avatars": {
        version: "1.0.0",
      },
    },
    default: {
      dev: "0x0zAgency Avatars",
    },
    useInfinityMintApi: true,
  },
};

export default config;
