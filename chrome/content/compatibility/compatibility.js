/**
 * Compatibility measures.
 */
var bug566510_Compatibility = {
    onLoad: function () {
        if ("Tabmix" in window) this.tabmixplus();
    },
    tabmixplus: function () {
        /**
         * Tab Mix Plus overrides closing other tabs, so the corresponding tab context menu item should stop
         * observing multiselection broadcaster (as it does not support multiselection at that point).
         * @see https://bitbucket.org/onemen/tabmixplus/src/50ff9df56e16d8f9bf338958a98f035b6ec46ff5/chrome/content/minit/tablib.js?at=default#cl-1047
         */
        try {
            var closeOtherTabs = document.getElementById("context_closeOtherTabs");
            if (closeOtherTabs.hasAttribute("observes") && 
                closeOtherTabs.getAttribute("observes") === "multiselectionContextBroadcaster") {
                    closeOtherTabs.removeAttribute("observes");
            }
        } catch (e) {}
    }
}

window.addEventListener("load",function(){bug566510_Compatibility.onLoad();},false);
