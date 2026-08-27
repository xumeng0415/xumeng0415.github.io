// 构建后处理：把"假主页"放到站点根目录，并补齐 GitHub Pages 所需的 CNAME / .nojekyll
// 真实作品集由 vite 构建在 dist/works/，根目录只放伪装首页。
import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const decoySrc = resolve(root, 'decoy/index.html');
const cnameSrc = resolve(root, 'public/CNAME');
const nojekyllSrc = resolve(root, 'public/.nojekyll');
const distDir = resolve(root, 'dist');

mkdirSync(distDir, { recursive: true });

if (!existsSync(decoySrc)) {
  throw new Error('[postbuild] 未找到 decoy/index.html');
}
copyFileSync(decoySrc, resolve(distDir, 'index.html'));
console.log('[postbuild] 已写入 dist/index.html（伪装首页）');

if (existsSync(cnameSrc)) {
  copyFileSync(cnameSrc, resolve(distDir, 'CNAME'));
  console.log('[postbuild] 已复制 CNAME -> dist/CNAME');
}
if (existsSync(nojekyllSrc)) {
  copyFileSync(nojekyllSrc, resolve(distDir, '.nojekyll'));
  console.log('[postbuild] 已复制 .nojekyll -> dist/.nojekyll');
}

// 列出最终 dist 顶层结构，便于核对
const top = [];
for (const name of ['index.html', 'CNAME', '.nojekyll', 'works']) {
  if (existsSync(resolve(distDir, name))) top.push(name);
}
console.log('[postbuild] dist 根目录关键项: ' + top.join(', '));
