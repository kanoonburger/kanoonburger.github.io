KANOON DIGITAL MENU — SMALL UPDATE (14 OCT 2026)

CHANGES:
1) Hide DRINK001 (Chat Cola) from the drinks category, without deleting its data.
2) Show a bilingual/trilingual note next to the "Family Offers" category title:
   Arabic: العروض متاحة حتى 31/10/2026
   English: Offers available until 31 Oct 2026
   Hebrew: המבצעים בתוקף עד 31.10.2026
3) Keep all previous hidden items: BEEF010 (Monster Burger), FAMILY002 (Abu Shreek), FAMILY003 (Mixed Sandwich).
4) Other drinks, family offers, and prices are unchanged.

HOW TO INSTALL:
1) Unzip the archive.
2) Copy its app/ folder into your Kanoon project (kanoonburger.github.io) and choose Replace.
3) Run npm run dev:local to verify the changes.
4) Run in PowerShell: $env:GITHUB_PAGES="true"; npm run build:pages
5) After passing the checks, use VS Code Source Control > Commit > Sync Changes.

NOTE: The Oct 31 date is DISPLAY TEXT ONLY. Family offers DO NOT auto-hide after the date.
