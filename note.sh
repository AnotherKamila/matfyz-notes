#!/bin/bash

# creates a new note for the given subject, with the given stub string
# TODO some kind of templates instead of hardcoding this might be nice...

if [[ $# != 2 ]]; then
	echo "Usage: $0 subj pretty-url-stub"
	exit 1
fi

SUBJ="$1"
STUB="$2"
AUTHOR="`git config --get user.name` <`git config --get user.email`>"

FNAME="$SUBJ/_posts/`date +%Y-%m-%d`-$STUB.md"

if [[ ! -d "$SUBJ/_posts" ]]; then
	echo "No subject named \`$SUBJ'. To add a new subject, use \`addsubj.sh'." >&2
	echo "Known subjects:" >&2
	SUBJS="`find . -type d -name _posts | sed -E 's|^\./([^/]+)/_posts$| - \1|'`"
	echo "$SUBJS" >&2
	exit 2
fi

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
