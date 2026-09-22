/* =====================================================================
   ✏️ 木子團行李清單 ─ 內容設定檔（要改內容，只改這個檔案就好）
   ---------------------------------------------------------------------
   編輯規則（很重要，照著做就不會壞掉）：
   1. 文字一律放在單引號 '  ' 裡面，例如 '護照'
   2. 每一項後面要有逗號 , （最後一項可有可無）
   3. 項目想加小提醒，用 | 隔開：'護照|效期需 6 個月以上'
   4. 不要刪掉 [ ] { } 這些括號
   5. 改完上傳後，重新整理網頁就會看到
   ===================================================================== */

const CONFIG = {

  /* ---------- 首頁文字 ---------- */
  badge:    '🔒 木子團成員專屬',
  subtitle: '墨爾本行李小幫手',
  tagline:  '出發墨爾本前，先把行李整理好！',
  intro:    '不怕漏帶、不怕忘記，一份清單幫團員把澳洲旅行需要的東西整理好。',

  /* ---------- 行程資訊 ---------- */
  tripFlag:  '🇦🇺',
  tripName:  '澳洲・墨爾本',
  tripType:  '國外旅遊',
  tripDays:  '12 天',
  pageTitle: '墨爾本 🦘',
  // 預設出發日（格式 '2026-10-15'；留空 '' 就讓團員自己設定）
  departDate: '',
  // 首頁行程卡上的小標籤
  route: ['🏙️ 墨爾本市區', '🌊 大洋路', '⛏️ 淘金小鎮'],

  /* ---------- 行程頁的提醒框 ----------
     color 可選 'yellow'（黃色警告）或 'blue'（藍色資訊）
     <b>文字</b> 會變粗體 */
  tips: [
    { color: 'yellow', text: '重要證件、現金、手機與<b>行動電源</b>請放在隨身行李。行動電源不可托運。' },
    { color: 'blue',   text: '澳洲海關檢疫很嚴格：<b>肉製品、新鮮蔬果、蛋、種子</b>都不要帶；有帶食物或藥品，入境卡一律勾「Yes」申報。' },
  ],
   reminder: { show: true, name: '維良', title: '維良的叮嚀', photo: 'photos/image.png', photoFocus: '100% 55%', photoZoom: 1.55, say: '帶著愉快的心，出發囉！', item: '帶著愉快的心' },

  /* ---------- 清單內容 ----------
     分成三大類：must（必帶證件，紅色）、carry（隨身行李）、check（托運行李）
     每一類裡面有多個「小分類」，格式：
       ['小分類名稱', ['項目1', '項目2|小提醒', ...]],
  */
  lists: {

    must: {
      title: '必帶證件',
      desc:  '沒有它們就出不了門，一定要再三確認',
      sections: [
        ['必帶證件', [
          '護照|效期需 6 個月以上',
          '國際駕照|自駕大洋路必備',
          '台灣駕照|須與國際駕照一起出示',
        ]],
         ['維良的叮嚀', ['帶著愉快的心|出發囉！']],
      ],
    },

    carry: {
      title: '隨身行李',
      desc:  '登機時帶在身上的重要物品',
      sections: [
        ['文件', [
          '澳洲 ETA 電子簽證|確認已核准，與護照綁定',
          '電子機票 / 登機證',
          '住宿訂房確認',
          '租車預約確認單',
          '旅遊不便險 / 海外醫療險',
        ]],
        ['錢', [
          '信用卡|建議帶 2 張不同發卡組織',
          '澳幣現金',
          '少量台幣|回程交通用',
        ]],
        ['電子產品', [
          '手機',
          '行動電源|⚠️ 不可托運！只能放隨身行李',
          '充電線',
          '耳機',
          '網卡 / eSIM',
          '相機與記憶卡',
        ]],
        ['機上好物', [
          '外套|建議帶上飛機，萬一托運行李出狀況，身上還有外套',
          '頸枕',
          '眼罩與耳塞',
          '原子筆|填入境卡用',
        ]],
        ['藥品', [
          '個人處方藥|附英文藥名或處方說明',
        ]],
        ['重量檢查', [
          '隨身行李總重 < 7 公斤|出門前記得秤重',
        ]],
      ],
    },

    check: {
      title: '托運行李',
      desc:  '放進行李箱、交給航空公司的物品',
      sections: [
        ['衣物', [
          '短袖上衣',
          '長袖上衣',
          '保暖 / 防風外套|墨爾本一天四季，洋蔥式穿搭',
          '長褲',
          '內衣褲',
          '襪子',
          '睡衣',
          '好走的鞋子|淘金小鎮、大洋路步道',
          '拖鞋',
        ]],
        ['盥洗保養', [
          '牙刷牙膏',
          '洗面乳',
          '洗髮精 / 沐浴乳',
          '保養品',
          '防曬乳|澳洲紫外線非常強',
          '護唇膏',
          '刮鬍刀',
        ]],
        ['電器', [
          '澳洲轉接頭|八字型 Type I，電壓 230V',
          '多孔 USB 充電器',
          '小型延長線',
        ]],
        ['常備藥', [
          '感冒藥',
          '腸胃藥',
          '止痛藥',
          'OK 繃',
          '蚊蟲藥膏',
        ]],
        ['其他', [
          '太陽眼鏡',
          '折疊傘',
          '環保購物袋',
          '收納袋 / 壓縮袋',
          '髒衣袋',
          '曬衣夾 / 衣架',
        ]],
        ['重量檢查', [
          '托運行李總重 ≤ 23 公斤|超重要另外付費，出門前記得秤重',
        ]],
      ],
    },

  },
};


