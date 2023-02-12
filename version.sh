#!/bin/bash

manifest_ver=$(jq -r '.version' manifest.json)

if [ "$PRINT" = "manifest" ]; then
  echo "$manifest_ver";
else
echo "manifest.json $manifest_ver"
fi

new_ver=$1
if [ ! -e $new_ver ]; then
  echo

  echo "updating to $new_ver"
  tmp=$(mktemp)
  jq ".version = \"$new_ver\"" manifest.json > $tmp
  mv $tmp manifest.json

  git add manifest.json
  git commit -m "version bump to $new_ver"
  git tag -a "v$new_ver" -m "version $new_ver"

  echo "Version updated to $new_ver"

fi

