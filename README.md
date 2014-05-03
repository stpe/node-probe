node-probe
==========

Simple one-off probe script for making HTTP HEAD requests to a bunch of URLs.

Protip: Hook it up with the [Heroku Scheduler](https://devcenter.heroku.com/articles/scheduler) to have it run every X minutes.

The most obvious use is for keeping 1X web dyno Heroku apps alive, without having to mess with Pingdom, New Relic etc.
