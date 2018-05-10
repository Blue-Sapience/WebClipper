import {ClientType} from "../../clientType";
import {WebExtension} from "../webExtensionBase/webExtension";

WebExtension.browser = chrome;
let clipperBackground = new WebExtension(ClientType.FirefoxExtension, {
	debugLoggingInjectUrl: "firefoxDebugLoggingInject.js",
	webClipperInjectUrl: "firefoxInject.js",
	pageNavInjectUrl: "firefoxPageNavInject.js"
});
