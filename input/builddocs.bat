@echo off

set root=..\docs\

::::::::::::: Make HTML

:: Build html docs
sphinx-build -P -b html -d \doctrees\ -a . %root%
rmdir /s /q \doctrees\
del %root%\.buildinfo
del %root%\objects.inv