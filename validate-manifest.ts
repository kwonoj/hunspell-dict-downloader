//tslint:disable:no-console
import { expect } from 'chai';
import * as fs from 'fs-extra';
import { CODE_LANG_REGION, createDownloader, enableLogger } from './src/index';

(async () => {
  enableLogger(console.log.bind(console));

  await fs.emptyDir('./.tmp');

  console.log('Validating manifest match');
  const downloader = await createDownloader('./.tmp');

  for (const dict of downloader.availableDictionaries as Array<CODE_LANG_REGION>) {
    console.log(`Installing '${dict}'...`);
    const installed = await downloader.installDictionary(dict);
    expect(downloader.dictionaryLocation[dict]).to.deep.equal(installed);
    console.log(`Successfully installed under`, installed);
  }

  expect(downloader.availableDictionaries.length).to.equal(downloader.installedDictionaries.length);

  for (const dict of downloader.availableDictionaries as Array<CODE_LANG_REGION>) {
    console.log(`Uninstalling '${dict}'...`);
    await downloader.uninstallDictionary(dict);
    console.log(`Successfully uninstalled`);
  }

  await downloader.clearCache();

  expect(downloader.installedDictionaries).to.be.empty;
  expect(downloader.dictionaryLocation).to.be.empty;
})();
