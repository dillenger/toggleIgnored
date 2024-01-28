var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var Services = globalThis.Services || ChromeUtils.import("resource://gre/modules/Services.jsm");
var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);

var toggleIgnoredApi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    let recentWindow = Services.wm.getMostRecentWindow("mail:3pane");
    return {
      toggleIgnoredApi: {
        async toggleIgnored() {
          recentWindow.goDoCommand('cmd_viewIgnoredThreads');
        },
      },
    };
  }
};
