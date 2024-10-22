# Generated from trgen 0.23.8
set -e
set -x

exec npx tsx Test.js "$@"

exit $?
