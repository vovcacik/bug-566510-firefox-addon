var bug566510_TabContextMenu = {
    /**
     * It just hooks on popupshowing event of tab context menu and updates
     * the 'multiselection' attribute of (all) elements.
     */
    updateContextMenu: function(event) {
        TabContextMenu.updateContextMenu(event);

        var menuItems = document.getElementsByAttribute("multiselection", "*");
        var contextTabs = TabContextMenu.contextTab.multiselected ? gBrowser.selectedTabs : [TabContextMenu.contextTab];
        var multiselection = contextTabs.length > 1;
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].setAttribute("multiselection", multiselection);
        }
    }
}
