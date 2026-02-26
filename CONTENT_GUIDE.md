# 📝 Content Management Guide

This guide explains how to easily update your portfolio without editing any code. Simply modify the JSON files in the `data/` directory!

## 📂 File Structure

All editable content is in the `data/` folder:

```
data/
├── site-config.json          ← Personal info, contact, social links
├── resume.json              ← Education, experience, skills, leadership
├── academic-projects.json   ← Your academic projects
├── live-projects.json       ← Your live/deployed projects
└── portfolio-showcase.json  ← Portfolio items with categories
```

---

## 🎯 How to Update Each Section

### 1️⃣ **Personal Information** (`data/site-config.json`)

**Current Content:**
```json
{
  "name": "Tanish Chaudhary",
  "tagline": "Exploring AI, Policy and Finance | IIM Indore",
  "description": "PE/VC focused analyst...",
  "email": "tanishhchaudhary@gmail.com",
  "phone": "+91 9818928655",
  "social": [
    {
      "name": "LinkedIn",
      "url": "https://www.linkedin.com/in/tanish-chaudhary-1750741b3/"
    },
    {
      "name": "Twitter",
      "url": "https://x.com/tanutaniii"
    },
    {
      "name": "GitHub",
      "url": "https://github.com/tanutanii"
    }
  ]
}
```

**To Update:**
- Change `name`, `tagline`, `description` as needed
- Update `email` and `phone` with your contact info
- Add/remove social links in the `social` array
- Each social link needs `name` and `url`

**Changes appear on:** Hero section, Footer (email & social links)

---

### 2️⃣ **Resume/CV** (`data/resume.json`)

**Current Structure:**
```json
{
  "education": [
    {
      "id": 1,
      "institution": "Indian Institute of Management (IIM) Indore",
      "degree": "MBA in Business Administration",
      "period": "2022 - 2024",
      "details": ["Focus on Finance, Strategy, and AI"]
    }
  ],
  "experience": [
    {
      "id": 1,
      "company": "Edelman Intelligence",
      "position": "Senior Consultant",
      "period": "2021 - 2022",
      "description": "Led market entry strategy analysis...",
      "highlights": [
        "Led market entry strategy analysis for Fortune 500 clients",
        "Conducted competitive intelligence across 8+ markets"
      ]
    }
  ],
  "skills": {
    "technical": ["Python", "SQL", "Excel", "Tableau", "R", "JavaScript", "React", "Next.js"],
    "soft": ["Leadership", "Strategic Thinking", "Communication", "Negotiation", "Problem Solving", "Data Analysis"]
  },
  "leadership": [
    {
      "id": 1,
      "role": "President",
      "organization": "Investment Club, IIM Indore",
      "period": "2023 - 2024",
      "description": "Managed investment portfolio..."
    }
  ]
}
```

**How to Add Education:**
- Copy an `education` object
- Increment the `id` (1, 2, 3...)
- Update institution, degree, period, details

**How to Add Experience:**
- Copy an `experience` object
- Increment the `id`
- Add multiple items to `highlights` array

**How to Add Skills:**
- Simply add to `technical` or `soft` arrays (just strings)

**How to Add Leadership:**
- Copy a `leadership` object
- Increment the `id`
- Update role, organization, period, description

**Changes appear on:** Resume Tab

---

### 3️⃣ **Academic Projects** (`data/academic-projects.json`)

**Current Structure:**
```json
[
  {
    "id": 1,
    "title": "Market Entry Strategy Analysis",
    "description": "Strategic analysis of market entry opportunities...",
    "technologies": ["Research", "Analytics", "Strategy", "Competitive Analysis"]
  },
  {
    "id": 2,
    "title": "AI Governance Framework",
    "description": "Developed comprehensive policy recommendations...",
    "technologies": ["Policy", "AI", "Governance", "Research"]
  }
]
```

**How to Add a Project:**
1. Add a new object to the array
2. Increment `id`
3. Add `title` and `description`
4. List technologies used

