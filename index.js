#! /usr/bin/env node

var program = require('commander')
var tivo = require('tivo-remote')

var channel

program
  .version('0.0.1')
  .arguments('(channel)')
  .option('-i, --ir', 'Send an IR Command')
  .option('-k, --keyboard', 'Send Keyboard Input')
  .option('-t, --teleport', "Teleport to tivo, livetv, guide, or nowplaying")
  .action((a) => {
    channel = a
  })
  .parse(process.argv)


tivo
  .on('founddevice', (device) => {
    console.log(`Found ${device.name} (${device.ip})`)
    if (program.ir) {
      console.log(`Sending IR code: ${channel}...`)
      device.sendIrcode(channel.toUpperCase())
    } else if (program.keyboard) {
      console.log(`Sending keyboard code: ${channel}...`)
      device.sendKeyboardCode(channel.toUpperCase())
    } else if (program.teleport) {
      console.log(`Navigating to to ${channel}...`)
      device.teleport(channel.toUpperCase())
    } else {
      console.log(`Setting to ${channel}...`)
      device.teleport('LIVETV')
      device.setChannel(channel, true)
    }
    setTimeout(() => { process.exit(0) }, 50)
  })
  .discover()