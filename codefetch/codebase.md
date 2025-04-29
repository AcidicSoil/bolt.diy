Project Structure:
├── app
│   ├── components
│   ├── entry.client.tsx
│   ├── entry.server.tsx
│   ├── lib
│   │   ├── crypto.ts
│   │   ├── fetch.ts
│   ├── root.tsx
│   ├── routes
│   │   ├── api.chat.ts
│   │   ├── api.check-env-key.ts
│   │   ├── api.enhancer.ts
│   │   ├── api.export-api-keys.ts
│   │   ├── api.git-proxy.$.ts
│   │   ├── api.health.ts
│   │   ├── api.llmcall.ts
│   │   ├── api.models.$provider.ts
│   │   ├── api.models.ts
│   │   ├── api.netlify-deploy.ts
│   │   ├── api.supabase.query.ts
│   │   ├── api.supabase.ts
│   │   ├── api.supabase.variables.ts
│   │   ├── api.system.app-info.ts
│   │   ├── api.system.diagnostics.ts
│   │   ├── api.system.disk-info.ts
│   │   ├── api.system.git-info.ts
│   │   ├── api.system.memory-info.ts
│   │   ├── api.system.process-info.ts
│   │   ├── api.update.ts
│   │   ├── api.vercel-deploy.ts
│   │   ├── chat.$id.tsx
│   │   ├── git.tsx
│   │   ├── webcontainer.preview.$id.tsx
│   │   └── _index.tsx
│   ├── styles
│   │   ├── animations.scss
│   │   ├── diff-view.css
│   │   ├── index.scss
│   │   ├── variables.scss
│   │   └── z-index.scss
│   ├── types
│   │   ├── actions.ts
│   │   ├── artifact.ts
│   │   ├── context.ts
│   │   ├── GitHub.ts
│   │   ├── global.d.ts
│   │   ├── model.ts
│   │   ├── netlify.ts
│   │   ├── supabase.ts
│   │   ├── template.ts
│   │   ├── terminal.ts
│   │   ├── theme.ts
│   │   └── vercel.ts
│   ├── utils
│   │   ├── buffer.ts
│   │   ├── classNames.ts
│   │   ├── constants.ts
│   │   ├── debounce.ts
│   │   ├── diff.spec.ts
│   │   ├── diff.ts
│   │   ├── easings.ts
│   │   ├── file-watcher.ts
│   │   ├── fileUtils.ts
│   │   ├── folderImport.ts
│   │   ├── formatSize.ts
│   │   ├── getLanguageFromExtension.ts
│   │   ├── logger.ts
│   │   ├── markdown.ts
│   │   ├── mobile.ts
│   │   ├── os.ts
│   │   ├── path.ts
│   │   ├── projectCommands.ts
│   │   ├── promises.ts
│   │   ├── react.ts
│   │   ├── sampler.ts
│   │   ├── selectStarterTemplate.ts
│   │   ├── shell.ts
│   │   ├── stacktrace.ts
│   │   ├── stripIndent.ts
│   │   ├── terminal.ts
│   │   ├── types.ts
│   │   └── unreachable.ts
│   └── vite-env.d.ts
├── assets
│   ├── entitlements.mac.plist
│   └── icons
│       ├── icon.icns
│       ├── icon.ico
│       └── icon.png
├── bindings.sh
├── bolt_diy_complete_system_bundle
│   ├── 5_Phase_Narrative.txt
│   ├── A_flat_digital_graphic_design_displays_a_title_aga.png
│   ├── A_flowchart_infographic_titled__Phase_Transition_V.png
│   ├── A_flowchart_in_the_digital_image_illustrates_a_dat.png
│   ├── A_flowchart_titled__Cognitive_Interaction_Model__i.png
│   ├── A_flowchart_titled__Component_Interdependency_Map_.png
│   └── User_Journey_Expansion.png
├── build
│   ├── client
│   │   ├── apple-touch-icon-precomposed.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── logo-dark-styled.png
│   │   ├── logo-dark.png
│   │   ├── logo-light-styled.png
│   │   ├── logo-light.png
│   │   ├── logo.svg
│   │   └── social_preview_index.jpg
│   └── server
│       └── index.js
├── changelog.md
├── codefetch
│   ├── codebase.md
│   └── output.md
├── codefetch.config.mjs
├── code_snippets.md
├── consolidated_ideas.md
├── CONTRIBUTING.md
├── cursor-memory-bank
│   ├── assets
│   │   ├── custom_mode_setup_1.png
│   │   └── custom_mode_setup_2.png
│   ├── creative_mode_think_tool.md
│   ├── custom_modes
│   │   ├── creative_instructions.md
│   │   ├── implement_instructions.md
│   │   ├── mode_switching_analysis.md
│   │   ├── plan_instructions.md
│   │   └── van_instructions.md
│   ├── memory_bank_upgrade_guide.md
│   └── README.md
├── diagrams
│   ├── cognitive_interaction_model.md
│   ├── component_interdependency.md
│   ├── data_memory_flow.md
│   ├── idt_research_structure.md
│   ├── interactive_workflow.md
│   ├── phase_transition_validation.md
│   ├── progressive_architecture.md
│   ├── README.md
│   └── user_journey_path.md
├── diagrams.md
├── docker-compose.yaml
├── Dockerfile
├── docs
│   ├── assistant-helper-fragments-implementation.md
│   ├── docs
│   │   ├── CONTRIBUTING.md
│   │   ├── FAQ.md
│   │   └── index.md
│   ├── images
│   │   ├── api-key-ui-section.png
│   │   ├── bolt-settings-button.png
│   │   └── provider-base-url.png
│   ├── mkdocs.yml
│   ├── poetry.lock
│   ├── pyproject.toml
│   └── README.md
├── electron
│   ├── main
│   │   ├── index.ts
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   └── preload
│       ├── index.ts
│       ├── tsconfig.json
│       └── vite.config.ts
├── electron-builder.yml
├── electron-update.yml
├── eslint.config.mjs
├── FAQ.md
├── functions
│   └── [[path]].ts
├── icons
│   ├── angular.svg
│   ├── astro.svg
│   ├── chat.svg
│   ├── logo-text.svg
│   ├── logo.svg
│   ├── nativescript.svg
│   ├── nextjs.svg
│   ├── nuxt.svg
│   ├── qwik.svg
│   ├── react.svg
│   ├── remix.svg
│   ├── remotion.svg
│   ├── slidev.svg
│   ├── stars.svg
│   ├── svelte.svg
│   ├── typescript.svg
│   ├── vite.svg
│   └── vue.svg
├── LICENSE
├── load-context.ts
├── mcp-api.txt
├── notarize.cjs
├── package.json
├── payload.json
├── pnpm-lock.yaml
├── pre-start.cjs
├── PROJECT.md
├── public
│   ├── apple-touch-icon-precomposed.png
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── icons
│   │   ├── AmazonBedrock.svg
│   │   ├── Anthropic.svg
│   │   ├── Cohere.svg
│   │   ├── Deepseek.svg
│   │   ├── Default.svg
│   │   ├── Google.svg
│   │   ├── Groq.svg
│   │   ├── HuggingFace.svg
│   │   ├── Hyperbolic.svg
│   │   ├── LMStudio.svg
│   │   ├── Mistral.svg
│   │   ├── Ollama.svg
│   │   ├── OpenAI.svg
│   │   ├── OpenAILike.svg
│   │   ├── OpenRouter.svg
│   │   ├── Perplexity.svg
│   │   ├── Together.svg
│   │   └── xAI.svg
│   ├── logo-dark-styled.png
│   ├── logo-dark.png
│   ├── logo-light-styled.png
│   ├── logo-light.png
│   ├── logo.svg
│   └── social_preview_index.jpg
├── README.md
├── README_BoltDIY_Bundle.txt
├── repomix-output.md
├── scratch.txt
├── scripts
│   ├── clean.js
│   ├── update-imports.sh
│   └── update.sh
├── tools
│   ├── llm_api.py
│   ├── screenshot_utils.py
│   ├── search_engine.py
│   └── web_scraper.py
├── tsconfig.json
├── types
│   └── istextorbinary.d.ts
├── uno.config.ts
├── vite-electron.config.ts
├── vite.config.ts
├── worker-configuration.d.ts
├── wrangler.toml
└── _exportChatGPTContext Length Recommendation.md


