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

# List of files to ignore
IGNORE_FILES=("package-lock.json" "bun.lockb" "yarn.lock" "scripts/prevent_pii.sh")

for FILE in $STAGED_FILES; do
  SKIP=false
  for IGNORE in "${IGNORE_FILES[@]}"; do
    if [[ "$FILE" == *"$IGNORE" ]]; then
      SKIP=true
      break
    fi
  done
  if [ "$SKIP" = true ]; then
    continue
  fi
  for PATTERN in "${PATTERNS[@]}"; do
    # Special case: Ignore React's 'key' prop in JSX/TSX files
    if [[ "$PATTERN" == "key" ]] && [[ "$FILE" == *.tsx || "$FILE" == *.jsx ]]; then
      if grep -E -i -n "$PATTERN" "$FILE" | grep -v 'key=' > /dev/null; then
        echo "\033[0;31m[PII BLOCKED]\033[0m Potential PII found in $FILE matching pattern: $PATTERN (not a React prop)"
        grep -E -i -n "$PATTERN" "$FILE" | grep -v 'key='
        exit 1
      fi
    else
      if grep -E -i -n "$PATTERN" "$FILE" > /dev/null; then
        echo "\033[0;31m[PII BLOCKED]\033[0m Potential PII found in $FILE matching pattern: $PATTERN"
        grep -E -i -n "$PATTERN" "$FILE"
        exit 1
      fi
    fi
  done
done

exit 0
