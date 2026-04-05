# Project Documentation — Jekyll Site

A Jekyll-based documentation site for DISKussMe.

## Getting Started

### Prerequisites
- Ruby 3.x
- Bundler (`gem install bundler`)

### Run Locally

```bash
bundle install
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000) in your browser.

### Build for Production

```bash
bundle exec jekyll build
```

Output goes to the `_site/` directory.

## Updating Content

All content lives in **`index.html`**. Fields marked `— to be completed —` are placeholders ready to be filled in.

Sections:
- **01 Overview** — Vision statement and intended users
- **02 Features** — Major features list
- **03 Team** — Members, contributions, and skills gained
- **04 Postmortem** — Full development retrospective