package.json
```
1 | {
2 |   "name": "bolt",
3 |   "description": "An AI Agent",
4 |   "private": true,
5 |   "license": "MIT",
6 |   "sideEffects": false,
7 |   "type": "module",
8 |   "version": "0.0.7",
9 |   "author": {
10 |     "name": "bolt.diy team",
11 |     "email": "maintainers@bolt.diy"
12 |   },
13 |   "scripts": {
14 |     "deploy": "npm run build && wrangler pages deploy",
15 |     "build": "remix vite:build",
16 |     "dev": "node pre-start.cjs  && remix vite:dev",
17 |     "test": "vitest --run",
18 |     "test:watch": "vitest",
19 |     "lint": "eslint --cache --cache-location ./node_modules/.cache/eslint app",
20 |     "lint:fix": "npm run lint -- --fix && prettier app --write",
21 |     "start:windows": "wrangler pages dev ./build/client",
22 |     "start:unix": "bindings=$(./bindings.sh) && wrangler pages dev ./build/client $bindings",
23 |     "start": "node -e \"const { spawn } = require('child_process'); const isWindows = process.platform === 'win32'; const cmd = isWindows ? 'npm run start:windows' : 'npm run start:unix'; const child = spawn(cmd, { shell: true, stdio: 'inherit' }); child.on('exit', code => process.exit(code));\"",
24 |     "dockerstart": "bindings=$(./bindings.sh) && wrangler pages dev ./build/client $bindings --ip 0.0.0.0 --port 5173 --no-show-interactive-dev-session",
25 |     "dockerrun": "docker run -it -d --name bolt-ai-live -p 5173:5173 --env-file .env.local bolt-ai",
26 |     "dockerbuild:prod": "docker build -t bolt-ai:production -t bolt-ai:latest --target bolt-ai-production .",
27 |     "dockerbuild": "docker build -t bolt-ai:development -t bolt-ai:latest --target bolt-ai-development .",
28 |     "typecheck": "tsc",
29 |     "typegen": "wrangler types",
30 |     "preview": "pnpm run build && pnpm run start",
31 |     "prepare": "husky",
32 |     "clean": "node scripts/clean.js",
33 |     "electron:build:deps": "concurrently \"pnpm electron:build:main\" \"pnpm electron:build:preload\" --kill-others-on-fail",
34 |     "electron:build:main": "vite build --config ./electron/main/vite.config.ts",
35 |     "electron:build:preload": "vite build --config ./electron/preload/vite.config.ts",
36 |     "electron:build:renderer": "remix vite:build --config vite-electron.config.js",
37 |     "electron:build:unpack": "rm -rf dist && pnpm electron:build:renderer && pnpm electron:build:deps && electron-builder --dir",
38 |     "electron:build:mac": "rm -rf dist && pnpm electron:build:renderer && pnpm electron:build:deps && electron-builder --mac",
39 |     "electron:build:win": "rm -rf dist && pnpm electron:build:renderer && pnpm electron:build:deps && electron-builder --win",
40 |     "electron:build:linux": "rm -rf dist && pnpm electron:build:renderer && pnpm electron:build:deps && electron-builder --linux",
41 |     "electron:build:dist": "rm -rf dist && pnpm electron:build:renderer && pnpm electron:build:deps && electron-builder --mwl"
42 |   },
43 |   "engines": {
44 |     "node": ">=18.18.0"
45 |   },
46 |   "dependencies": {
47 |     "@ai-sdk/amazon-bedrock": "1.0.6",
48 |     "@ai-sdk/anthropic": "0.0.39",
49 |     "@ai-sdk/cohere": "1.0.3",
50 |     "@ai-sdk/deepseek": "0.1.3",
51 |     "@ai-sdk/google": "0.0.52",
52 |     "@ai-sdk/mistral": "0.0.43",
53 |     "@ai-sdk/openai": "1.1.2",
54 |     "@codemirror/autocomplete": "^6.18.3",
55 |     "@codemirror/commands": "^6.7.1",
56 |     "@codemirror/lang-cpp": "^6.0.2",
57 |     "@codemirror/lang-css": "^6.3.1",
58 |     "@codemirror/lang-html": "^6.4.9",
59 |     "@codemirror/lang-javascript": "^6.2.2",
60 |     "@codemirror/lang-json": "^6.0.1",
61 |     "@codemirror/lang-markdown": "^6.3.1",
62 |     "@codemirror/lang-python": "^6.1.6",
63 |     "@codemirror/lang-sass": "^6.0.2",
64 |     "@codemirror/lang-vue": "^0.1.3",
65 |     "@codemirror/lang-wast": "^6.0.2",
66 |     "@codemirror/language": "^6.10.6",
67 |     "@codemirror/search": "^6.5.8",
68 |     "@codemirror/state": "^6.4.1",
69 |     "@codemirror/view": "^6.35.0",
70 |     "@headlessui/react": "^2.2.0",
71 |     "@heroicons/react": "^2.2.0",
72 |     "@iconify-json/svg-spinners": "^1.2.1",
73 |     "@lezer/highlight": "^1.2.1",
74 |     "@nanostores/react": "^0.7.3",
75 |     "@octokit/rest": "^21.0.2",
76 |     "@octokit/types": "^13.6.2",
77 |     "@openrouter/ai-sdk-provider": "^0.0.5",
78 |     "@phosphor-icons/react": "^2.1.7",
79 |     "@radix-ui/react-checkbox": "^1.1.4",
80 |     "@radix-ui/react-collapsible": "^1.0.3",
81 |     "@radix-ui/react-context-menu": "^2.2.2",
82 |     "@radix-ui/react-dialog": "^1.1.5",
83 |     "@radix-ui/react-dropdown-menu": "^2.1.6",
84 |     "@radix-ui/react-label": "^2.1.1",
85 |     "@radix-ui/react-popover": "^1.1.5",
86 |     "@radix-ui/react-progress": "^1.0.3",
87 |     "@radix-ui/react-scroll-area": "^1.2.2",
88 |     "@radix-ui/react-separator": "^1.1.0",
89 |     "@radix-ui/react-switch": "^1.1.1",
90 |     "@radix-ui/react-tabs": "^1.1.2",
91 |     "@radix-ui/react-tooltip": "^1.1.4",
92 |     "@remix-run/cloudflare": "^2.15.2",
93 |     "@remix-run/cloudflare-pages": "^2.15.2",
94 |     "@remix-run/node": "^2.15.2",
95 |     "@remix-run/react": "^2.15.2",
96 |     "@tanstack/react-virtual": "^3.13.0",
97 |     "@types/react-beautiful-dnd": "^13.1.8",
98 |     "@uiw/codemirror-theme-vscode": "^4.23.6",
99 |     "@unocss/reset": "^0.61.9",
100 |     "@webcontainer/api": "1.5.3-internal.2",
101 |     "@xterm/addon-fit": "^0.10.0",
102 |     "@xterm/addon-web-links": "^0.11.0",
103 |     "@xterm/xterm": "^5.5.0",
104 |     "ai": "4.1.2",
105 |     "chalk": "^5.4.1",
106 |     "chart.js": "^4.4.7",
107 |     "class-variance-authority": "^0.7.0",
108 |     "clsx": "^2.1.0",
109 |     "date-fns": "^3.6.0",
110 |     "diff": "^5.2.0",
111 |     "dotenv": "^16.4.7",
112 |     "electron-log": "^5.2.3",
113 |     "electron-store": "^10.0.0",
114 |     "electron-updater": "^6.3.9",
115 |     "file-saver": "^2.0.5",
116 |     "framer-motion": "^11.12.0",
117 |     "ignore": "^6.0.2",
118 |     "isbot": "^4.4.0",
119 |     "isomorphic-git": "^1.27.2",
120 |     "istextorbinary": "^9.5.0",
121 |     "jose": "^5.9.6",
122 |     "js-cookie": "^3.0.5",
123 |     "jspdf": "^2.5.2",
124 |     "jszip": "^3.10.1",
125 |     "lucide-react": "^0.485.0",
126 |     "mime": "^4.0.4",
127 |     "nanostores": "^0.10.3",
128 |     "ollama-ai-provider": "^0.15.2",
129 |     "path-browserify": "^1.0.1",
130 |     "react": "^18.3.1",
131 |     "react-beautiful-dnd": "^13.1.1",
132 |     "react-chartjs-2": "^5.3.0",
133 |     "react-dnd": "^16.0.1",
134 |     "react-dnd-html5-backend": "^16.0.1",
135 |     "react-dom": "^18.3.1",
136 |     "react-hotkeys-hook": "^4.6.1",
137 |     "react-icons": "^5.4.0",
138 |     "react-markdown": "^9.0.1",
139 |     "react-resizable-panels": "^2.1.7",
140 |     "react-toastify": "^10.0.6",
141 |     "react-window": "^1.8.11",
142 |     "rehype-raw": "^7.0.0",
143 |     "rehype-sanitize": "^6.0.0",
144 |     "remark-gfm": "^4.0.0",
145 |     "remix-island": "^0.2.0",
146 |     "remix-utils": "^7.7.0",
147 |     "rollup-plugin-node-polyfills": "^0.2.1",
148 |     "shiki": "^1.24.0",
149 |     "tailwind-merge": "^2.2.1",
150 |     "unist-util-visit": "^5.0.0",
151 |     "vite-plugin-node-polyfills": "^0.22.0",
152 |     "zod": "^3.24.1",
153 |     "zustand": "^5.0.3"
154 |   },
155 |   "devDependencies": {
156 |     "@blitz/eslint-plugin": "0.1.0",
157 |     "@cloudflare/workers-types": "^4.20241127.0",
158 |     "@electron/notarize": "^2.5.0",
159 |     "@iconify-json/ph": "^1.2.1",
160 |     "@iconify/types": "^2.0.0",
161 |     "@remix-run/dev": "^2.15.2",
162 |     "@remix-run/serve": "^2.15.2",
163 |     "@testing-library/jest-dom": "^6.6.3",
164 |     "@testing-library/react": "^16.2.0",
165 |     "@types/diff": "^5.2.3",
166 |     "@types/dom-speech-recognition": "^0.0.4",
167 |     "@types/electron": "^1.6.12",
168 |     "@types/file-saver": "^2.0.7",
169 |     "@types/js-cookie": "^3.0.6",
170 |     "@types/path-browserify": "^1.0.3",
171 |     "@types/react": "^18.3.12",
172 |     "@types/react-dom": "^18.3.1",
173 |     "@types/react-window": "^1.8.8",
174 |     "@vitejs/plugin-react": "^4.3.4",
175 |     "concurrently": "^8.2.2",
176 |     "cross-env": "^7.0.3",
177 |     "crypto-browserify": "^3.12.1",
178 |     "electron": "^33.2.0",
179 |     "electron-builder": "^25.1.8",
180 |     "eslint-config-prettier": "^10.1.1",
181 |     "eslint-plugin-prettier": "^5.2.6",
182 |     "fast-glob": "^3.3.2",
183 |     "husky": "9.1.7",
184 |     "is-ci": "^3.0.1",
185 |     "jsdom": "^26.0.0",
186 |     "node-fetch": "^3.3.2",
187 |     "pnpm": "^9.14.4",
188 |     "prettier": "^3.5.3",
189 |     "rimraf": "^4.4.1",
190 |     "sass-embedded": "^1.81.0",
191 |     "stream-browserify": "^3.0.0",
192 |     "typescript": "^5.7.2",
193 |     "unified": "^11.0.5",
194 |     "unocss": "^0.61.9",
195 |     "vite": "^5.4.11",
196 |     "vite-plugin-copy": "^0.1.6",
197 |     "vite-plugin-optimize-css-modules": "^1.1.0",
198 |     "vite-tsconfig-paths": "^4.3.2",
199 |     "vitest": "^2.1.7",
200 |     "wrangler": "^4.5.1"
201 |   },
202 |   "resolutions": {
203 |     "@typescript-eslint/utils": "^8.0.0-alpha.30"
204 |   },
205 |   "packageManager": "pnpm@9.4.0"
206 | }
```

