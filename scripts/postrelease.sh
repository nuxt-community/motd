#!/usr/bin/env bash

readme="README.md"
msgCount=$(node -e "process.stdout.write(require('./src/messages/').length.toString())")

sed -i -E 's/count-([^-]+)-blue/count-'"$msgCount"'-blue/g' "$readme"

git commit -m "chore(readme): update messages count" "$readme"