**Example:**
```json
{
  "id": 3,
  "title": "My New Project",
  "description": "A cool project about XYZ that demonstrates ABC",
  "technologies": ["Python", "Data Science", "Finance"]
}
```

**Changes appear on:** Academic Projects Tab

---

### 4️⃣ **Live Projects** (`data/live-projects.json`)

**Current Structure:**
```json
[
  {
    "id": 1,
    "title": "Crochet by Arsh",
    "description": "E-commerce platform for handmade crochet products...",
    "technologies": ["Next.js", "React", "Stripe", "MongoDB", "TailwindCSS"],
    "link": "https://crochetbyarsh.com"
  },
  {
    "id": 2,
    "title": "Content Publishing Automation",
    "description": "Developed automation system for content distribution...",
    "technologies": ["Python", "APIs", "Automation", "Scheduling"],
    "link": ""
  }
]
```

**How to Add a Live Project:**
1. Add a new object to the array
2. Increment `id`
3. Add `title`, `description`, `technologies`
4. Add `link` (leave empty `""` if no link yet)

**Changes appear on:** Live Projects Tab

---

### 5️⃣ **Portfolio Showcase** (`data/portfolio-showcase.json`)

**Current Structure:**
```json
[
  {
    "id": 1,
    "title": "AI in Healthcare",
    "category": "AI",
    "description": "In-depth analysis of AI applications..."
  },
  {
    "id": 2,
    "title": "Process Automation ROI",
    "category": "Automation",
    "description": "Case study examining automation benefits..."
  }
]
```

**Available Categories:**
- `AI`
- `Automation`
- `Website`
- `Design`
- `Video`
- `Posts`
- `Other` (custom)

**How to Add a Portfolio Item:**
1. Add a new object to the array
2. Increment `id`
3. Add `title` and `description`
4. Choose a `category` from the list above or create new

**Changes appear on:** Portfolio Showcase Tab (with category filtering)

---

## 🚀 Workflow: How to Make Changes

### Step 1: Edit JSON File
Open `data/resume.json` (or whichever file) in your VS Code editor and make changes.

### Step 2: Save File
Press `Ctrl+S` to save.

### Step 3: Test Locally
The portfolio auto-refreshes! Check `localhost:3000` in your browser.

### Step 4: Commit & Push to GitHub
```bash
cd "C:\Users\Tanish Chaudhary\portfolio-site"
git add .
git commit -m "Update portfolio with new projects"
git push origin main
```

Site automatically deploys to Vercel! 🎉

---

## 📋 Quick Update Checklist

- [ ] Update `site-config.json` with personal info
- [ ] Add to `resume.json` for education/experience
- [ ] Add projects to `academic-projects.json`
- [ ] Add live projects to `live-projects.json`
- [ ] Add portfolio items to `portfolio-showcase.json`
- [ ] Test locally (`localhost:3000`)
- [ ] `git push origin main`
- [ ] Verify on Vercel dashboard

---

## 💡 Pro Tips

1. **Formatting:** Keep quotes and commas exactly as shown
2. **Arrays:** Use `[]` for multiple items, `{}` for single objects
3. **IDs:** Always increment by 1 for each new item
4. **Categories:** Match exactly (case-sensitive) - `"AI"` not `"ai"`
5. **Links:** Always include `https://` in URLs
6. **Descriptions:** Can be 1-2 sentences, keep it concise

---

## 🔧 Troubleshooting

**Site won't update?**
- Hard refresh browser: `Ctrl+Shift+R`
- Check for typos in JSON (quotes, commas, brackets)
- Verify file was saved

**JSON Error?**
- Use [jsonlint.com](https://jsonlint.com) to validate
- Copy-paste error messages for help

**Commit failed?**
- Ensure you're in the `portfolio-site` directory
- Check git status: `git status`

---

## 📞 Need Help?

If you want to add new sections or modify the structure, ask and I can:
- Add new data categories
- Create new components
- Modify the component layout
- Add new features

Just describe what you want to add! 🚀
