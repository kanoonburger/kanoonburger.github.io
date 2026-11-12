Kanoon Digital Menu — Instagram Link Update

التحديث فقط لرابط إنستغرام الجديد:
https://www.instagram.com/kanoorestaurant.ps/

طريقة الاستخدام:
1. فك ضغط ZIP.
2. انسخ مجلد app إلى مجلد مشروع kanoonburger.github.io واختر Replace.
3. شغّل npm run dev:local وافحص أيقونة إنستغرام أسفل الصفحة.
4. بعد الاختبار نفّذ في PowerShell داخل مجلد المشروع:
   $env:GITHUB_PAGES="true"; npm run build:pages
5. ارفع من Source Control > Commit > Sync Changes.

الملف المعدّل الوحيد: app/data/restaurant.ts
لم نغيّر فيسبوك أو تيك توك أو واتساب أو الأصناف أو الأسعار أو الصور.