vite.config.ts
```
1 | import { cloudflareDevProxyVitePlugin as remixCloudflareDevProxy, vitePlugin as remixVitePlugin } from '@remix-run/dev';
2 | import UnoCSS from 'unocss/vite';
3 | import { defineConfig, type ViteDevServer } from 'vite';
4 | import { nodePolyfills } from 'vite-plugin-node-polyfills';
5 | import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
6 | import tsconfigPaths from 'vite-tsconfig-paths';
7 | import * as dotenv from 'dotenv';
8 | import { execSync } from 'child_process';
9 | import { readFileSync } from 'fs';
10 | import { join } from 'path';
11 | 
12 | dotenv.config();
13 | 
14 | // Get detailed git info with fallbacks
15 | const getGitInfo = () => {
16 |   try {
17 |     return {
18 |       commitHash: execSync('git rev-parse --short HEAD').toString().trim(),
19 |       branch: execSync('git rev-parse --abbrev-ref HEAD').toString().trim(),
20 |       commitTime: execSync('git log -1 --format=%cd').toString().trim(),
21 |       author: execSync('git log -1 --format=%an').toString().trim(),
22 |       email: execSync('git log -1 --format=%ae').toString().trim(),
23 |       remoteUrl: execSync('git config --get remote.origin.url').toString().trim(),
24 |       repoName: execSync('git config --get remote.origin.url')
25 |         .toString()
26 |         .trim()
27 |         .replace(/^.*github.com[:/]/, '')
28 |         .replace(/\.git$/, ''),
29 |     };
30 |   } catch {
31 |     return {
32 |       commitHash: 'no-git-info',
33 |       branch: 'unknown',
34 |       commitTime: 'unknown',
35 |       author: 'unknown',
36 |       email: 'unknown',
37 |       remoteUrl: 'unknown',
38 |       repoName: 'unknown',
39 |     };
40 |   }
41 | };
42 | 
43 | // Read package.json with detailed dependency info
44 | const getPackageJson = () => {
45 |   try {
46 |     const pkgPath = join(process.cwd(), 'package.json');
47 |     const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
48 | 
49 |     return {
50 |       name: pkg.name,
51 |       description: pkg.description,
52 |       license: pkg.license,
53 |       dependencies: pkg.dependencies || {},
54 |       devDependencies: pkg.devDependencies || {},
55 |       peerDependencies: pkg.peerDependencies || {},
56 |       optionalDependencies: pkg.optionalDependencies || {},
57 |     };
58 |   } catch {
59 |     return {
60 |       name: 'bolt.diy',
61 |       description: 'A DIY LLM interface',
62 |       license: 'MIT',
63 |       dependencies: {},
64 |       devDependencies: {},
65 |       peerDependencies: {},
66 |       optionalDependencies: {},
67 |     };
68 |   }
69 | };
70 | 
71 | const pkg = getPackageJson();
72 | const gitInfo = getGitInfo();
73 | 
74 | export default defineConfig((config) => {
75 |   return {
76 |     define: {
77 |       __COMMIT_HASH: JSON.stringify(gitInfo.commitHash),
78 |       __GIT_BRANCH: JSON.stringify(gitInfo.branch),
79 |       __GIT_COMMIT_TIME: JSON.stringify(gitInfo.commitTime),
80 |       __GIT_AUTHOR: JSON.stringify(gitInfo.author),
81 |       __GIT_EMAIL: JSON.stringify(gitInfo.email),
82 |       __GIT_REMOTE_URL: JSON.stringify(gitInfo.remoteUrl),
83 |       __GIT_REPO_NAME: JSON.stringify(gitInfo.repoName),
84 |       __APP_VERSION: JSON.stringify(process.env.npm_package_version),
85 |       __PKG_NAME: JSON.stringify(pkg.name),
86 |       __PKG_DESCRIPTION: JSON.stringify(pkg.description),
87 |       __PKG_LICENSE: JSON.stringify(pkg.license),
88 |       __PKG_DEPENDENCIES: JSON.stringify(pkg.dependencies),
89 |       __PKG_DEV_DEPENDENCIES: JSON.stringify(pkg.devDependencies),
90 |       __PKG_PEER_DEPENDENCIES: JSON.stringify(pkg.peerDependencies),
91 |       __PKG_OPTIONAL_DEPENDENCIES: JSON.stringify(pkg.optionalDependencies),
92 |       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
93 |     },
94 |     build: {
95 |       target: 'esnext',
96 |     },
97 |     plugins: [
98 |       nodePolyfills({
99 |         include: ['buffer', 'process', 'util', 'stream'],
100 |         globals: {
101 |           Buffer: true,
102 |           process: true,
103 |           global: true,
104 |         },
105 |         protocolImports: true,
106 |         exclude: ['child_process', 'fs', 'path'],
107 |       }),
108 |       {
109 |         name: 'buffer-polyfill',
110 |         transform(code, id) {
111 |           if (id.includes('env.mjs')) {
112 |             return {
113 |               code: `import { Buffer } from 'buffer';\n${code}`,
114 |               map: null,
115 |             };
116 |           }
117 | 
118 |           return null;
119 |         },
120 |       },
121 |       config.mode !== 'test' && remixCloudflareDevProxy(),
122 |       remixVitePlugin({
123 |         future: {
124 |           v3_fetcherPersist: true,
125 |           v3_relativeSplatPath: true,
126 |           v3_throwAbortReason: true,
127 |           v3_lazyRouteDiscovery: true,
128 |         },
129 |       }),
130 |       UnoCSS(),
131 |       tsconfigPaths(),
132 |       chrome129IssuePlugin(),
133 |       config.mode === 'production' && optimizeCssModules({ apply: 'build' }),
134 |     ],
135 |     envPrefix: [
136 |       'VITE_',
137 |       'OPENAI_LIKE_API_BASE_URL',
138 |       'OLLAMA_API_BASE_URL',
139 |       'LMSTUDIO_API_BASE_URL',
140 |       'TOGETHER_API_BASE_URL',
141 |     ],
142 |     css: {
143 |       preprocessorOptions: {
144 |         scss: {
145 |           api: 'modern-compiler',
146 |         },
147 |       },
148 |     },
149 |   };
150 | });
151 | 
152 | function chrome129IssuePlugin() {
153 |   return {
154 |     name: 'chrome129IssuePlugin',
155 |     configureServer(server: ViteDevServer) {
156 |       server.middlewares.use((req, res, next) => {
157 |         const raw = req.headers['user-agent']?.match(/Chrom(e|ium)\/([0-9]+)\./);
158 | 
159 |         if (raw) {
160 |           const version = parseInt(raw[2], 10);
161 | 
162 |           if (version === 129) {
163 |             res.setHeader('content-type', 'text/html');
164 |             res.end(
165 |               '<body><h1>Please use Chrome Canary for testing.</h1><p>Chrome 129 has an issue with JavaScript modules & Vite local development, see <a href="https://github.com/stackblitz/bolt.new/issues/86#issuecomment-2395519258">for more information.</a></p><p><b>Note:</b> This only impacts <u>local development</u>. `pnpm run build` and `pnpm run start` will work fine in this browser.</p></body>',
166 |             );
167 | 
168 |             return;
169 |           }
170 |         }
171 | 
172 |         next();
173 |       });
174 |     },
175 |   };
176 | }
```

