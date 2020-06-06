/*
 * Copyright (c) 2020 · Marton Lederer
 * This file was created / generated by Marton Lederer
 * See the LICENSE on the github repo
 * https://github.com/MartonDev
 * https://marton.lederer.hu
 */

import { ITransport, LogLevel, Options, Config } from '../../types.ts'

/*
*
* Parent transport
*
* @param level  The levels to log with this transport
* @param options  Custom options for this transport. Same as the global options by default
* @param color
*
* */
export class Transport implements ITransport{

  level: Array<LogLevel>
  options: Options | undefined
  tempConfig: Config | undefined

  /*
  *
  * Transport
  *
  * @param level  Only log levels that are included here, logs all by default
  * @param options  Custom options, not required
  *
  * */
  constructor (level: Array<LogLevel>, config?: Config | undefined) {

    this.level = level
    this.tempConfig = config

  }

  /*
  *
  * Applying the default options from Houston.ts, if custom options aren't applied already
  *
  * @param options  The default options
  *
  * */
  applyDefaultOptions (options: Options) {

    this.options = options

    for(const option in this.tempConfig)
      if(this.options.hasOwnProperty(option))
        this.options[option] = this.tempConfig[option]

  }

  /*
  *
  * Logging if the level is added to this transport
  *
  * @param level  The level of the log message
  * @param message  The log message
  *
  * */
  log (level: LogLevel, message: string): void {}

}