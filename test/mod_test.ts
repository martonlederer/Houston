import { ConsoleTransport, FileTransport, Format, Houston, LogLevel } from '../mod.ts'

const Logger = new Houston([

  new ConsoleTransport(),
  new FileTransport('/home/marton/Downloads/logs')

], { format: Format.json })

Logger.log(LogLevel.Info, 'This is an info')
Logger.log(LogLevel.Success, 'This is a success notice')
Logger.log(LogLevel.Warning, 'This is a warning')
Logger.log(LogLevel.Error, 'This is an error')