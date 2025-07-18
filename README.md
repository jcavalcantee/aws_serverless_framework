# AWS Lambda League of Legends Champion API

This project uses the **Serverless Framework** to deploy a Lambda function that retrieves **League of Legends champion data** from Riot Games' **Data Dragon API**.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Deploying the Project](#deploying-the-project)
- [Testing the API](#testing-the-api)
- [Result](#result)
- [Notes](#notes)

---

## Introduction

This project sets up a simple AWS Lambda function using the **Serverless Framework** to fetch champion data for **League of Legends** from Riot's **Data Dragon** API. You can query champion data by name, and it will return relevant information such as abilities, stats, and lore.

---

## Prerequisites

Before you begin, ensure that you have the following installed:

1. **Node.js** (v16.x or higher) - [Install Node.js](https://nodejs.org/)
2. **npm** (Node Package Manager) - Comes with Node.js installation
3. **AWS CLI** - [Install AWS CLI](https://aws.amazon.com/cli/)
4. **Serverless Framework** - [Install Serverless Framework](https://www.serverless.com/framework/docs/getting-started/)
   - To install Serverless Framework globally:
     ```bash
     npm install -g serverless
     ```

5. **AWS Account** - You'll need access to an AWS account. Ensure your credentials are configured with AWS CLI:
   ```bash
   aws configure
## Installation

1. **Clone the repository** or create a new Serverless project:

   ```bash
   git clone https://github.com/jcavalcantee/aws_serverless_framework
   cd your-project-directory
   
## Configuration

This project uses the **Serverless Framework** to deploy the Lambda function. The main configuration is defined in `serverless.yml`. Here's an overview of the key parameters:

```yaml
org: your-org
service: awslambda

provider:
  name: aws
  runtime: nodejs20.x
  stage: dev
  region: us-east-1

functions:
  getChampion:
    handler: handler.getChampion
    memorySize: 128
    timeout: 5
    description: Lambda function to get champion data from League of Legends API.
    architecture: arm64
    environment:
      STAGE: ${opt:stage, 'dev'}
    events:
      - httpApi:
          path: /champion
          method: get

```
## Deploying the Project

To deploy the project to AWS:

1. **Deploy the Lambda function**:

   ```bash
   serverless deploy

## Testing the API

Once the Lambda function is deployed, you can test it by sending a `GET` request to the endpoint.

1. **Open your browser** and visit the endpoint with a query parameter:

    ```bash
    https://your_gateway_api_route.amazonaws.com/champion?champion=Ahri

    Replace `Ahri` with the name of any champion in League of Legends.

## Result

When you send a `GET` request with a valid champion name (e.g., `Ahri`, `Yasuo`, etc.), the Lambda function will fetch the champion's data from the **Data Dragon API** and return a structured JSON with information such as:

- Champion **ID**
- **Title** and **Lore**
- **Stats** (Health, Armor, etc.)
- And more...

1. **Example response** (in JSON format):

  ```json
  {
    "message": "Here is the data for Ahri!",
    "data": {
      "id": "Ahri",
      "key": "103",
      "name": "Ahri",
      "title": "the Nine-Tailed Fox",
      "blurb": "Ahri is a mobile mage with high burst potential...",
      "stats": {
        "hp": 526,
        "mp": 418,
        "armor": 20.88,
        "magicResist": 30,
        "attackDamage": 53.04,
        "attackSpeed": 0.668
      }
    }
  }
```

## Notes

- The project uses the **Data Dragon API**, which is a **public API** and does not require authentication.
- The project is deployed on **AWS Lambda**, meaning there are no servers to manage.
- You can update the **API version** and champion data URL by modifying the code if necessary.
- If you wish to deploy it to a different AWS region or change configurations, simply adjust the settings in the `serverless.yml` file.



