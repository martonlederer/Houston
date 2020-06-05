/*
 * Copyright (c) 2020 · Marton Lederer
 * This file was created / generated by Marton Lederer
 * See the LICENSE on the github repo
 * https://github.com/MartonDev
 * https://marton.lederer.hu
 */

/*
*
* Helper enum to use colors with console.log
*
* */
export enum Color {

  Red = '\x1b[31m',
  Green = '\x1b[32m',
  Blue = '\x1b[34m',
  Yellow = '\x1b[33m',
  Purple = '\x1b[35m',
  Cyan = '\x1b[36m',
  Black = '\x1b[30m',
  White = '\x1b[37m'

}

/*
*
* Helper enum to use different styles with console.log
*
* */
export enum Style {

  Reset = '\x1b[0m',
  Bright = '\x1b[1m',
  Dim = '\x1b[2m',
  Underline = '\x1b[4m',
  Blink = '\x1b[5m',
  Reverse = '\x1b[7m',
  Hidden = '\x1b[8m'

}

/*
*
* Helper enum to use different background colors with console.log
*
* */
export enum Background {

  Red = '\x1b[41m',
  Green = '\x1b[42m',
  Blue = '\x1b[44m',
  Yellow = '\x1b[43m',
  Purple = '\x1b[45m',
  Cyan = '\x1b[46m',
  Black = '\x1b[40m',
  White = '\x1b[47m'

}