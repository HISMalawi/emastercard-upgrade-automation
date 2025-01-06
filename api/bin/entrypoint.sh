#!/bin/bash

set -x

rm -f /opt/BHT-EMR-API/tmp/pids/server.pid && rm -f /opt/dde4/tmp/pids/server.pid

cd /opt/BHT-EMR-API
bash bin/update_art_metadata.sh development

cd /opt/dde4
rails db:migrate 

exec "$@"
