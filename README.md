# zendesk-authorization-base64-encoder

This utility helps you encode your Zendesk API authentication credentials into a Base64 string. It is especially useful in scenarios involving low-code or no-code platforms that might not natively support such encoding mechanisms.

## Features

- Generate Base64-encoded authentication strings for use with the Zendesk API.
- Simple command-line interface for quick encoding.
- Ideal for integration into automated scripts or low-code platforms.

## Prerequisites

Before using this utility, ensure you have Node.js installed on your system. You can download Node.js from [here](https://nodejs.org/).

## Installation

Clone the repository to your local machine using:

```bash
git clone https://github.com/shawilly/zendesk-authorization-base64-encoder.git
cd zendesk-authorization-base64-encoder
```

Install the required dependencies:

```bash
npm install
```

## Usage

To encode your Zendesk API credentials, run the script with your email and API token as arguments:

```bash
npm run tokenize <your-email> <your-api-token>
```

Example:

```bash
npm run tokenize jdoe@example.com abcdefghijklmnopqrstuvwxyz
```

The script will output a Base64-encoded string that you can use as the Authorization header for API requests.

## How It Works

The utility takes your email and API token, combines them into a string formatted as `email/token:token`, and then encodes this string in Base64.

## Background

Zendesk API requires authentication for accessing its endpoints, which typically involves sending a Base64-encoded header. This utility simplifies the creation of this encoded string.

## Authentication with Zendesk API

### Basic Authentication

For basic authentication, you would normally combine your email address and password:

```
email:password
```

and then encode it in Base64. However, when using API tokens, the format becomes:

```
email/token:token
```

### Including the Token in Requests

To use the encoded token in HTTP requests, you include it in the Authorization header like so:

```http
Authorization: Basic {base64-encoded-string}
```

For example:

```http
Authorization: Basic amRvZUBleGFtcGxlLmNvbTpwYSQkdzByZA==
```

### Important Notes

- Ensure password access is enabled in the Zendesk Admin Center under Apps and integrations > APIs.
- If your organization uses SSO or two-factor authentication, you cannot use basic authentication with your password. You will need to use an API token or an OAuth access token instead.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues to improve the utility or suggest new features.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/shawilly/zendesk-authorization-base64-encoder/blob/main/LICENSE) file for details.

---

For more information on authenticating API requests with Zendesk, refer to the official [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/).

Happy encoding!
