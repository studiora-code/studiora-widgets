# Studiora Planner Widgets

Seven custom widgets for Notion, built for the Finance planner and usable in the other five. They are plain HTML files. They run without accounts, ads, tracking or a server, and nothing typed into them leaves the viewer's browser.

| File | What it does | Suggested embed height |
|---|---|---|
| clock.html | Flip clock with animated paper flaps and the date | 230 |
| countdown.html | Countdown to any date (exam, deadline, savings date). Edit button to set it | 260 |
| focus.html | Focus timer, 25/5, 50/10 or 90/15, with sessions-today dots and a soft chime | 250 |
| savings.html | Savings goal: deposits, % of goal, amount to go, needed per week | 400 |
| habits.html | Seven-day discipline tracker for one habit | 170 |
| principle.html | One plain-language money principle per day (12, written for this planner) | 200 |
| compound.html | Compound growth calculator with chart. Education only, not advice | 600 |

## Settings you add to the link

All settings are optional. Example: `countdown.html?theme=cream&id=finals&kicker=Finals&label=Unit%203%20exam&date=2026-12-11T09:00`

- `theme`: `espresso` (default), `cream` or `midnight`
- `bg=transparent`: blends into the Notion page. `frame=none` removes the card border
- clock: `format=24`, `seconds=1`
- countdown: `id` (use a different one for each countdown on a page), `kicker`, `label`, `date`
- focus: `minutes=25|50|90`
- savings: `id`, `name`, `target`, `deadline=YYYY-MM-DD`, `currency=USD|EUR|GBP|...`
- habits: `habit=Logged%20spending`, `id`
- compound: `currency`

Never put real balances or personal details in a link. Typed values are saved in the browser instead.

## How to host them (free, about 10 minutes)

Notion can only show a widget that lives at a public web address. GitHub Pages is free, has run since 2008, and the files stay in your own account.

1. Make a free account at github.com.
2. Click **New repository**. Name it `studiora-widgets`, set it to **Public**, and create it.
3. Click **uploading an existing file**, drag in everything inside this folder (all files sit in the top folder), and click **Commit changes**.
4. Open **Settings > Pages**. Under Branch choose `main` and `/ (root)`, then click **Save**.
5. After about a minute your widgets are live at `https://YOUR-NAME.github.io/studiora-widgets/clock.html`. Opening `index.html` there shows them all.
6. In Notion, type `/embed`, paste a widget link, and drag the bottom edge to the suggested height.

Send me the address once it's live and I can place every widget in the planners for you.

## Selling the planner with these widgets

- Buyers who duplicate the template keep the embeds. They need no account and pay nothing extra.
- Each buyer's entries are saved in their own browser, separate from everyone else's. They don't sync between a phone and a laptop.
- Keep the GitHub repository online. If it is deleted, the embeds go blank.
- All code is original. Fonts are Cormorant Garamond and Inter (SIL Open Font License, free for commercial use) from Google Fonts. Without internet they fall back to Georgia and Arial.

## Other widget services, compared (checked October 2026)

| Service | Flip clock | Free plan | Paid | Account needed | Notes |
|---|---|---|---|---|---|
| These custom widgets | Yes | Everything | None | Only you, for hosting | No branding. You control uptime |
| indify.co | Yes (one of 8 clock styles) | 6 widgets; transparent background needs paid plan | Creator $8/month | Yes, for the creator | Most common on Pinterest planners |
| widgetbox.app | No flip style listed (digital, analog, gradient, neubrutalism) | 5 widgets | $1.49 or $2.99/month | Yes | Site says desktop only |
| blocs.me | No | Pomodoro, habit and water trackers only | $17 once | Yes | Countdown, clock and quote are Pro |
| Flocus | Not offered as Notion embeds | n/a | n/a | n/a | A focus web app, not a widget maker |
| TradingView | n/a | Free market widgets with TradingView branding | n/a | No | Market data. Should be labelled delayed/illustrative in the planner |
| Notion charts (native) | n/a | 1 chart on the free plan | Unlimited on paid plans | No | Bar, line, donut, number. Best for income and spending summaries |

## Design system

- Espresso Luxury: background #241D19, card #2E2620, text #F0E7DB, accent #C8AD85
- Warm Minimalism: background #F4EFE7, card #FBF8F3, text #241D19, accent #9C7F57
- Midnight Finance: background #17191B, card #202326, text #F2F2F0, accent #C8AD85
- Type: Cormorant Garamond for numbers and titles, Inter for labels (11px, uppercase, 0.22em tracking)
- Cards: 14px radius, 1px hairline border, no shadows, 22px padding

## Quality checks

Tested here:
- All seven widgets rendered in all three themes at desktop (720px) and phone (360px) widths, with no script errors.
- Compound math checked against the standard formula: $1,000 at 12% for 1 year = $1,126.83, $100/month at 0% for 10 years = $12,000, and $500 + $50/month at 5% for 10 years = $8,587.62.
- Bad calculator inputs show a message instead of wrong numbers.
- Keyboard focus is visible, controls have labels, and motion turns off when the device asks for reduced motion.

Still to test after hosting:
- Inside Notion on desktop, on the Notion phone app, and in Safari.
- Whether the browser keeps saved entries inside Notion's embed on every device. Some private-browsing modes clear them.
