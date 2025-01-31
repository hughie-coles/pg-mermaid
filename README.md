# 🐘 `pg-mermaid-hc`

`Mermaid` diagram generator for `PostgreSQL` database schema.

> **Warning**
>
> Experimental version, work in progress

## Prerequisites

- node (`>=14.15.0` LTS)
- npm (`>=5.2.0`)

## Usage

```shell
npx pg-mermaid-hc --help
```

```
Usage: pg-mermaid-hc [options]

Options:
  -d, --dbname <dbname>          database name to connect to
  -U, --username <username>      username to connect to the database
  -h, --host <hostname>          host address of the database (default: "127.0.0.1")
  -p, --port <port>              port number at which the instance is listening (default: "5432")
  --schema <schema>              schema name to generate to (default: "public")
  --output-path <outputPath>     output path to generate to (default: "./database.md")
  --excluded-tables <tables...>  tables to exclude
  --help                         display help for command

Environment variables:
  PGPASSWORD                     password to be used if the server demands password authentication
```

### Example call

```shell
 PGPASSWORD=<password> npx pg-mermaid-hc --dbname <dbname> --username <username>
```

### Example result

cf. [examples/database.md](https://github.com/hughie-coles/pg-mermaid-hc/blob/main/examples/database.md)

## Development

This project was generated with [Nx](https://nx.dev).

### Prerequisites

- pnpm (`>=6.0.0`)

### Install dependencies

```shell
pnpm install
```

### Run `pg-mermaid-hc` executable

#### Build to convert TypeScript script in JavaScript then run script with `node`

```shell
nx build cli
node dist/packages/cli/src/index.js
```

#### Or run TypeScript script directly with `tsx`

```shell
tsx packages/cli/src/index.ts
```

### Run tests

```shell
nx test cli
```
