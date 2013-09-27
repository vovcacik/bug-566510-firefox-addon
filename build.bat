@echo off
setlocal

for /F "usebackq tokens=3 delims=<>" %%v in (`type install.rdf ^| findstr /irc:"em:version"`) do (
    set version=%%v
)

7za a -tzip bug_566510_allow_multiselect_operations_on_tabs-%version%-fx.xpi @build.list
exit /B 0
