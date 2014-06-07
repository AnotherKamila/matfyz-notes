#!/bin/bash

# creates a new note for the given subject, with the given stub string
# TODO some kind of templates instead of hardcoding this might be nice...

if [[ $# != 2 ]]; then
	echo "Usage: $0 subj-stub SubjectName"
	exit 1
fi

SUBJ="$1"
shift
SUBJ_NAME="$@"  # so that one doesn't even need quotes :D

echo "Creating structure for new subject: $SUBJ"
mkdir -p "$SUBJ/_posts"
cat > "$SUBJ/index.md" <<- EOF
	---
	title:  $SUBJ_NAME
	subj:   $SUBJ
	layout: subj_index
	---
EOF
