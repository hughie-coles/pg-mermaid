#!/usr/bin/env node

import { getOptions } from './command';
import {
  createConnection,
  getEntities,
  getIndexes,
  getRelationships,
} from './database';
import { generateMarkdown } from './markdown';
import { generateDiagram } from './mermaid';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export const main = async () => {
  const {
    dbname,
    excludedTables = [],
    host,
    outputPath,
    password,
    port,
    schema,
    username,
    mermaidOnly
  } = getOptions();

  const connection = await createConnection({
    dbname,
    host,
    password,
    port,
    username,
  });

  const entities = await connection.any(
    getEntities({ excludedTables, schema })
  );
  const relationships = await connection.any(
    getRelationships({ excludedTables, schema })
  );
  const indexes = await connection.any(getIndexes({ excludedTables, schema }));

  const diagram = generateDiagram({ entities, relationships });

  const markdown = generateMarkdown({ diagram, indexes });

  if(mermaidOnly === true){
    await fs.writeFile(outputPath, diagram);  
  }
  else{
    await fs.writeFile(outputPath, markdown);
  }

  await connection.end();
};

main();
