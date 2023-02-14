<div id="top"></div>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
<a href="https://github.com/philips-software/sbom-tool-installer-action/actions"><img alt="sbom-tool-installer-action status" src="https://github.com/philips-software/sbom-tool-installer-action/workflows/build-test/badge.svg"></a>

</div>

<br />
<div align="center">
  <h3 align="center">SBOM-Tool-Installer-Action</h3>

  <p align="center">
    GitHub Action that installs and sets up the <a href="https://github.com/microsoft/sbom-tool">Microsoft SBOM Tool</a>.
    <br>
    <a href="https://github.com/philips-software/sbom-tool-installer-action/issues">Report Bug</a>
    ·
    <a href="https://github.com/philips-software/sbom-tool-installer-action/issues">Request Feature</a>
  </p>
</div>

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

The easiest way to use this action is to add the following into your workflow file.

1. Add the following part in your workflow file:

```YAML
  jobs:
    generate-sbom:
      runs-on: windows-latest
      steps:
        - uses: philips-software/sbom-tool-installer-action@v1.0.0
        - run: |
            sbom-tool -h
```

Refer to <a href="https://github.com/microsoft/sbom-tool">SBOM-Tool</a> official documentation to learn how to set up the SBOM-Tool itself.

## Inputs

| parameter | description | required | default |
| - | - | - | - |
| version | Version of the SBOM-Tool you wish to install | `true` | 'latest' |

## Outputs

| parameter | description |
| - | - |
| tool_path | Path where the tool was installed to. Mostly used for debugging. |

## Contributing

If you have a suggestion that would make this project better, please fork the repository and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

More details on contributing can be found in the [CONTRIBUTING.md](/CONTRIBUTING.md) file.

## License

Distributed under the MIT License. See [LICENSE](/LICENSE) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/philips-software/sbom-tool-installer-action.svg?style=for-the-badge
[contributors-url]: https://github.com/philips-software/sbom-tool-installer-action/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/philips-software/sbom-tool-installer-action.svg?style=for-the-badge
[forks-url]: https://github.com/philips-software/sbom-tool-installer-action/network/members
[stars-shield]: https://img.shields.io/github/stars/philips-software/sbom-tool-installer-action.svg?style=for-the-badge
[stars-url]: https://github.com/philips-software/sbom-tool-installer-action/stargazers
[issues-shield]: https://img.shields.io/github/issues/philips-software/sbom-tool-installer-action.svg?style=for-the-badge
[issues-url]: https://github.com/philips-software/sbom-tool-installer-action/issues
[license-shield]: https://img.shields.io/github/license/philips-software/sbom-tool-installer-action.svg?style=for-the-badge
[license-url]: https://github.com/philips-software/sbom-tool-installer-action/blob/main/LICENSE
