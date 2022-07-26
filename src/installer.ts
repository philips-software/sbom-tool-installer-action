import * as tc from '@actions/tool-cache'
import * as core from '@actions/core'
import * as path from 'path'
import fs from 'fs'

interface Download {
  url: string
  extension: string
}

export async function DownloadBinary(
  platform: string,
  architecture: string,
  version: string,
  tempDir: string
): Promise<string> {
  try {
    const download: Download = buildDownloadUrl(version, platform, architecture)
    return await tc.downloadTool(
      download.url,
      path.join(tempDir, `sbom-tool${download.extension}`)
    )
  } catch (err) {
    if (err instanceof tc.HTTPError && err.httpStatusCode === 404) {
      core.error(
        `could not find the sbom-tool for this version: ${version} and platform: ${platform}`
      )
    }

    throw err
  }
}

function buildDownloadUrl(
  version: string,
  platform: string,
  architecture: string
): Download {
  const download: Download = {
    url: `https://github.com/microsoft/sbom-tool/releases/${version}/download/sbom-tool-`,
    extension: ''
  }

  switch (platform) {
    case 'linux':
      download.url += `linux-${architecture}`
      break
    case 'darwin':
      download.url += `osx-${architecture}`
      break
    case 'win32':
      download.url += `win-${architecture}.exe`
      download.extension = '.exe'
      break
    default:
      throw new Error(`Unexpected OS '${platform}'`)
  }
  return download
}

export async function AddToCache(
  toolPath: string,
  resolvedVersion: string,
  architecture: string
): Promise<string> {
  core.info('Adding to the cache ...')
  toolPath = await tc.cacheDir(
    toolPath,
    'sbom-tool',
    resolvedVersion,
    architecture
  )
  core.info('Done!')
  return toolPath
}

export function AddExecutionPermission(toolPath: string): void {
  try {
    core.info('Changing file permission to 755')
    const fd = fs.openSync(toolPath, 'r')
    fs.fchmodSync(fd, 0o755)
    core.info('File permission change succcessful')
  } catch (error) {
    core.error('something went wrong when changing permissions of the file.')
    throw error
  }
}
