# WIFI PRESENCE WITH MAC ADDRESS

> get mac list by `arp` command and nodejs work as a filter

## Purpose

Work with [homebridge-wifipresence](https://github.com/llun/homebridge-wifipresence) for detecting if the specified mac address is present.

## How to run?

* Execute `arp -a > temp.txt && node macParser.js` for single run 

* Add it in crontab list of device like rpi as `*/1 * * * * $ENV_PATH/arp -a > $FULL_PATH/temp.txt && $ENV_PATH/node $FULL_PATH/macParser.js`

## Export file:

presence.wifi