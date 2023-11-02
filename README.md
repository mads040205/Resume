# TailwindCSS Resume.
This is my resume written in TailwindCSS, from scratch.

It supports multi-page, and automatically resizes for mobile.
It is also made to be easily printable.

# Install Dependencies
```sh
#!bin/bash
npm i -g concurrently tailwindcss live-server
```

# Run Development Server
```sh
#!bin/bash
concurrently "tailwindcss -i src/input.css -o output.css --watch"  "live-server --port=3000"
```

# Host files
```sh
#!bin/bash
cp index.html output.css /path/to/website/resume

# For online hosting you could do:
cp index.html output.css docs/
```

*Icons are sourced from devicon.dev*
