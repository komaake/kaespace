import { InfinityMintClientConfig } from "infinitymint-client/dist/src/core/interfaces";
import DefaultRenderer from "infinitymint-client/dist/src/renderers/DefaultRenderer";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Pages
 */
import Stickers from "./pages/bootstrap/links/Stickers";
import TokenWallet from "./pages/bootstrap/links/TokenWallet";
import Edit from "./pages/bootstrap/Edit";
import Gallery from "./pages/bootstrap/Gallery";
import Index from "./pages/bootstrap/Index";
import Launchpad from "./pages/bootstrap/Launchpad";
import Mint from "./pages/bootstrap/Mint";
import MyTokens from "./pages/bootstrap/MyTokens";
import Preview from "./pages/bootstrap/Preview";
import Settings from "./pages/bootstrap/Settings";
import View from "./pages/bootstrap/View";

/**
 * Initial Component
 */
import DefaultBootstrap from "./meta/DefaultBootstrap";
export const InitialComponent = DefaultBootstrap;

const config: InfinityMintClientConfig = {
  sitemap: [
    Stickers,
    TokenWallet,
    Edit,
    Gallery,
    Index,
    Launchpad,
    Mint,
    MyTokens,
    Preview,
    Settings,
    View,
  ] as any,
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