/* =====================================================================
   🔧 以下是 logo 圖片處理，不需要修改
   （使用 repo 裡的 logo.png，自動裁出旗子正面、背面與 MT 圖示）
   ===================================================================== */
(function () {
  var pics = document.querySelectorAll('.flag-img, .muz, .emblem'); pics.forEach(function (e) { e.style.visibility = 'hidden'; e.addEventListener('load', function () { if (e.src.indexOf('data:') === 0) e.style.visibility = ''; }); });
  var img = new Image();
  img.onload = function () {
    var sx = img.naturalWidth / 1080, sy = img.naturalHeight / 485;
    function crop(x, y, w, h) {
      var c = document.createElement('canvas');
      c.width = Math.round(w * sx); c.height = Math.round(h * sy);
      c.getContext('2d').drawImage(img, x * sx, y * sy, w * sx, h * sy, 0, 0, c.width, c.height);
      return c.toDataURL('image/png');
    }
    var front = crop(49, 73, 460, 304), back = crop(580, 74, 460, 303), mt = crop(717, 78, 186, 150);
    document.querySelectorAll('.flag-img').forEach(function (e) { e.src = front; });
    document.querySelectorAll('.muz').forEach(function (e) { e.src = back; });
    document.querySelectorAll('.emblem').forEach(function (e) { e.src = mt; });
    document.querySelectorAll('link[rel=icon], link[rel=apple-touch-icon]').forEach(function (l) { l.href = mt; });
  };
  img.onerror = function () { pics.forEach(function (e) { e.style.display = 'none'; }); };
  img.src = 'image.png?t=' + Date.now();
})();
window.addEventListener('DOMContentLoaded', function () { var R = CONFIG.reminder; if (!R || !R.show) return; var st = document.createElement('style'); st.textContent = '.wl{margin-top:16px;background:var(--card);border-radius:22px;box-shadow:var(--shadow);overflow:hidden}.wl .ph{aspect-ratio:4/3;overflow:hidden}.wl .ph img{display:block;width:100%;height:100%;object-fit:cover}.wl .in{padding:16px 18px 18px}.wl .who{font-weight:900;color:var(--green-dark);font-size:17px}.wl .say{position:relative;margin-top:12px;background:var(--green-soft);border-radius:16px;padding:12px 16px;font-size:19px;font-weight:900;color:var(--green-dark)}.wl .say::before{content:"";position:absolute;left:22px;top:-8px;border:8px solid transparent;border-top:0;border-bottom-color:var(--green-soft)}.wl .wl-check{margin-top:12px;box-shadow:none;border:2px solid var(--gold)}'; document.head.appendChild(st); var t = document.querySelector('#v-trip .sec-title'); if (t) t.insertAdjacentHTML('beforebegin', '<div id="wlCard"></div>'); function renderWL() { var box = document.getElementById('wlCard'); if (!box) return; var f = null; state.groups.must.sections.forEach(function (sec) { sec.items.forEach(function (it) { if (!f && it.name === R.item) f = { it: it, sec: sec }; }); }); if (!f) { box.innerHTML = ''; return; } var pos = R.photoFocus || '50% 50%'; box.innerHTML = '<div class="wl">' + (R.photo ? '<div class="ph"><img src="' + R.photo + '" alt="" style="object-position:' + pos + ';transform:scale(' + (R.photoZoom || 1) + ');transform-origin:' + pos + '"></div>' : '') + '<div class="in"><div class="who">💬 ' + esc(R.title) + '</div><div class="say">' + esc(R.say) + '</div><div class="items wl-check" data-group="must">' + itemRow(f.it, f.sec.id).replace(' hidden>', '>') + '</div></div></div>'; } var _r = render; render = function () { _r(); renderWL(); }; renderWL(); });
