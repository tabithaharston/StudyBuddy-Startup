"I love web programming"

## CSS
### What I learned
- `@import` for fonts must be the very first line in the CSS file, or the browser ignores it.
- A typo in a selector or a wrong bracket (`]` instead of `}`) silently breaks the rules after it.
- CSS doesn't show errors, so use the browser dev tools to check what's applied.
- Flexbox page layout: `body { display: flex; flex-direction: column; min-height: 100vh; }` plus `main { flex: 1; }` keeps the footer at the bottom.
- Selector types: element (`header`), class (`.dashboard`), ID (`#userName`), pseudo (`:hover`, `:nth-child`).
- Combinators: space = any descendant, `>` = direct child, `+` = next sibling, `~` = any later sibling.
- Later rules win over earlier ones with the same specificity. Specificity goes element < class < ID.
- Media queries like `@media (max-width: 600px) { ... }` apply CSS only on small screens.
- Bootstrap's `<link>` goes above my own stylesheet so my styles override it.
- Deploy script copies everything in the current folder, so run it from inside the project folder.

### Still to add to styles.css
- [ ] Nav styles: `nav ul` as a flex row, bold blue links with no underline
- [ ] Section boxes: border, padding, rounded corners
- [ ] Table styles: full width, cell borders, padding
- [ ] Form styles: labels on their own line, inputs capped at 300px
- [ ] Button styles: spacing and `cursor: pointer`
- [ ] Footer styles: top border, smaller gray text
- [ ] Pseudo selectors: `nav a:hover`, `button:hover`, `tr:nth-child(even)`
- [ ] Class selectors: `.dashboard` grid and `.wide` full-width section
- [ ] Media query for screens under 600px: stack nav, shrink table text, full-width inputs

### Still to add to the HTML
- [ ] Bootstrap `<link>` in every page's `<head>`, above `styles.css`
- [ ] Bootstrap classes: `table table-striped`, `btn btn-primary`, `form-control`
- [ ] `<main class="dashboard">` and `class="wide"` on the sessions table section

## Deliverable Notes — Startup HTML
### What I did

- Made three pages: index.html, dashboard.html, and session.html, linked with a nav bar
- Used header, nav, main, section, and footer tags
- Added placeholders for login, database data, and realtime updates
- Added images and a link to my GitHub repo

### Things I learned

- Typing a file path wrong on GitHub can break things and cause git pull to fail
- Had to trust my folder in VS Code before Git would work
- I struggle with the syntaxing of HTML. I need to not procrastinate in order to have more time to complete the assignments and be sure that I am coding them correctly.

### Commands I want to remember
```
git pull
git add .
git commit -m "message"
git push
./deployFiles.sh -k <pemkey> -h studybuddy.click -s startup
```
