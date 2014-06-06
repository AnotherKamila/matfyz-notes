#!/bin/bash

# creates a new note for the given subject, with the given stub string
# TODO create an index file if it doesn't exist yet

if [[ $# != 2 ]]; then
	echo "Usage: $0 subj pretty-url-stub"
	exit 1
fi

SUBJ="$1"
STUB="$2"
AUTHOR="`git config --get user.name` <`git config --get user.email`>"

FNAME="$SUBJ/_posts/`date +%Y-%m-%d`-$STUB.md"
mkdir -p "$SUBJ/_posts"
echo "Creating $FNAME..."
cat > "$FNAME" <<- EOF
	---
	title:  $STUB
	author: $AUTHOR
	layout: default
	---

EOF

E=${EDITOR:-xdg-open}
$E "$FNAME"
