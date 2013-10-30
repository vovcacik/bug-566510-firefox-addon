feature/observers
=================

This branch implements two observers:
 - **multiselectionBroadcaster** changes state on multi selection/deselection.
 - **multiselectionContextBroadcaster** is same like above, but requires the change
 to occur in appropriate context (currently tab context menu, but can be extended).

Attributes to change:
 - **multiselection** (used by some css rules)
