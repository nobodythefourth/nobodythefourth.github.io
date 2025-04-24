#!/bin/bash

# List of suspicious patterns (add more as needed)
PATTERNS=(
  'michaelharoon'
  'haroon'
  'gmail'
  'email'
  'user'
  'password'
  'secret'
  'token'
  'key'
  'localhost'
  'Users/'
  '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}' # email regex
)

STAGED_FILES=$(git diff --cached --name-only)

for FILE in $STAGED_FILES; do
  for PATTERN in "${PATTERNS[@]}"; do
    if grep -E -i -n "$PATTERN" "$FILE" > /dev/null; then
      echo "\033[0;31m[PII BLOCKED]\033[0m Potential PII found in $FILE matching pattern: $PATTERN"
      grep -E -i -n "$PATTERN" "$FILE"
      exit 1
    fi
  done
done

exit 0
