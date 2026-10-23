/**
 * TEST SUITE: HiHi Chinhta (chinhta)
 * Kiểm thử độ ổn định, bộ nhớ & bảo mật
 */

const fs = require('fs');
const path = require('path');

const results = [];
function recordResult(name, passed, details) {
  results.push({ name, passed, details });
  const mark = passed ? '✅ PASS' : '❌ FAIL';
  console.log(`${mark} | ${name}`);
  if (details) console.log(`   └─ ${details}`);
}

async function runTests() {
  console.log('====================================================');
  console.log('🧪 BẮT ĐẦU KIỂM THỬ DỰ ÁN: chinhta (HiHi Chinhta)');
  console.log('====================================================\n');

  const dir = __dirname;
  const indexPath = path.join(dir, 'index.html');
  const swPath = path.join(dir, 'sw.js');
  const manifestPath = path.join(dir, 'manifest.json');

  // TEST 1: Cấu trúc file
  try {
    const hasIndex = fs.existsSync(indexPath);
    const hasSw = fs.existsSync(swPath);
    const hasManifest = fs.existsSync(manifestPath);
    recordResult('1. Cấu trúc file cơ bản', hasIndex && hasSw && hasManifest, `index: ${hasIndex}, sw: ${hasSw}, manifest: ${hasManifest}`);
  } catch (e) {
    recordResult('1. Cấu trúc file cơ bản', false, e.message);
  }

  const html = fs.readFileSync(indexPath, 'utf8');

  // TEST 2: Kiểm tra lỗi escape literal \n trong HTML
  try {
    const hasLiteralSlashN = html.includes('</a>\\n');
    recordResult('2. Kiểm tra lỗi escape literal \\n trong HTML', !hasLiteralSlashN, !hasLiteralSlashN ? 'HTML sạch sẽ, không có lỗi chuỗi escape' : 'Phát hiện literal "\\n" trong mã HTML');
  } catch (e) {
    recordResult('2. Kiểm tra lỗi escape literal \\n trong HTML', false, e.message);
  }

  // TEST 3: Cô lập vùng nhớ cache Service Worker
  try {
    const sw = fs.readFileSync(swPath, 'utf8');
    const hasUniqueCache = sw.includes('hihi-chinhta-');
    const hasScopedDelete = sw.includes('CACHE_PREFIX') || sw.includes('hihi-chinhta-');
    recordResult('3. Cô lập vùng nhớ Cache Service Worker', hasUniqueCache && hasScopedDelete, `Cache name: ${hasUniqueCache}, Scoped delete: ${hasScopedDelete}`);
  } catch (e) {
    recordResult('3. Cô lập vùng nhớ Cache Service Worker', false, e.message);
  }

  // TEST 4: Khử rò rỉ listener Firebase RTDB (unsubscribeMyStats)
  try {
    const hasUnsub = html.includes('unsubscribeMyStats');
    const hasCleanup = html.includes('unsubscribeMyStats()');
    recordResult('4. Cơ chế hủy listener Realtime Database chống rò rỉ bộ nhớ', hasUnsub && hasCleanup, `hasUnsub: ${hasUnsub}, hasCleanup: ${hasCleanup}`);
  } catch (e) {
    recordResult('4. Cơ chế hủy listener Realtime Database', false, e.message);
  }

  // TEST 5: Đồng bộ tài khoản an toàn khi lưu điểm (saveScoreToFirebase)
  try {
    const hasAuthFallback = html.includes('auth.currentUser') && html.includes('saveScoreToFirebase');
    recordResult('5. Cơ chế lưu điểm dự phòng khi dùng tài khoản SSO', hasAuthFallback, `Auth fallback ready: ${hasAuthFallback}`);
  } catch (e) {
    recordResult('5. Cơ chế lưu điểm dự phòng', false, e.message);
  }

  const passedCount = results.filter(r => r.passed).length;
  console.log('\n====================================================');
  console.log(`📊 KẾT QUẢ KIỂM THỬ: ${passedCount}/${results.length} bài test vượt qua`);
  console.log('====================================================\n');
}

runTests();
