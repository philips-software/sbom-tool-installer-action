import * as core from '@actions/core'
import * as io from '@actions/io'
import * as os from 'os'
import {AddExecutionPermission, AddToCache, DownloadBinary} from './installer'
import * as tc from '@actions/tool-cache'
import * as path from 'path'
import assert from 'assert'

async function run(): Promise<void> {
  try {
    const architecture: string = os.arch()
    const platform: string = os.platform()
    const version = core.getInput('version')
    const tempDownloadFolder = `temp_${Math.floor(Math.random() * 2000000000)}`
    const tempDirectory = process.env['RUNNER_TEMP'] || ''
    assert.ok(tempDirectory, 'Expected RUNNER_TEMP to be defined')
    const tempDir: string = path.join(tempDirectory, tempDownloadFolder)
    await io.mkdirP(tempDir)

    // check cache
    let toolPath: string
    toolPath = tc.find('sbom-tool', version, architecture)

    // If not found in cache, download
    if (toolPath) {
      core.info(`Found in cache @ ${toolPath}`)
    } else {
      toolPath = await DownloadBinary(platform, architecture, version, tempDir)
      AddExecutionPermission(toolPath)
      await AddToCache(tempDir, version, architecture)
    }
    core.setOutput('tool_path', toolPath)
    core.addPath(tempDir)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
