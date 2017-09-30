import * as md5 from 'md5-file';
import * as pify from 'pify';
import * as util from 'util';

export const getFileHash: (file: string) => Promise<string> = (file: string) => (util.promisify || pify)(md5)(file);
