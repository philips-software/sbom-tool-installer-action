import {DownloadBinary, AddExecutionPermission} from '../src/installer'
import * as path from 'path'
import {expect, it, describe, afterEach, beforeAll} from '@jest/globals'
import * as io from '@actions/io'
import fs from 'fs'

describe('win32 platform', () => {
  beforeAll(async () => {
    await io.rmRF('./__tests__/temp-files/')
  })
  afterEach(async () => {
    await io.rmRF('./__tests__/temp-files/')
  })

  it('should download latest windows binary', async function () {
    // Arrange
    const tempDownloadFolder: string =
      'temp_' + Math.floor(Math.random() * 2000000000)
    const tempDir: string = path.join(
      './__tests__/temp-files/',
      tempDownloadFolder
    )
    await io.mkdirP(tempDir)
    var expectedToolDir = path.join(tempDir, 'sbom-tool.exe')

    // Act
    var url = await DownloadBinary('win32', 'x64', 'latest', tempDir)

    //Assert
    expect(url).toEqual(expectedToolDir)
    expect(fs.existsSync(expectedToolDir)).toBe(true)
  })
})

describe('osx platform', () => {
  beforeAll(async () => {
    await io.rmRF('./__tests__/temp-files/')
  })
  afterEach(async () => {
    await io.rmRF('./__tests__/temp-files/')
  })

  it('should download latest macos binary', async function () {
    // Arrange
    const tempDownloadFolder: string =
      'temp_' + Math.floor(Math.random() * 2000000000)
    const tempDir: string = path.join(
      './__tests__/temp-files/',
      tempDownloadFolder
    )
    await io.mkdirP(tempDir)
    var expectedToolDir = path.join(tempDir, 'sbom-tool')

    // Act
    var url = await DownloadBinary('darwin', 'x64', 'latest', tempDir)
    AddExecutionPermission(url)

    //Assert
    expect(url).toEqual(expectedToolDir)
    expect(fs.existsSync(expectedToolDir)).toBe(true)
  })
})

describe('with invalid parameters', () => {
  beforeAll(async () => {
    await io.rmRF('./__tests__/temp-files/')
  })
  afterEach(async () => {
    await io.rmRF('./__tests__/temp-files/')
  })
  it('should throw exception when invalid version', async () => {
    // Arrange
    const tempDownloadFolder: string =
      'temp_' + Math.floor(Math.random() * 2000000000)
    const tempDir: string = path.join(
      './__tests__/temp-files/',
      tempDownloadFolder
    )
    await io.mkdirP(tempDir)

    await expect(
      DownloadBinary('win32', 'x64', '123123123', tempDir)
    ).rejects.toThrowError('Unexpected HTTP response: 404')
  })
  it('should throw exception when unknown platform', async () => {
    // Arrange
    const tempDownloadFolder: string =
      'temp_' + Math.floor(Math.random() * 2000000000)
    const tempDir: string = path.join(
      './__tests__/temp-files/',
      tempDownloadFolder
    )
    await io.mkdirP(tempDir)

    var invalidPlatform: string = 'invalid-platform'
    await expect(
      DownloadBinary(invalidPlatform, 'x64', 'latest', tempDir)
    ).rejects.toThrowError(`Unexpected OS '${invalidPlatform}'`)
  })
})
