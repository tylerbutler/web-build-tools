// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { loader } from 'webpack';

import { ILocFile } from '../interfaces';
import { LocFileParser } from '../utilities/LocFileParser';

export default function (this: loader.LoaderContext, content: string): string {
  const locFilePath: string = this.resourcePath;

  const locFileData: ILocFile = LocFileParser.parseLocFile({
    filePath: locFilePath,
    loggerOptions: { writeError: this.emitError, writeWarning: this.emitWarning },
    content
  });
  const resultObject: { [stringName: string]: string } = {};
  for (const stringName in locFileData) { // eslint-disable-line guard-for-in
    resultObject[stringName] = locFileData[stringName].value;
  }

  return JSON.stringify(resultObject);
}