tsconfig.json
```
1 | {
2 |   "compilerOptions": {
3 |     "lib": ["DOM", "DOM.Iterable", "ESNext"],
4 |     "types": [
5 |       "@remix-run/cloudflare",
6 |       "vite/client",
7 |       "@cloudflare/workers-types/2023-07-01",
8 |       "@types/dom-speech-recognition",
9 |       "electron"
10 |     ],
11 |     "isolatedModules": true,
12 |     "esModuleInterop": true,
13 |     "jsx": "react-jsx",
14 |     "module": "ESNext",
15 |     "moduleResolution": "Bundler",
16 |     "resolveJsonModule": true,
17 |     "target": "ESNext",
18 |     "strict": true,
19 |     "allowJs": true,
20 |     "skipLibCheck": true,
21 |     "verbatimModuleSyntax": true,
22 |     "forceConsistentCasingInFileNames": true,
23 |     "baseUrl": ".",
24 |     "paths": {
25 |       "~/*": ["./app/*"]
26 |     },
27 |     // vite takes care of building everything, not tsc
28 |     "noEmit": true
29 |   },
30 |   "include": [
31 |     "**/*.ts",
32 |     "**/*.tsx",
33 |     "**/.server/**/*.ts",
34 |     "**/.server/**/*.tsx",
35 |     "**/.client/**/*.ts",
36 |     "**/.client/**/*.tsx"
37 |   ]
38 | }
```

