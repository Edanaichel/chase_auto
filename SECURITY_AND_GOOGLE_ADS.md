# Security & Google Ads Readiness

## The "Invalid id value: null" Error (Resolved in This Repo)

- **Cause:** The error `ObjectNotFoundError: Invalid id value: null -> Object not found` came from the **old** version of the site that used the **Base44 API** for:
  - Loading testimonials via `Testimonial.filter()`
  - Sending the contact form via Base44 server functions
- **Current repo:** The code on GitHub no longer uses Base44 for those features:
  - **Testimonials** use static data only (no API call).
  - **Contact form** uses **EmailJS** (`src/api/emailService.js`), not Base44.
- If the **live site** (e.g. on Vercel) still shows the error, the deployed build is likely **out of date**. Redeploy from this repo so the live site matches the code here.

---

## Vulnerability & Hardening Checklist

| Area | Status | Notes |
|------|--------|--------|
| **No server-side secrets in client** | OK | EmailJS uses public key; no Base44 auth in this build. |
| **Contact form** | OK | EmailJS; no `id` passed to backend. Validation and error handling in place. |
| **External links** | OK | Footer/contact use `target="_blank"` and `rel="noopener noreferrer"`. |
| **Privacy Policy** | OK | Dedicated page; footer now has an explicit "Privacy Policy" link for ads. |
| **HTTPS** | Assumed | Host (e.g. Vercel) should serve over HTTPS. |
| **Dependencies** | Review | Run `npm audit` periodically; fix high/critical. |

---

## Google Ads – Common Rejection Reasons & This Site

| Reason | This site |
|--------|-----------|
| **Broken or erroring pages** | Fixed by removing Base44 calls that could return "Object not found". Ensure **latest version is deployed**. |
| **Missing or unclear Privacy Policy** | Privacy Policy exists and is linked in the footer as "Privacy Policy". |
| **Thin or misleading content** | Content is specific to Chase Auto Body North Hills; no obvious policy issues. |
| **Contact / business info** | Address, phone, email, hours are visible in header/footer and Contact/Book Appointment pages. |
| **Deceptive or prohibited content** | None observed. |

**Recommendation:** If Google Ads was rejected for “policy” or “destination not working,” redeploy the **current GitHub repo** so the live site has no Base44-dependent calls, then request a review again. If the rejection cited something specific (e.g. “malicious software,” “suspicious payment”), use that exact reason to fix and appeal.
