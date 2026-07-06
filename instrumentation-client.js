import TagManager from "react-gtm-module";
import config from "@config/config.json";

const tagManagerArgs = {
  gtmId: config.params.tag_manager_id,
};

setTimeout(() => {
  process.env.NODE_ENV === "production" &&
    config.params.tag_manager_id &&
    TagManager.initialize(tagManagerArgs);
}, 5000);
