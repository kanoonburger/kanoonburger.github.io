Kanoon Digital Menu — إصلاح تداخل صور بداية الصفحة على iPhone

الملفات: app/globals.css فقط.

المشكلة: في متصفح Instagram على iPhone، قد تتجاوز صور بداية الموقع ارتفاع المعرض وتظهر خلف مربع العنوان والسلة.
الحل: تقييد ارتفاع صفوف الصور وقص أي تمدد زائد داخل المعرض في الشاشات بعرض 760px أو أقل، دون تعديل الموقع على الكمبيوتر.

طريقة التركيب:
1) فك ضغط الملف.
2) انسخ مجلد app إلى مجلد kanoonburger.github.io واختر Replace.
3) تحقق محليا بالأمر npm run dev:local.
4) نفذ $env:GITHUB_PAGES="true"; npm run build:pages
5) بعد النجاح ارفع Source Control -> Commit -> Sync Changes.
6) جرّب رابط الموقع على iPhone من داخل Instagram وتحقق أن مربع العنوان والسلة بالكامل أسفل معرض الصور.

رسالة Commit:
Fix iPhone hero photo overlap with address and cart

ملاحظة: هذا ملف ترقيع مبني على آخر globals.css من نسخة المشروع التي قدمتها، ويغير CSS فقط.
