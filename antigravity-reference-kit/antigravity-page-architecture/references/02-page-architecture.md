# Page Architecture

## Landing Tree

Use this as the baseline mental model for the landing:

```text
app-root
|- app-header
|- landing / main
|  |- landing-main-particles-component
|  |- typed-header
|  |- youtube-video-section
|  |- landing-agent-first
|  |- feature-explorer-new
|  |- use-cases
|  |- landing-try-solutions
|  |- landing-latest-blogs
|  `- download-section
`- app-footer
```

## Product Route Tree

Use this route depth as the product seriousness benchmark:

```text
/
|- blog
|  `- :id
|- use-cases
|  `- :id
|- download
|  `- linux
|- changelog
|- pricing
|- support
|- product
|- terms
|- interest-form
|- press
|- releases
|- docs
|  `- :page
|- auth-success
|- verification-success
`- oauth-callback
```

## Section Logic

Map each major landing block to a clear job:

- `Header`: sustain navigation and credibility.
- `Hero`: create technical respect fast.
- `Video`: convert promise into proof.
- `Feature blocks`: explain capabilities without dumping everything at once.
- `Use cases`: segment by audience.
- `Conversion split`: separate individual and organization paths.
- `Latest blogs`: prove that the product is alive.
- `Download`: close the journey with an obvious action.
- `Footer`: expose the whole ecosystem.

## Porting Rule

Do not port only the hero.

Port the relationship between:

- first impression
- evidence
- explanation
- segmentation
- conversion
- ecosystem depth

That relationship is what creates the feeling of maturity.
