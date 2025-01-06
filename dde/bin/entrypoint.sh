#!/bin/bash

set -x

rm -f /opt/dde4/tmp/pids/server.pid

cd /opt/dde4
rails db:migrate 

exec "$@"