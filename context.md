# Skyborn Studios Website - Project Context

## 🚨 IMPORTANT
Before making any changes to the codebase, please review this context file to ensure alignment with project standards and architecture.

## Project Overview
- **Company**: Skyborn Studios
- **Project**: Company Portfolio & Game Showcase Website
- **Main Game**: Cirrus (Roman fantasy top-down twin stick shooter with roguelike elements)

## Technical Stack
- **Framework**: Astro
- **UI Libraries**: React
- **Content**: MDX
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages via GitHub Actions
- **CMS**: Sveltia CMS
- **Authentication**: Custom Cloudflare Worker (admin access)

## Project Structure
```
project-root/
├── .astro/ # Build & type definitions
├── .github/ # GitHub Actions workflow
├── public/ # Static assets
│ ├── admin/ # CMS configuration
│ ├── fonts/ # Web fonts
│ └── image/ # Image assets
├── src/
│ ├── assets/ # Project assets
│ │ ├── img/ # Image assets
│ │ └── scss/ # SCSS styles
│ ├── components/ # Astro components
│ ├── content/ # MDX content
│ ├── layouts/ # Page layouts
│ └── pages/ # Route pages
└── [config files] # Project configuration
```


## Key Features
1. Portfolio showcase
2. Game development progress tracking
3. Blog system with CMS integration
4. Admin authentication
5. Responsive design

## Development Guidelines
1. **Component Creation**
   - Use `.astro` files for static components
   - Use `.tsx` for interactive React components
   - Follow atomic design principles

2. **Styling**
   - Use Tailwind classes primarily
   - Create custom utilities in `tailwind.config.js` when needed
   - Maintain consistent color scheme and spacing

3. **Content Management**
   - Blog posts should be written in MDX
   - Use Sveltia CMS for content updates
   - Maintain proper frontmatter structure

4. **Authentication**
   - Admin routes protected by Cloudflare Worker
   - Keep authentication logic separate from main application code

5. **Performance**
   - Optimize images using Astro's built-in image optimization
   - Minimize client-side JavaScript
   - Utilize static site generation where possible

## Deployment Process
1. Changes pushed to `main` branch trigger GitHub Actions
2. Build process generates static files
3. Deployment to GitHub Pages
4. Cloudflare Worker handles authentication requests

## Before Making Changes
- [ ] Review this context file
- [ ] Check existing components for reusability
- [ ] Ensure changes align with project architecture
- [ ] Test locally before pushing
- [ ] Update documentation if adding new features

## Resources
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Sveltia CMS Documentation](https://github.com/sveltia/sveltia-cms)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)

---

**Note**: Keep this context file updated as the project evolves. All team members should refer to this document before making changes to ensure consistency and maintainability.