uno.config.ts
```
1 | import { globSync } from 'fast-glob';
2 | import fs from 'node:fs/promises';
3 | import { basename } from 'node:path';
4 | import { defineConfig, presetIcons, presetUno, transformerDirectives } from 'unocss';
5 | 
6 | const iconPaths = globSync('./icons/*.svg');
7 | 
8 | const collectionName = 'bolt';
9 | 
10 | const customIconCollection = iconPaths.reduce(
11 |   (acc, iconPath) => {
12 |     const [iconName] = basename(iconPath).split('.');
13 | 
14 |     acc[collectionName] ??= {};
15 |     acc[collectionName][iconName] = async () => fs.readFile(iconPath, 'utf8');
16 | 
17 |     return acc;
18 |   },
19 |   {} as Record<string, Record<string, () => Promise<string>>>,
20 | );
21 | 
22 | const BASE_COLORS = {
23 |   white: '#FFFFFF',
24 |   gray: {
25 |     50: '#FAFAFA',
26 |     100: '#F5F5F5',
27 |     200: '#E5E5E5',
28 |     300: '#D4D4D4',
29 |     400: '#A3A3A3',
30 |     500: '#737373',
31 |     600: '#525252',
32 |     700: '#404040',
33 |     800: '#262626',
34 |     900: '#171717',
35 |     950: '#0A0A0A',
36 |   },
37 |   accent: {
38 |     50: '#F8F5FF',
39 |     100: '#F0EBFF',
40 |     200: '#E1D6FF',
41 |     300: '#CEBEFF',
42 |     400: '#B69EFF',
43 |     500: '#9C7DFF',
44 |     600: '#8A5FFF',
45 |     700: '#7645E8',
46 |     800: '#6234BB',
47 |     900: '#502D93',
48 |     950: '#2D1959',
49 |   },
50 |   green: {
51 |     50: '#F0FDF4',
52 |     100: '#DCFCE7',
53 |     200: '#BBF7D0',
54 |     300: '#86EFAC',
55 |     400: '#4ADE80',
56 |     500: '#22C55E',
57 |     600: '#16A34A',
58 |     700: '#15803D',
59 |     800: '#166534',
60 |     900: '#14532D',
61 |     950: '#052E16',
62 |   },
63 |   orange: {
64 |     50: '#FFFAEB',
65 |     100: '#FEEFC7',
66 |     200: '#FEDF89',
67 |     300: '#FEC84B',
68 |     400: '#FDB022',
69 |     500: '#F79009',
70 |     600: '#DC6803',
71 |     700: '#B54708',
72 |     800: '#93370D',
73 |     900: '#792E0D',
74 |   },
75 |   red: {
76 |     50: '#FEF2F2',
77 |     100: '#FEE2E2',
78 |     200: '#FECACA',
79 |     300: '#FCA5A5',
80 |     400: '#F87171',
81 |     500: '#EF4444',
82 |     600: '#DC2626',
83 |     700: '#B91C1C',
84 |     800: '#991B1B',
85 |     900: '#7F1D1D',
86 |     950: '#450A0A',
87 |   },
88 | };
89 | 
90 | const COLOR_PRIMITIVES = {
91 |   ...BASE_COLORS,
92 |   alpha: {
93 |     white: generateAlphaPalette(BASE_COLORS.white),
94 |     gray: generateAlphaPalette(BASE_COLORS.gray[900]),
95 |     red: generateAlphaPalette(BASE_COLORS.red[500]),
96 |     accent: generateAlphaPalette(BASE_COLORS.accent[500]),
97 |   },
98 | };
99 | 
100 | export default defineConfig({
101 |   safelist: [...Object.keys(customIconCollection[collectionName] || {}).map((x) => `i-bolt:${x}`)],
102 |   shortcuts: {
103 |     'bolt-ease-cubic-bezier': 'ease-[cubic-bezier(0.4,0,0.2,1)]',
104 |     'transition-theme': 'transition-[background-color,border-color,color] duration-150 bolt-ease-cubic-bezier',
105 |     kdb: 'bg-bolt-elements-code-background text-bolt-elements-code-text py-1 px-1.5 rounded-md',
106 |     'max-w-chat': 'max-w-[var(--chat-max-width)]',
107 |   },
108 |   rules: [
109 |     /**
110 |      * This shorthand doesn't exist in Tailwind and we overwrite it to avoid
111 |      * any conflicts with minified CSS classes.
112 |      */
113 |     ['b', {}],
114 |   ],
115 |   theme: {
116 |     colors: {
117 |       ...COLOR_PRIMITIVES,
118 |       bolt: {
119 |         elements: {
120 |           borderColor: 'var(--bolt-elements-borderColor)',
121 |           borderColorActive: 'var(--bolt-elements-borderColorActive)',
122 |           background: {
123 |             depth: {
124 |               1: 'var(--bolt-elements-bg-depth-1)',
125 |               2: 'var(--bolt-elements-bg-depth-2)',
126 |               3: 'var(--bolt-elements-bg-depth-3)',
127 |               4: 'var(--bolt-elements-bg-depth-4)',
128 |             },
129 |           },
130 |           textPrimary: 'var(--bolt-elements-textPrimary)',
131 |           textSecondary: 'var(--bolt-elements-textSecondary)',
132 |           textTertiary: 'var(--bolt-elements-textTertiary)',
133 |           code: {
134 |             background: 'var(--bolt-elements-code-background)',
135 |             text: 'var(--bolt-elements-code-text)',
136 |           },
137 |           button: {
138 |             primary: {
139 |               background: 'var(--bolt-elements-button-primary-background)',
140 |               backgroundHover: 'var(--bolt-elements-button-primary-backgroundHover)',
141 |               text: 'var(--bolt-elements-button-primary-text)',
142 |             },
143 |             secondary: {
144 |               background: 'var(--bolt-elements-button-secondary-background)',
145 |               backgroundHover: 'var(--bolt-elements-button-secondary-backgroundHover)',
146 |               text: 'var(--bolt-elements-button-secondary-text)',
147 |             },
148 |             danger: {
149 |               background: 'var(--bolt-elements-button-danger-background)',
150 |               backgroundHover: 'var(--bolt-elements-button-danger-backgroundHover)',
151 |               text: 'var(--bolt-elements-button-danger-text)',
152 |             },
153 |           },
154 |           item: {
155 |             contentDefault: 'var(--bolt-elements-item-contentDefault)',
156 |             contentActive: 'var(--bolt-elements-item-contentActive)',
157 |             contentAccent: 'var(--bolt-elements-item-contentAccent)',
158 |             contentDanger: 'var(--bolt-elements-item-contentDanger)',
159 |             backgroundDefault: 'var(--bolt-elements-item-backgroundDefault)',
160 |             backgroundActive: 'var(--bolt-elements-item-backgroundActive)',
161 |             backgroundAccent: 'var(--bolt-elements-item-backgroundAccent)',
162 |             backgroundDanger: 'var(--bolt-elements-item-backgroundDanger)',
163 |           },
164 |           actions: {
165 |             background: 'var(--bolt-elements-actions-background)',
166 |             code: {
167 |               background: 'var(--bolt-elements-actions-code-background)',
168 |             },
169 |           },
170 |           artifacts: {
171 |             background: 'var(--bolt-elements-artifacts-background)',
172 |             backgroundHover: 'var(--bolt-elements-artifacts-backgroundHover)',
173 |             borderColor: 'var(--bolt-elements-artifacts-borderColor)',
174 |             inlineCode: {
175 |               background: 'var(--bolt-elements-artifacts-inlineCode-background)',
176 |               text: 'var(--bolt-elements-artifacts-inlineCode-text)',
177 |             },
178 |           },
179 |           messages: {
180 |             background: 'var(--bolt-elements-messages-background)',
181 |             linkColor: 'var(--bolt-elements-messages-linkColor)',
182 |             code: {
183 |               background: 'var(--bolt-elements-messages-code-background)',
184 |             },
185 |             inlineCode: {
186 |               background: 'var(--bolt-elements-messages-inlineCode-background)',
187 |               text: 'var(--bolt-elements-messages-inlineCode-text)',
188 |             },
189 |           },
190 |           icon: {
191 |             success: 'var(--bolt-elements-icon-success)',
192 |             error: 'var(--bolt-elements-icon-error)',
193 |             primary: 'var(--bolt-elements-icon-primary)',
194 |             secondary: 'var(--bolt-elements-icon-secondary)',
195 |             tertiary: 'var(--bolt-elements-icon-tertiary)',
196 |           },
197 |           preview: {
198 |             addressBar: {
199 |               background: 'var(--bolt-elements-preview-addressBar-background)',
200 |               backgroundHover: 'var(--bolt-elements-preview-addressBar-backgroundHover)',
201 |               backgroundActive: 'var(--bolt-elements-preview-addressBar-backgroundActive)',
202 |               text: 'var(--bolt-elements-preview-addressBar-text)',
203 |               textActive: 'var(--bolt-elements-preview-addressBar-textActive)',
204 |             },
205 |           },
206 |           terminals: {
207 |             background: 'var(--bolt-elements-terminals-background)',
208 |             buttonBackground: 'var(--bolt-elements-terminals-buttonBackground)',
209 |           },
210 |           dividerColor: 'var(--bolt-elements-dividerColor)',
211 |           loader: {
212 |             background: 'var(--bolt-elements-loader-background)',
213 |             progress: 'var(--bolt-elements-loader-progress)',
214 |           },
215 |           prompt: {
216 |             background: 'var(--bolt-elements-prompt-background)',
217 |           },
218 |           sidebar: {
219 |             dropdownShadow: 'var(--bolt-elements-sidebar-dropdownShadow)',
220 |             buttonBackgroundDefault: 'var(--bolt-elements-sidebar-buttonBackgroundDefault)',
221 |             buttonBackgroundHover: 'var(--bolt-elements-sidebar-buttonBackgroundHover)',
222 |             buttonText: 'var(--bolt-elements-sidebar-buttonText)',
223 |           },
224 |           cta: {
225 |             background: 'var(--bolt-elements-cta-background)',
226 |             text: 'var(--bolt-elements-cta-text)',
227 |           },
228 |         },
229 |       },
230 |     },
231 |   },
232 |   transformers: [transformerDirectives()],
233 |   presets: [
234 |     presetUno({
235 |       dark: {
236 |         light: '[data-theme="light"]',
237 |         dark: '[data-theme="dark"]',
238 |       },
239 |     }),
240 |     presetIcons({
241 |       warn: true,
242 |       collections: {
243 |         ...customIconCollection,
244 |       },
245 |       unit: 'em',
246 |     }),
247 |   ],
248 | });
249 | 
250 | /**
251 |  * Generates an alpha palette for a given hex color.
252 |  *
253 |  * @param hex - The hex color code (without alpha) to generate the palette from.
254 |  * @returns An object where keys are opacity percentages and values are hex colors with alpha.
255 |  *
256 |  * Example:
257 |  *
258 |  * ```
259 |  * {
260 |  *   '1': '#FFFFFF03',
261 |  *   '2': '#FFFFFF05',
262 |  *   '3': '#FFFFFF08',
263 |  * }
264 |  * ```
265 |  */
266 | function generateAlphaPalette(hex: string) {
267 |   return [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].reduce(
268 |     (acc, opacity) => {
269 |       const alpha = Math.round((opacity / 100) * 255)
270 |         .toString(16)
271 |         .padStart(2, '0');
272 | 
273 |       acc[opacity] = `${hex}${alpha}`;
274 | 
275 |       return acc;
276 |     },
277 |     {} as Record<number, string>,
278 |   );
279 | }
```
