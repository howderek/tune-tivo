# tune-tivo

Control your TiVo from the command line. I wrapped [tivo-remote](https://github.com/forty2/tivo-remote) with [commander](https://github.com/tj/commander.js/) and called it a day.

Tune to channel 42: `tune-tivo 42`

Go to the guide: `tune-tivo -t guide`

Usage:

```
  Usage: tune-tivo [options]


  Options:

    -V, --version   output the version number
    -i, --ir        Send an IR Command
    -k, --keyboard  Send Keyboard Input
    -t, --teleport  Teleport to tivo, livetv, guide, or nowplaying
    -h, --help      output usage information
```