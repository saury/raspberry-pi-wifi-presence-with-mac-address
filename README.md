# Raspberry Pi wifi presence with mac address

> get mac list by `nmap` command and nodejs as a filter, work with [homebridge-wifipresence](https://github.com/llun/homebridge-wifipresence) for detecting the wifi presence in your home app

## Purpose

Work with [homebridge-wifipresence](https://github.com/llun/homebridge-wifipresence) for detecting if the specified mac address is present.

## How to run?

* make sure nodejs has been installed

* Check if `nmap` is available, if not try `sudo apt-get install nmap`

* Execute `nmap -sP 192.168.1.0/24　&& node macParser.js` for single run to check if `presence.wifi` has been changed

* Add task in your crontab list of device like rpi as `*/1 * * * * $PATH/nmap -sP 192.168.1.0/24 && $PATH/node $REPO_PATH/macParser.js`

* Follow [homebridge-wifipresence](https://github.com/llun/homebridge-wifipresence) instruction for installing homebridge plugin, finish the configuration and have fun!

## Remark

This script is set for raspberry pi, if any error occurs for showing the path error info, please check your arp cache list's path and replace it in `macParser.js`